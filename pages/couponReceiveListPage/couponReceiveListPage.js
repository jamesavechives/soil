var app = getApp()
var util = require('../../utils/util.js')

Page({
  data: {
    couponList: [],
    receiveSuccess: 0,  // 领取成功弹窗是否显示
    receiveCount: 0,    // 已领取数量
    receiveLimitNum: 0, // 领取限制数量
  },
  onLoad: function() {
    let _this = this;
    app.sendRequest({
      url: '/promotions/get_coupons',
      data: {
        app_id: app.getAppId(),
        in_show_list: 1,  //0:不在列表内 1:在列表内
        enable_status: 1, //0:下架 1:上架
        stock: 1,         //0:没有库存的 1:有库存的
        page: -1
      },
      hideLoading: true,
      success: function(res) {
        _this.setData({
          couponList: res.data
        });
      }
    })
  }, 
  // 跳转优惠券详情(领取状态)
  gotoCouponDetail: function(event){
    let url = '/pages/couponDetail/couponDetail?detail=' + event.currentTarget.dataset.couponId;
    app.turnToPage(url, false);
  },
  // 领取优惠券
  receiveCoupon: function(event){
    let _this = this;
    let couponId = event.currentTarget.dataset.couponId;
    app.sendRequest({
      url: '/promotions/recv_coupon',
      data: {
        coupon_id: event.currentTarget.dataset.couponId
      },
      hideLoading: true,
      success: function(res) {
        _this.setData({
          receiveSuccess: 1,
          receiveCount: res.data.recv_count,
          receiveLimitNum: res.data.limit_num
        });
        setTimeout(function() {
          _this.hideToast();
        }, 3000);
        if(res.data.is_already_recv == 1){
          let couponList = _this.data.couponList;
          for(var i = 0; i < couponList.length; i++){
            if(couponList[i]['id'] == couponId){
              let newData = {};
              newData['couponList['+i+'].recv_status'] = 0;
              _this.setData(newData); 
            }
          }
        }
      }
    })
  },
  // 查看我的优惠券
  gotoCouponList: function(){
    let url = '/pages/couponList/couponList';
    app.turnToPage(url, false);
  },
  // 关闭toast
  hideToast: function(){
    this.setData({
      receiveSuccess: 0,
      receiveCount: 0,
      receiveLimitNum: 0
    });
  }
})
