
var app = getApp()
var util = require('../../utils/util.js')

Page({
  data: {
    communityId: '',
    tabActive : 'publish' ,
    myArticleCount : 0 ,
    myArticleList : [],
    getMyArticleData : {
      page : 1 ,
      loading : false ,
      nomore : false
    },
    imgData : {} ,
    myCommentData : {
      page : 1 ,
      loading : false ,
      nomore : false
    },
    myCommentList : [],
    myCommentCount : 0,
    theme_color : '#00b6f8'
  },
  onLoad: function(options){
    let communityId = options.detail;

    this.setData({
      communityId: communityId
    });

    this.getThemeColor( communityId );
    this.getMyArticle();
    this.getMyComment();
    app.globalData.communityUsercenterRefresh = false;
  },
  onShow : function() {
    if(app.globalData.communityUsercenterRefresh){
      this.setData({
        myArticleList : [],
        getMyArticleData : {
            page : 1 ,
            loading : false ,
            nomore : false
        },
        myCommentList : [],
        myCommentData : {
          page : 1 ,
          loading : false ,
          nomore : false
        }
      });
      this.getMyArticle();
      this.getMyComment();
      app.globalData.communityUsercenterRefresh = false;
    }
  },
  getMyArticle : function() {
    var that = this,
        sdata = that.data.getMyArticleData ;

    if(sdata.loading || sdata.nomore){
      return ;
    }
    sdata.loading = true;
    app.sendRequest({
      url: '/index.php?r=AppSNS/GetArticleByPage',
      data: {
          page: sdata.page ,
          section_id : that.data.communityId ,
          only_own_record : 1 ,
          page_size: 10
      } ,
      method: 'post',
      success: function (res) {
        if (res.status == 0) {
          let info = res.data,
              oldData = that.data.myArticleList,
              newData = [];

          for (let i = 0; i < res.data.length; i++) {
            let idata = res.data[i];
            idata.title = unescape(idata.title.replace(/\\u/g, "%u"));
            idata.content_text = idata.content.text.replace(/\n|\\n/g , '\n');

            newData.push(idata);
          }

          newData = oldData.concat(newData);
          if(sdata.page == 1){
            that.setData({
              myArticleCount : res.count
            });
          }
          that.setData({
            myArticleList: newData ,
            'getMyArticleData.page' : sdata.page + 1
          });

        }
        that.setData({
          'getMyArticleData.loading': false ,
          'getMyArticleData.nomore' : res.is_more == 0 ? true : false
        });
      },
      fail: function(res){
        that.setData({
          'getMyArticleData.loading': false
        });
      }
    });
  },
  getMyComment : function() {
    var that = this,
        sdata = that.data.myCommentData ;

    if(sdata.loading || sdata.nomore){
      return ;
    }
    sdata.loading = true;
    app.sendRequest({
      url: '/index.php?r=AppSNS/GetCommentByPage',
      data: {
          page: sdata.page ,
          section_id : that.data.communityId ,
          only_own_record : 1 ,
          page_size: 10
      } ,
      method: 'post',
      success: function (res) {
        if (res.status == 0) {
          let info = res.data,
              oldData = that.data.myCommentList,
              newData = [];

          for (let i = 0; i < res.data.length; i++) {
            let idata = res.data[i];
            idata.content_text = idata.content.text.replace(/\n|\\n/g , '\n');

            newData.push(idata);
          }

          newData = oldData.concat(newData);
          if(sdata.page == 1){
            that.setData({
              myCommentCount : res.count
            });
          }
          that.setData({
            myCommentList: newData ,
            'myCommentData.page' : sdata.page + 1
          });

        }
        that.setData({
          'myCommentData.loading': false ,
          'myCommentData.nomore' : res.is_more == 0 ? true : false
        });
      },
      fail: function(res){
        that.setData({
          'myCommentData.loading': false
        });
      }
    });
  },
  imgLoad : function(event,) {
    let owidth = event.detail.width,
        oheight = event.detail.height,
        oscale = owidth / oheight,
        cwidth = 290 ,
        cheight = 120,
        ewidth , eheight,
        index = event.currentTarget.dataset.index,
        newData = {};

    if( oscale > cwidth / cheight ){
      ewidth = cwidth;
      eheight = cwidth / oscale;
    }else{
      ewidth = cheight * oscale;
      eheight = cheight;
    }

    newData['imgData.' + index] = {
      imgWidth : ewidth * 2.34,
      imgHeight : eheight * 2.34
    }
    this.setData(newData);
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
  changeTab : function(event) {
    let type = event.currentTarget.dataset.type;
    this.setData({
      tabActive : type
    });
  },
  myArticleScroll : function(event) {
    this.getMyArticle();
  },
  myCommentScroll : function(event) {
    this.getMyComment();
  },
  turnBack : function(){
    app.turnBack();
  },
  turnToDetail : function(event) {
    let id = event.currentTarget.dataset.id;
    app.turnToPage('/pages/communityDetail/communityDetail?detail=' + id);
  },
  // 跳到编辑页面
  turnToCommunityPublish : function(event) {
    let id = event.currentTarget.dataset.id;
    let index = event.currentTarget.dataset.index;
    let newData = {};

    newData['myArticleList['+index+'].showMore'] = false;
    this.setData(newData);

    app.turnToPage('/pages/communityPublish/communityPublish?detail=' + this.data.communityId + '&articleId=' + id);

  },
  // 展示更多选项
  showMore : function(event) {
    let index = event.currentTarget.dataset.index,
        newData = {};

    newData['myArticleList['+index+'].showMore'] = ! this.data.myArticleList[index].showMore;

    this.setData(newData);

  },
  // 删除文章
  deleteArticle : function( event ) {
    let that = this,
        id = event.currentTarget.dataset.id,
        index = event.currentTarget.dataset.index;

    app.showModal({
      content : '是否删除这个话题？',
      showCancel : true ,
      confirm : function(){
        app.sendRequest({
          url: '/index.php?r=AppSNS/DeleteArticle',
          data: {
            article_id : id ,
            section_id : that.data.communityId
          },
          method: 'post',
          success: function (res) {
            if (res.status == 0) {
              let newData = {},
                  list = that.data.myArticleList;

              list.splice(index , 1);
              newData.myArticleList = list;
              newData.myArticleCount = that.data.myArticleCount - 1;

              that.setData(newData);
              app.globalData.communityPageRefresh = true;
            }
          }
        });
      }
    })
  },
  // 删除评论
  deleteComment : function( event ) {
    let that = this,
        id = event.currentTarget.dataset.id,
        index = event.currentTarget.dataset.index,
        article_id = event.currentTarget.dataset.obj_id;

    app.showModal({
      content : '是否删除这个评论？',
      showCancel : true ,
      confirm : function(){
        app.sendRequest({
          url: '/index.php?r=AppSNS/DeleteComment',
          data: {
            article_id : article_id ,
            section_id : that.data.communityId,
            comment_id : id // 评论id
          },
          method: 'post',
          success: function (res) {
            if (res.status == 0) {
              let newData = {},
                  list = that.data.myCommentList;

              list.splice(index , 1);
              newData.myCommentList = list;
              newData.myCommentCount = that.data.myCommentCount - 1;

              that.setData(newData);
              app.globalData.communityPageRefresh = true;
            }
          }
        });
      }
    })
  }
})
