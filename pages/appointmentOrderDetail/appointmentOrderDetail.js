
var app = getApp()

Page({
  data: {
    orderData: {},
    orderInfo: {},
    orderStatus: { '0':'待付款', '1':'待商家确认', '2':'待消费', '3':'待评价', '4':'退款审核中', '5':'退款中', '6':'已消费', '7':'已关闭'},
    selectAddressId: '',    
    goodsAdditionalInfo: {},
    hasAdditionalInfo: false,
    customFields: [],
    orderId: '',
    isFromTemplateMsg: false,
    originalPrice: '',
    useBalance: '',
    freightAdress:{},
    express_fee:'',
    discount_cut_price: ''
  },
  onLoad: function (options) {
    this.setData({
      orderId: options.detail,
      isFromTemplateMsg: options.from === 'template_msg' ? true : false,
      franchiseeId: options.franchisee || '' 
    })
    this.dataInitial();
  },
  // 每个页面数据初始化函数 dataInitial
  dataInitial: function () {
    this.getOrderDetail(this.data.orderId);
    this.initialAddressId();
  },
  getOrderDetail: function (orderId) {
    var that = this;
    app.getOrderDetail({
      data: {
        order_id: orderId,
        sub_shop_app_id: this.data.franchiseeId
      },
      success: function (res) {
        var data = res.data[0],
            form_data = data.form_data,
            hasAdditionalInfo = false,
            additional_info_goods = [],
            additional_goodsid_arr = [],
            address_id = '';

        for (var i = 0; i < form_data.goods_info.length; i++) {
          var deliveryId = form_data.goods_info[i].delivery_id,
              goodsId = form_data.goods_info[i].id;

          if (deliveryId && deliveryId != '0' && additional_goodsid_arr.indexOf(goodsId) == -1) {
            additional_info_goods.push(form_data.goods_info[i]);
            additional_goodsid_arr.push(goodsId);
            hasAdditionalInfo = true;
          }
        }
        that.setData({
          orderData: data,
          orderInfo: form_data,
          hasAdditionalInfo: hasAdditionalInfo,
          appointment_interval: form_data.appointment_order_info.appointment_interval &&form_data.appointment_order_info.appointment_interval.substring(6, 8) >= 24 ? form_data.appointment_order_info.appointment_interval.substring(0, 6) + '次日' + (form_data.appointment_order_info.appointment_interval.substring(6, 8) * 1 - 24) + form_data.appointment_order_info.appointment_interval.substring(8) : form_data.appointment_order_info.appointment_interval,
          discount_cut_price: form_data.discount_cut_price,
          useBalance: Number(form_data['use_balance']),
          express_fee: res.data[0]['express_fee']
        });
        app.setPreviewGoodsInfo(additional_info_goods);

        // if(form_data.is_self_delivery == 1){
        // // 自提
        //   that.getFreigtAdress();
        // } else {
        // // 快递
        //   address_id = form_data.address_info.address_id;
        //   that.setData({
        //     selectAddressId: address_id,
        //   })
        // }

        app.setGoodsAdditionalInfo(form_data.additional_info || {});
      }
    })
  },
  orderDelete: function (e) {
    var orderId = this.data.orderId,
    that = this,
      franchiseeId = this.data.franchiseeId;
    app.showModal({
      content: '订单删除后不可找回，确认删除？',
      showCancel: true,
      cancelText: '取消',
      confirmText: '确定',
      confirm: function () {
        app.sendRequest({
          url: '/index.php?r=AppShop/HideOrder',
          data: {
            order_id: orderId,
            sub_shop_app_id: franchiseeId
          },
          success: function (res) {
            app.turnBack()
          }
        })
      }
    })
  },
  cancelOrder: function (e) {
    var orderId = this.data.orderInfo.order_id,
        that = this;

    app.showModal({
      content: '是否取消订单？',
      showCancel: true,
      confirmText: '是',
      cancelText: '否',
      confirm: function () {
        app.sendRequest({
          url: '/orders/cancel_order',
          data: {
            order_id: orderId,
            sub_shop_app_id: that.data.franchiseeId
          },
          success: function (res) {
            var data = {};

            data['orderInfo.status'] = 7;
            that.setData(data);
          }
        })
      }
    })
  },
  payOrder: function (e) {
    var address_info = this.data.orderInfo.address_info,
        that = this,
        orderId;

    // if (!address_info && this.data.orderInfo.goods_type != 3) {
    //   app.showModal({
    //     content: '请选择邮寄地址'
    //   })
    //   return;
    // }

    orderId = this.data.orderInfo.order_id;

    if (this.data.orderInfo.total_price == 0) {
      app.sendRequest({
        url: '/index.php?r=AppShop/paygoods',
        data: {
          order_id: orderId,
          total_price: 0
        },
        success: function(res){
          setTimeout(function(){
            app.showToast({
              'title': '支付成功',
              'icon': 'success',
              'success': function(){
                that.paySuccessCallback();
              }
            });
          });
        }
      });
      return;
    }

    app.sendRequest({
      url: '/wxpay/pay',
      data: {
        order_id: orderId
      },
      success: function (res) {
        var param = res.data,
            orderId = that.data.orderInfo.order_id;

        param.orderId = orderId;
        param.goodsType = that.data.orderInfo.goods_type;
        param.success = function () {
          that.paySuccessCallback();
        };
        app.wxPay(param);
      }
    })
  },
  applyDrawback: function () {
    var orderId = this.data.orderInfo.order_id,
        that = this;

    app.showModal({
      content: '确定要申请退款？',
      showCancel: true,
      confirmText: '确定',
      cancelText: '取消',
      confirm: function () {
        app.sendRequest({
          url: '/wxpay/refund',
          data: {
            order_id: orderId,
            sub_shop_app_id: that.data.franchiseeId
          },
          success: function (res) {
            var data = {};

            data['orderInfo.status'] = 4;
            that.setData(data);
          }
        })
      }
    })
  },
  receiveDrawback: function () {
    var orderId = this.data.orderInfo.order_id,
        that = this;

    app.showModal({
      content: '确定已收到退款？',
      showCancel: true,
      confirmText: '确定',
      cancelText: '取消',
      confirm: function () {
        app.sendRequest({
          url: '/index.php?r=AppShop/comfirmRefund',
          data: {
            order_id: orderId,
            sub_shop_app_id: that.data.franchiseeId
          },
          success: function (res) {
            var data = {};

            data['orderInfo.status'] = 7;
            that.setData(data);
          }
        })
      }
    })
  },
  checkLogistics: function () {
    var orderId = this.data.orderInfo.order_id;
    app.turnToPage('/pages/logisticsPage/logisticsPage?detail=' + orderId);
  },
  sureReceipt: function () {
    var orderId = this.data.orderInfo.order_id,
        that = this;

    app.showModal({
      content: '确定已消费？',
      showCancel: true,
      confirmText: '确定',
      cancelText: '取消',
      confirm: function () {
        app.sendRequest({
          url: '/index.php?r=AppShop/comfirmOrder',
          data: {
            order_id: orderId,
            sub_shop_app_id: that.data.franchiseeId
          },
          success: function (res) {
            var data = {};

            data['orderInfo.status'] = 3;
            that.setData(data);
          }
        })
      }
    })
  },
  makeComment: function () {
    var franchiseeId = this.data.franchiseeId,
        pagePath = '/pages/makeComment/makeComment?detail='+this.data.orderInfo.order_id+(franchiseeId ? '&franchisee='+franchiseeId : '');
    app.turnToPage(pagePath);
  },
  showAddressList: function () {
    var addressId = this.data.selectAddressId,
        orderId = this.data.orderInfo.order_id,
        franchiseeId = this.data.franchiseeId;

    app.turnToPage('/pages/myAddress/myAddress?id=' + addressId + '&oid=' + orderId + '&sub_shop_id=' + franchiseeId,true);
  },
  showAddAddress: function () {
    var orderId = this.data.orderInfo.order_id;
    var _this = this;
    if (wx.chooseAddress) {
      wx.chooseAddress({
        success: function (res) {
          app.sendRequest({
            method: 'post',
            url: '/orders/add_wxaddress',
            data: {
              detailInfo: res.detailInfo || '',
              cityName: res.cityName || '',
              provinceName: res.provinceName || '',
              UserName: res.userName || '',
              telNumber: res.telNumber || '',
              district: res.district || '',
              countyName: res.countyName || '',
              order_id: orderId
            },
            success: function () {
              _this.dataInitial();
            },
          })
        }
      })
    } else {
      var orderId = this.data.orderInfo.order_id;
      app.turnToPage('/pages/addAddress/addAddress?oid=' + orderId);
    }
  },
  goToHomepage: function () {
    var router = app.getHomepageRouter();
    app.turnToPage('/pages/' + router + '/' + router, true);
  },
  verificationCode: function() {
    app.turnToPage('/pages/verificationCodePage/verificationCodePage?detail=' + this.data.orderInfo.order_id + '&sub_shop_app_id=' + this.data.franchiseeId);
  },
  getFreigtAdress:function(){
    var that = this;
    app.sendRequest({
      url: '/orders/shop_location',
      data: {
        app_id: app.getAppId()
      },
      success: function (res) {
        that.setData({
          freightAdress: res.data
        });
      }
    });
  },
  freightGoMap:function(){
    var _this = this,
      infor = _this.data.freightAdress.region_string + _this.data.freightAdress.shop_location;
    infor = infor.replace(/\s+/g,'');
    app.sendRequest({
      url: '/index.php?r=Map/GetLatAndLngByAreaInfo',
      data: {
        location_info: infor
      },
      success: function (res) {
        if (res.result){
          wx.openLocation({
            latitude: res.result.location.lat,
            longitude: res.result.location.lng
          })
        }
      }
    });

  },
  initialAddressId:function(){
    var that = this;
    app.sendRequest({
      url: '/orders/address_list',
      data: {
        app_id: app.getAppId()
      },
      success: function (res) {
        if(res.data.length){
          that.setData({
            selectAddressId: res.data[0].id
          });
        }
      }
    });
  },
  freightPlayPhone:function(){
    var that = this;
    app.makePhoneCall(that.data.freightAdress.shop_contact)
  },
  seeAdditionalInfo: function(){
    app.turnToPage('/pages/goodsAdditionalInfo/goodsAdditionalInfo?from=goodsOrderDetail');
  },
  paySuccessCallback: function(){
    let orderId = this.data.orderInfo.order_id;
    let franchiseeId = this.data.franchiseeId;
    let pagePath = '/pages/goodsOrderPaySuccess/goodsOrderPaySuccess?detail=' + orderId 
      + (franchiseeId ? '&franchisee=' + franchiseeId : '' )+ '&code=code';
    if(!franchiseeId){
      app.sendRequest({
        url: '/index.php?r=AppMarketing/CheckAppCollectmeStatus',
        data: {
          order_id: orderId
        },
        success: function(res){
          if(res.valid == 0) {
            pagePath += '&collectBenefit=1';
          }
          app.turnToPage(pagePath, 1);
        }
      });
    } else {
      app.turnToPage(pagePath, 1);
    }
  }
})
