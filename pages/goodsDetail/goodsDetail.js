var app = getApp()
var util = require('../../utils/util.js')
var WxParse = require('../../components/wxParse/wxParse.js');

Page({
  data: {
    goodsId: '',
    goodsInfo: {},
    modelStrs: {},
    selectModelInfo: {
      models: [],
      stock: '',
      price: '',
      buyCount: 1,
      models_text : ''
    },
    commentNums: [],
    commentExample: '',
    defaultPhoto: '',
    allStock: '',
    addToShoppingCartHidden: true,
    ifAddToShoppingCart: true,
    priceDiscountStr: '',
    page_hidden: true,
    appointmentPhone:'',
  },
  onLoad: function(options){
    var goodsId = options.detail,
        contact = options.contact,
        franchiseeId = options.franchisee || '',
        cartGoodsNum = options.cart_num,
        defaultPhoto = app.getDefaultPhoto(),
        goodsType = options.goodsType,
        hidestock = options.hidestock;

    this.setData({
      goodsId: goodsId,
      contact: contact,
      defaultPhoto: defaultPhoto,
      franchiseeId: franchiseeId,
      cartGoodsNum: cartGoodsNum,
      goodsType : goodsType,
      isSeckill : goodsType == 'seckill' ? true : false,
      hidestock : hidestock == 'true' ? true : false
    })
    this.dataInitial();
  },
  dataInitial: function () {
    var that = this;
    app.sendRequest({
      url: '/products/goodsdetails',
      data: {
        data_id: this.data.goodsId,
        sub_shop_app_id: this.data.franchiseeId ,
        is_seckill: this.data.isSeckill ? 1 : ''
      },
      success: that.modifyGoodsDetail,
      complete: function(){
        that.setData({
          page_hidden: false
        })
      }
    })
  },
  onShareAppMessage: function(){
    let goodsId = this.data.goodsId,
        contact = this.data.contact,
        franchiseeId = this.data.franchiseeId,
        cartGoodsNum = this.data.cart_num,
        isSeckill = this.data.isSeckill,
        urlSeckill = isSeckill ? '&goodsType=seckill' : '',
        path = '/pages/goodsDetail/goodsDetail?detail='+ goodsId +'&contact='+ contact + (franchiseeId ? '&franchisee='+franchiseeId+'&cart_num='+cart_num : '') + urlSeckill;

    return app.shareAppMessage({path: path});
  },
  onUnload: function () {
    if(this.downcount){
      this.downcount.clear();
    }
  },
  goToMyOrder: function(){
    var franchiseeId = this.data.franchiseeId,
        pagePath = '/pages/myOrder/myOrder'+(franchiseeId ? '?franchisee='+franchiseeId : '');
    app.turnToPage(pagePath, true);
  },
  goToShoppingCart: function(){
    var franchiseeId = this.data.franchiseeId,
        pagePath = '/pages/shoppingCart/shoppingCart'+(franchiseeId ? '?franchisee='+franchiseeId : '');
    app.turnToPage(pagePath, true);
  },
  goToHomepage: function(){
    var router = app.getHomepageRouter();
    app.turnToPage('/pages/'+router+'/'+router, true);
  },
  goToCommentPage: function(){
    var franchiseeId = this.data.franchiseeId,
        pagePath = '/pages/goodsComment/goodsComment?detail='+this.data.goodsId+(franchiseeId ? '&franchisee='+franchiseeId : '');
    app.turnToPage(pagePath);
  },
  goodsCoverOnload: function(e){
    // var _this = this,
    //     originalWidth = e.detail.width,
    //     originalHeight = e.detail.height;

    // //获取图片的原始长宽
    // var windowWidth = 0;
    // var imageWidth = 0, imageHeight = 0;

    // wx.getSystemInfo({
    //   success: function (res) {
    //     windowWidth = res.windowWidth;
    //     imageWidth = windowWidth;
    //     imageHeight = imageWidth * originalHeight / originalWidth;
    //     _this.setData({
    //       goodsCoverWidth: imageWidth,
    //       goodsCoverHeight: imageHeight
    //     })
    //   }
    // })
  },
  modifyGoodsDetail: function(res){
    var _this = this,
        goods = res.data[0].form_data,
        unitType = goods.appointment_info && goods.appointment_info.unit_type,
        description = goods.description,
        goodsModel = [],
        selectModels = [],
        modelStrs = {},
        price = 0,
        discountStr = '',
        allStock = 0,
        selectStock, selectPrice, selectModelId, matchResult,selectText = '',
        selectImgurl = '',
        appointment_desc,
        appointmentPhone; 
        this.setData({
          unitType: unitType,
          appointmentDesc: goods.appointment_info && goods.appointment_info.appointment_desc ? goods.appointment_info.appointment_desc.replace(/<br \/>/g, "\r\n") : '更多优惠资讯详情请联系商家!',
          appointmentPhone: goods.appointment_info && goods.appointment_info.appointment_phone ? goods.appointment_info.appointment_phone:'',
          displayComment:goods.appointment_info &&  goods.appointment_info.display_comment == '1' ?goods.appointment_info.display_comment : ''
        });
        makePhone:
    WxParse.wxParse('wxParseDescription', 'html', description, _this, 10);

    if(goods.model_items.length){
      var items = goods.model_items;

      if(goods.is_seckill == 1){ //假如是秒杀
        for (let i = 0; i < items.length; i++) {
          let seckill_price = Number(items[i].seckill_price);
          goods.seckill_highPrice = goods.seckill_highPrice >= goods.seckill_price ? goods.seckill_highPrice : goods.seckill_price;
          goods.seckill_lowPrice =goods. seckill_lowPrice <= goods.seckill_price ? goods.seckill_lowPrice : goods.seckill_price;
          allStock += Number(items[i].seckill_stock);

          if(i == 0){
            selectPrice = seckill_price;
            selectStock = items[0].seckill_stock;
            selectModelId = items[0].id;
            selectImgurl = items[0].img_url;
          }
        }
      }else{
        for (let i = 0; i < items.length; i++) {
          price = Number(items[i].price);
          goods.highPrice = goods.highPrice > price ? goods.highPrice : price;
          goods.lowPrice = goods.lowPrice < price ? goods.lowPrice : price;
          allStock += Number(items[i].stock);
          if(i == 0){
            selectPrice = price;
            selectStock = items[0].stock;
            selectModelId = items[0].id;
            selectImgurl = items[0].img_url;
          }
        }
      }
    } else {
      if(goods.is_seckill == 1){ //假如是秒杀
        selectPrice = goods.seckill_price;
        selectStock = goods.seckill_stock;
        allStock = goods.seckill_stock;
      }else{
        selectPrice = goods.price;
        selectStock = goods.stock;
      }
      selectImgurl = goods.cover;
    }
    for(var key in goods.model){
      if (!('1' in goods.model)) {
        delete goods.model[0];
      }
      if(key){
        var model = goods.model[key];
        goodsModel.push(model);
        if(model && model.subModelName){
          if (key == '1' && goods.goods_type == '1'){
          for(var index in model.subModelName){
            var adjustTime =  model.subModelName[index].split('-'),
            submodel = model.subModelName[index].substring(6,8),
            endHours = (submodel - 24) >= 10 ?  (submodel-24) : '0'+ (submodel - 24);
            model.subModelName[index] = submodel >= 24 ?  adjustTime[0] + '-' + '次日' + endHours + ':' + adjustTime[1].split(':')[1]  :adjustTime[0] +  '-当日' + adjustTime[1] ;
          }
        }
        if(goods.goods_type == '1' && model.id == '0'){
          for(var index in model.subModelName){
            model.subModelName[index] = model.subModelName[index] + (goods.appointment_info && goods.appointment_info.unit);
          }
        }
        modelStrs[key] = model.subModelName.join('、');                  
       
        selectModels.push(model.subModelId[0]);
        selectText += '“' + model.subModelName[0] + '” ';
        }

      }
    }
    goods.model = goodsModel;
    if (Number(goods.max_can_use_integral) != 0 ) {
        discountStr = '（积分可抵扣' + (Number(goods.max_can_use_integral) / 100) + '元）';
    }
    if(goods.is_seckill == 1){
      goods.downCount = {
        hours : '00' ,
        minutes : '00' ,
        seconds : '00'
      };
      if(goods.seckill_start_state == 0){
        _this.downcount = app.beforeSeckillDownCount(goods , _this , 'goodsInfo');
      }else if(goods.seckill_start_state == 1){
        _this.downcount = app.duringSeckillDownCount(goods , _this , 'goodsInfo');
      }
    }
    _this.setData({
      goodsInfo: goods,
      modelStrs: modelStrs,
      'selectModelInfo.models': selectModels,
      'selectModelInfo.stock': selectStock,
      'selectModelInfo.price': selectPrice,
      'selectModelInfo.modelId': selectModelId,
      'selectModelInfo.models_text' : selectText,
      'selectModelInfo.imgurl' : selectImgurl,
      allStock: allStock,
      priceDiscountStr: discountStr,
    })
    _this.getAssessList();
  },
  getAssessList: function(){
    var that = this;
    app.getAssessList({
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded;'
      },
      data: {
        goods_id: that.data.goodsId,
        idx_arr: {
          idx: 'level',
          idx_value: 0
        },
        page: 1,
        page_size: 20,
        sub_shop_app_id: this.data.franchiseeId
      },
      success: function(res){
        var commentExample = res.data[0];
        // if(commentExample){
        //   commentExample.add_time = util.formatTime(new Date(commentExample.add_time * 1000));
        // }
        that.setData({
          commentNums: res.num,
          commentExample: commentExample
        })
      }
    });
  },
  showBuyDirectly: function(){
    if(this.data.isSeckill && this.data.goodsInfo.seckill_start_state != 1){
      app.showModal({content: '当前秒杀商品不在秒杀时间范围内，不能立即购买'});
      return ;
    }
    this.setData({
      addToShoppingCartHidden: false,
      ifAddToShoppingCart: false
    })
  },
  showAddToShoppingCart: function(){
    if(this.data.isSeckill && this.data.goodsInfo.seckill_start_state == 2){
      app.showModal({content: '当前秒杀已结束，不能加入购物车'});
      return ;
    }
    this.setData({
      addToShoppingCartHidden: false,
      ifAddToShoppingCart: true
    })
  },
  hiddeAddToShoppingCart: function(){
    this.setData({
      addToShoppingCartHidden: true
    })
  },
  selectSubModel: function(e){
    var dataset = e.target.dataset,
        modelIndex = dataset.modelIndex,
        submodelIndex = dataset.submodelIndex,
        data = {},
        selectModels = this.data.selectModelInfo.models,
        model = this.data.goodsInfo.model,
        text = '';

    selectModels[modelIndex] = model[modelIndex].subModelId[submodelIndex];

    // 拼已选中规格文字
    for (let i = 0; i < selectModels.length; i++) {
      let selectSubModelId = model[i].subModelId;
      for (let j = 0; j < selectSubModelId.length; j++) {
        if( selectModels[i] == selectSubModelId[j] ){
          text += '“' + model[i].subModelName[j] + '” ';
        }
      }
    }
    data['selectModelInfo.models'] = selectModels;
    data['selectModelInfo.models_text'] = text;

    this.setData(data);
    this.resetSelectCountPrice();
  },
  resetSelectCountPrice: function(){
    var _this = this,
        selectModelIds = this.data.selectModelInfo.models.join(','),
        modelItems = this.data.goodsInfo.model_items,
        data = {};

    for (var i = modelItems.length - 1; i >= 0; i--) {
      if(modelItems[i].model == selectModelIds){
        if(_this.data.isSeckill){  //假如是秒杀
          data['selectModelInfo.stock'] = modelItems[i].seckill_stock;
          data['selectModelInfo.price'] = modelItems[i].seckill_price;
          data['selectModelInfo.modelId'] = modelItems[i].id;
          data['selectModelInfo.imgurl'] = modelItems[i].img_url;
        }else{
          data['selectModelInfo.stock'] = modelItems[i].stock;
          data['selectModelInfo.price'] = modelItems[i].price;
          data['selectModelInfo.modelId'] = modelItems[i].id;
          data['selectModelInfo.imgurl'] = modelItems[i].img_url;
        }
        break;
      }
    }
    this.setData(data);
  },
  clickMinusButton: function(e){
    var count = this.data.selectModelInfo.buyCount;

    if(count <= 1){
      return;
    }
    this.setData({
      'selectModelInfo.buyCount': count - 1
    });
  },
  clickPlusButton: function(e){
    var selectModelInfo = this.data.selectModelInfo,
        goodsInfo = this.data.goodsInfo,
        count = selectModelInfo.buyCount,
        stock = selectModelInfo.stock;

    if(count >= stock) {
      app.showModal({content: '购买数量不能大于库存'});
      return;
    }
    if(this.data.isSeckill && count >= goodsInfo.seckill_buy_limit){
      app.showModal({content: '购买数量不能大于秒杀限购数量'});
      return ;
    }
    this.setData({
      'selectModelInfo.buyCount': count + 1
    });
  },
  sureAddToShoppingCart: function(){
    var that = this,
        param = {
                  goods_id: this.data.goodsId,
                  model_id: this.data.selectModelInfo.modelId || '',
                  num: this.data.selectModelInfo.buyCount,
                  sub_shop_app_id: this.data.franchiseeId || '',
                  is_seckill : this.data.isSeckill ? 1 : ''
                };

    app.sendRequest({
      hideLoading: true,
      url: '/orders/add_cart',
      data: param,
      success: function(res){
        app.showToast({
          title: '添加成功',
          icon: 'success'
        });

        setTimeout(function(){
          that.hiddeAddToShoppingCart();
        }, 1000);
      }
    })
  },
  buyDirectlyNextStep: function(e){
    // var that = this,
    //     param = {
    //               goods_id: this.data.goodsId,
    //               model_id: this.data.selectModelInfo.modelId,
    //               num: this.data.selectModelInfo.buyCount,
    //               formId: e.detail.formId,
    //               sub_shop_app_id: this.data.franchiseeId,
    //               is_seckill : this.data.isSeckill ? 1 : ''
    //             };

    // app.sendRequest({
    //   url: '/index.php?r=AppShop/addOrder',
    //   data: param,
    //   success: function(res){
    //     var franchiseeId = that.data.franchiseeId,
    //         pagePath = '/pages/orderDetail/orderDetail?detail='+res.data+(franchiseeId ? '&franchisee='+franchiseeId : '');

    //     that.hiddeAddToShoppingCart();
    //     app.turnToPage(pagePath);
    //   }
    // })
    var franchiseeId = this.data.franchiseeId,
        that = this,
        param = {
                  goods_id: this.data.goodsId,
                  model_id: this.data.selectModelInfo.modelId || '',
                  num: this.data.selectModelInfo.buyCount,
                  sub_shop_app_id: franchiseeId || '',
                  is_seckill : this.data.isSeckill ? 1 : ''
                };

    app.sendRequest({
      url: '/orders/add_cart',
      data: param,
      success: function(res){
        var cart_arr = [res.data],
            pagePath = '/pages/previewGoodsOrder/previewGoodsOrder?cart_arr='+ encodeURIComponent(cart_arr);

        franchiseeId && (pagePath += '&franchisee='+franchiseeId);
        that.hiddeAddToShoppingCart();
        app.turnToPage(pagePath);
      }
    })
  },
  makeAppointment: function(){
    var franchiseeId = this.data.franchiseeId,
        unitTime = this.data.modelStrs[0] && this.data.modelStrs[0].substring(this.data.modelStrs[0].length-1),
        unitType = unitTime == '分' ? 1:(unitTime == '时'? 2 : 3),
        pagePath = '/pages/makeAppointment/makeAppointment?detail='+this.data.goodsId+(franchiseeId ? '&franchisee='+franchiseeId : '') +('&param=' + unitType)
    app.turnToPage(pagePath);
  },
  inputBuyCount: function(e){
    var count = +e.detail.value,
        selectModelInfo = this.data.selectModelInfo,
        goodsInfo = this.data.goodsInfo,
        stock = +selectModelInfo.stock;

    if(count >= stock) {
      count = stock;
      app.showModal({content: '购买数量不能大于库存'});
    }
    if(this.data.isSeckill && count >= +goodsInfo.seckill_buy_limit){
      count = goodsInfo.seckill_buy_limit;
      app.showModal({content: '购买数量不能大于秒杀限购数量'});
    }
    this.setData({
      'selectModelInfo.buyCount': +count
    });
  },
  showShareMenu: function(){
    app.showShareMenu();
  },
  clickPlusImages: function (e) {
    wx.previewImage({
      current: e.currentTarget.dataset.src,
      urls: e.currentTarget.dataset.srcarr
    })
  },
  makePhoneCall: function(){
    app.makePhoneCall(this.data.appointmentPhone);
  }
})