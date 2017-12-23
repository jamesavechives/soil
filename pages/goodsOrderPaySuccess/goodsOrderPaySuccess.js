
var app = getApp()

Page({
  data: {
    status: 0, // 0: 普通页面 1:有集集乐的情况
    orderId: '',
    franchiseeId: '',
    collectBenefitData: {}, // 集集乐数据
    starData: [], //集集乐的星 light:已集样式 dark:未集样式
  },
  onLoad: function (options) {
    let that = this;
    // 判断是否有集集乐活动
    if(options.collectBenefit == 1){
      that.getCollectBenefitData(options.detail);
      that.setData({
        'status': 1
      });
    }
    that.setData({
      'orderId': options.detail,
      'franchiseeId': options.franchisee,
      'is_group': options.is_group,
      'code': options.code
    });
    that.getGoldenData(options.detail);
  },
  //砸金蛋
  getGoldenData: function (id) {
    let that = this;
    app.sendRequest({
      url: "/index.php?r=appLotteryActivity/getTimeAfterConsume",
      method: "post",
      data: {
        app_id: app.globalData.appId,
        order_id: id
      },
      success: function (data) {

      }
    })
  },
  // 获取集集乐数据
  getCollectBenefitData: function(id){
    let that = this;
    app.sendRequest({
      url: '/index.php?r=AppMarketing/CollectmeSendCoupon',
      data: {
        'order_id': id,
      },
      hideLoading: true,
      success: function(res){     
        let starData = [];
        for(var i = 0; i < res.data.star_num; i++){
          starData.push('light');
        }
        for(var i = 0; i < res.data.collect_num - res.data.star_num; i++){
          starData.push('dark');
        }
        that.setData({
          'collectBenefitData': res.data,
          'starData': starData
        });
      }
    });
  },
  goToHomepage: function(){
    let router = app.getHomepageRouter();
    app.reLaunch({
      url:'/pages/' + router + '/' + router
    });
  },
  goToOrderDetail: function(){
    let that = this;
    let groupPath = '/pages/groupOrderDetail/groupOrderDetail?id=' + that.data.orderId + (that.data.franchiseeId ? '&franchisee=' + that.data.franchiseeId : '');
    let pagePath = '/pages/goodsOrderDetail/goodsOrderDetail?detail=' + that.data.orderId  + ( that.data.franchiseeId ? '&franchisee=' + that.data.franchiseeId : '');
    let appointmentPath = '/pages/appointmentOrderDetail/appointmentOrderDetail?detail=' + that.data.orderId + (that.data.franchiseeId ? '&franchisee=' + that.data.franchiseeId : '');
    if(this.data.is_group == 'true'){
      app.turnToPage(groupPath, true);
    }else if(this.data.code){
      app.turnToPage(appointmentPath, true);
    }else{
      app.turnToPage(pagePath, true);
    }
  }
})
