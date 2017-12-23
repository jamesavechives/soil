
var app = getApp()
var util = require('../../utils/util.js')

Page({
  data: {
    communityId: '',
    articleData : {
      title : '',
      text : '',
      imgs : [],
      category_id : ''
    },
    category : [],
    categoryIndex : 0 ,
    picker_value : '全部',
    theme_color : '#00b6f8'
  },
  onLoad: function(options){
    let communityId = options.detail;
    let article_id = options.articleId;

    this.setData({
      communityId: communityId ,
      articleId : article_id || ''
    });

    this.getThemeColor( communityId );
    this.getCategory();

  },
  submitData : function(event) {
    let that = this;
    let title = that.data.articleData.title;
    let text = that.data.articleData.text;

    if( !title ){
      app.showModal({content : '请填写标题'});
      return ;
    }
    if( !text ){
      app.showModal({content : '请填写话题内容'});
      return ;
    }

    let url = '/index.php?r=AppSNS/AddArticle';
    let article_id = that.data.articleId;

    if(article_id){
      url = '/index.php?r=AppSNS/UpdateArticle';
    }

    app.sendRequest({
      url: url,
      data: {
        article_id : article_id,
        section_id : that.data.communityId , //版块id
        category_id : that.data.articleData.category_id, //分类id 可不传
        title : title ,
        text : text ,
        imgs : that.data.articleData.imgs ,
        is_carousel : 0, //是否开启轮播 1为开启 0不开启
        top_flag :  0, //是否置顶 1为置顶 0不置顶
        hot_flag :  0 //是否精品 1是 0否
      },
      method: 'post',
      success: function (res) {
        if (res.status == 0) {
          app.showToast({
            title : '发布成功' , 
            success : function(){
              app.turnBack();
            }
          });
          app.globalData.communityPageRefresh = true;
          app.globalData.communityUsercenterRefresh = true;
        }
      }
    });
  },
  bindTitleInput : function(event) {
    let val = event.detail.value;
    this.setData({
      'articleData.title' : val
    });
  },
  bindTextInput : function(event) {
    let val = event.detail.value;
    this.setData({
      'articleData.text' : val
    });
  },
  bindPickerChange : function(event){
    let val = event.detail.value;
    this.setData({
      categoryIndex : val,
      'articleData.category_id' : this.data.category[val].id,
      picker_value : this.data.category[val].name
    });
  },
  uploadImg : function(){
    var that = this,
        imgs = that.data.articleData.imgs;

    app.chooseImage(function(imageUrls){
      imgs = imgs.concat(imageUrls);
      that.setData({
        'articleData.imgs' : imgs
      });
    } , 9);
  },
  deleteImg : function(event){
    var index = event.currentTarget.dataset.index,
        imgs = this.data.articleData.imgs;

    imgs.splice(index , 1);
    this.setData({
      'articleData.imgs' : imgs
    });
  },
  getCategory : function() {
    var that = this;
    app.sendRequest({
      url: '/index.php?r=AppSNS/GetCategoryByPage',
      data: {
        section_id : that.data.communityId ,
        page: 1 ,
        page_size: 100
      },
      method: 'post',
      success: function (res) {
        if (res.status == 0) {
          let info = res.data,
              newdata = [{id: '' , name: '全部'}].concat(info);
          that.setData({
            category: newdata
          });
          let article_id = that.data.articleId;
          if(article_id){
            that.getArticle(article_id);
          }
        }
      }
    });
  },
  getThemeColor : function( section_id ) {
    var that = this;
    app.sendRequest({
      url: '/index.php?r=AppSNS/GetSectionByPage',
      data: {
        page:  1 ,
        section_id : section_id
      },
      method: 'post',
      success: function (res) {
        if (res.status == 0) {
          let info = res.data[0];

          that.setData({
            theme_color: info.theme_color
          });
        }
      }
    });
  },
  getArticle : function(article_id) {
    var that = this;
    app.sendRequest({
      url: '/index.php?r=AppSNS/GetArticleByPage',
      data: {
        article_id: article_id
      },
      method: 'post',
      success: function (res) {
        if (res.status == 0) {
          let info = res.data[0],
              newdata = {};

          newdata['articleData.title'] = info.title;
          newdata['articleData.text'] = info.content.text;
          newdata['articleData.imgs'] = info.content.imgs || [];
          newdata['articleData.category_id'] = info.category_id;

          let category = that.data.category;
          for (var i = 0; i < category.length; i++) {
            if(category[i].id == info.category_id){
              newdata['categoryIndex'] = i;
              newdata['picker_value'] = category[i].name;
              break;
            }
          }

          that.setData(newdata);
        }
      }
    });
  }
})
