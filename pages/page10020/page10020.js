var app      = getApp();

var pageData = {
  data: {"text1":{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:37.5rpx;font-weight:bold;height:44.53125rpx;width:703.125rpx;line-height:58.59375rpx;margin-left:auto;margin-top:11.71875rpx;opacity:1;text-align:left;margin-right:auto;","content":"\u5e73\u9762\u8bbe\u8ba1\u65b0\u624b\u9700\u8981\u638c\u63e1\u7684\u57fa\u7840\u77e5\u8bc6","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"page_form":"","compId":"text1","parentCompid":"text1","markColor":"","mode":0},"text2":{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(153, 153, 153);font-size:28.125rpx;height:44.53125rpx;width:703.125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:7.03125rpx;opacity:1;text-align:left;margin-right:auto;","content":"\u8349\u672c\u6728\u5934   2017-06-15","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"page_form":"","compId":"text2","parentCompid":"text2","markColor":"","mode":0},"text3":{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:32.8125rpx;height:44.53125rpx;width:703.125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:11.71875rpx;opacity:1;text-align:left;margin-right:auto;","content":"     \u4e00\u3001\u6ce8\u610f\u5b57\u4f53\n\u65e0\u8bba\u662f\u6807\u5fd7\u8fd8\u662f\u6392\u7248\u3002\u4f5c\u4e3a\u6807\u5fd7\uff0c\u6709\u65f6\u56fe\u5f62\u662f\u6b21\u8981\u7684\uff0c\u5b57\u4f53\u53ef\u4ee5\u5e2e\u4f60\u89e3\u51b3\u5f88\u591a\u95ee\u9898\uff0c\u52aa\u529b\u5b66\u4e60\uff0c\u638c\u63e1\u5b57\u4f53\u7684\u8bbe\u8ba1\u3002\n     \u4e8c\u3001\u8fd8\u662f\u5b57\u4f53\n\u4e00\u5207\u90fd\u79bb\u4e0d\u5f00\u7248\u5f0f\uff0c\u4e00\u5207\u7248\u5f0f\u90fd\u79bb\u4e0d\u5f00\u5b57\u4f53\u3002\u4f5c\u4e3a\u4e1c\u65b9\u6587\u5316\u6700\u6770\u51fa\u7684\u4ee3\u8868\u2014\u2014\u4e2d\u6587\u5b57\u4f53\uff0c\u4f60\u5f97\u597d\u597d\u7422\u78e8\u3002\u4e00\u5f00\u59cb\uff0c\u4f60\u6700\u597d\u5148\u60f3\u5230\u662f\u5b8b\u4f53\u8fd8\u662f\u9ed1\u4f53\uff0c\u7279\u6b8a\u7684\u60c5\u51b5\u4e0b\uff0c\u4f60\u624d\u53bb\u8003\u8651\u662f\u5426\u9009\u7528\u8fd9\u4e24\u5927\u5b57\u4f53\u4e4b\u5916\u7684\u5b57\u4f53\u3002\u7b80\u5355\u7684\u8bb2\uff0c\u5b8b\u4f53\u5f88\u4e25\u8c28\uff0c\u5f88\u5e84\u91cd\uff0c\u4e5f\u5f88\u5c0a\u8d35\uff1b\u9ed1\u4f53\uff0c\u5f88\u73b0\u4ee3\uff0c\u5f88\u6574\u9f50\uff0c\u5f88\u7b80\u7ea6\u3002\n\u5176\u6b21\uff0c\u5b57\u4f53\u7684\u95f4\u8ddd\u6700\u597d\u5c0f\u4e8e\u5e38\u89c4\u95f4\u8ddd\u3002\u4ee5\u201c0\u201d\u4e3a\u6807\u51c6\uff0c\u4f60\u6700\u597d\u53d6\u201c-50\u201d\uff0c\u8fd9\u53ef\u9002\u7528\u4e8e\u6807\u9898\u7c7b\u5b57\u4f53\u6392\u7248\uff0c\u4f5c\u4e3a\u5927\u9762\u79ef\u7684\u6b63\u6587\u6392\u7248\uff0c\u540c\u6837\u9700\u8981\u7a0d\u5fae\u7f29\u5c0f\u5b57\u4f53\u7684\u95f4\u8ddd\uff0c\u7a00\u758f\u7684\u95f4\u8ddd\u4e0d\u4f46\u4e0d\u80fd\u5b8c\u6210\u8f7b\u677e\u9605\u8bfb\u7684\u4efb\u52a1\uff0c\u53cd\u800c\u4f1a\u8ba9\u773c\u775b\u75b2\u60eb\u3002\u628a\u63e1\u201c\u7d27\u51d1\u201d\u548c\u201c\u7a00\u758f\u201d\u7684\u533a\u522b\u3002\n\u6700\u540e\uff0c\u5b57\u4f53\u7684\u9ad8\u5ea6\uff0c\u6700\u597d\u538b\u4e00\u538b\uff0c\u5c31\u662f\u538b\u6241\u4e00\u4e9b\uff0c\u8fd9\u6837\uff0c\u6c49\u5b57\u770b\u4e0a\u53bb\uff0c\u4f1a\u66f4\u8c61\u6c49\u5b57\u4e00\u4e9b\u3002 \u8bf4\u7684\u5bf9\u4e0d\u5bf9\uff0c\u4e0d\u59a8\u8bd5\u4e00\u8bd5\uff0c\u90fd\u662f\u5f88\u7b80\u5355\u7684\u5904\u7406\u3002\n     \u4e09\u3001\u7248\u5f0f\n\u5982\u679c\u4f60\u529f\u529b\u4e0d\u591f\uff0c\u6216\u8005\u65f6\u95f4\u4e0d\u591f\uff0c\u6700\u597d\u91c7\u7528\u7a33\u59a5\u7684\u6392\u7248\u65b9\u5f0f\u3002\u8bb0\u5f97\uff0c\u5728\u5546\u4e1a\u8bbe\u8ba1\u4e2d\uff0c\u4e0d\u8981\u8f7b\u6613\u5c1d\u8bd5\u5938\u5f20\u7684\u8df3\u8dc3\u6027\u7684\u7248\u5f0f\uff0c\u90a3\u4e9b\u770b\u4e0a\u53bb\u6108\u968f\u610f\u6108\u51cc\u4e71\u7684\u4f18\u79c0\u4f5c\u54c1\uff0c\u9700\u8981\u7684\u65f6\u95f4\u6108\u591a\uff0c\u4f60\u9700\u8981\u975e\u5e38\u624e\u5b9e\u7684\u6784\u6210\u529f\u5e95\uff0c\u540c\u65f6\u4f60\u9700\u8981\u5904\u7406\u6240\u6709\u5df2\u7ecf\u51fa\u73b0\u7684\u7ec6\u8282\uff0c\u5e76\u4e14\u8981\u521b\u9020\u66f4\u591a\u7684\u7ec6\u8282\u3002\u4e00\u4e2a\u5e73\u9762\u91cc\uff0c\u4e24\u4e2a\u5143\u7d20\u7684\u8ddd\u79bb\u53ef\u4ee5\u6269\u5c55\u5230\u65e0\u9650\u5927\uff0c\u4f46\u4f60\u5f97\u6709\u8db3\u591f\u7684\u529b\u6c14\uff0c\u4e0d\u8ba9\u5b83\u4eec\u8dd1\u51fa\u754c\u4e86\u3002\u8d8a\u4e71\uff0c\u8d8a\u96be\uff0c\u800c\u4e0d\u662f\u53cd\u4e4b\u3002\u5728\u8fd9\u91cc\u6240\u5f3a\u8c03\u5546\u4e1a\u8bbe\u8ba1\uff0c\u8fd9\u662f\u4e3a\u4f60\u7684\u5b89\u5168\u7740\u60f3\uff0c\u56e0\u4e3a\u5ba2\u6237\u662f\u4ed8\u8d39\u7684\uff0c\u5982\u679c\u4f60\u7684\u529f\u529b\u5c1a\u6d45\uff0c\u5c31\u4e0d\u8981\u5192\u9669\u3002\u4e00\u4e2a\u7b80\u5355\u7684\u6d4b\u8bd5\u662f\uff0c\u4e00\u5f20\u767d\u7eb8\u4e0a\uff0c\u6709\u4e24\u4e2a\u5706\u70b9\uff0c\u60f3\u4e00\u60f3\uff0c\u5982\u4f55\u5904\u7406\u4e24\u70b9\u7684\u5927\u5c0f\u548c\u8ddd\u79bb\uff0c\u53ef\u4ee5\u8ba9\u8fd9\u5f20\u7eb8\u770b\u4e0a\u53bb\u7d27\u7ef7\u7684\u5feb\u8981\u7834\u88c2\uff1f\u5982\u679c\u4f60\u53ef\u4ee5\u5236\u9020\u51fa\u8fd9\u6837\u7684\u89c6\u89c9\uff0c\u4f60\u5c31\u53ef\u4ee5\u53bb\u521b\u9020\u90a3\u4e9b\u590d\u6742\u7684\u7248\u5f0f\u3002\n     \u56db\u3001\u8282\u594f\n\u56de\u5230\u201c\u7a33\u91cd\u201d\u7684\u7248\u5f0f\u4e0a\u6765\uff0c\u6700\u91cd\u8981\u7684\u4e00\u70b9\u662f\uff1a\u8282\u594f\u3002 \u4ec0\u4e48\u53eb\u8282\u594f\uff1f\u56e0\u4e3a\u4e0d\u540c\uff0c\u6240\u4ee5\u4ea7\u751f\u4e86\u8282\u594f\u3002\u5bf9\u6bd4\uff0c\u53cd\u5dee\uff0c\u65e0\u8bba\u662f\u9762\u79ef\u4e5f\u597d\uff0c\u8272\u5f69\u4e5f\u597d\uff0c\u7ed3\u6784\u4e5f\u597d\uff0c\u4e0d\u8981\u4ec0\u4e48\u90fd\u4e00\u6837\uff0c\u4e5f\u4e0d\u8981\u4ec0\u4e48\u90fd\u4e0d\u4e00\u6837\uff0c\u5426\u5219\uff0c\u5c31\u6ca1\u6709\u8282\u594f\u53ef\u8a00\u3002\u53ef\u4ee5\u7528\u97f3\u7b26\u5982\u4f55\u4ea7\u751f\u65cb\u5f8b\u6765\u7406\u89e3\u6392\u7248\u4e2d\u7684\u201c\u8282\u594f\u201d\u3002\n     \u4e94\u3001\u8272\u5f69\n\u5982\u679c\u4f60\u60f3\u63d0\u9ad8\uff0c\u5c31\u5c3d\u91cf\u629b\u5f03\u6b63\u7edf\u7684\u7ea2\u9ec4\u84dd\u7eff\u5427\u3002\u8272\u5f69\u7684\u611f\u89c9\uff0c\u57fa\u672c\u4e0a\u9760\u5929\u8d4b\u3002\u4f46\u4e5f\u53ef\u4ee5\u57f9\u517b\uff0c\u5982\u679c\u4f60\u7231\u770b\u7535\u5f71\uff0c\u591a\u7559\u610f\u5927\u5e08\u4eec\u7684\u7535\u5f71\uff0c\u770b\u770b\u91cc\u9762\u7684\u7528\u8272\uff0c\u5c31\u62ff\u5e38\u89c1\u7684\u6765\u8bf4\uff0c\u770b\u770b\u738b\u5bb6\u536b\u7684\u7535\u5f71\uff0c\u6bcf\u4e00\u90e8\uff0c\u5c31\u662f\u4e00\u672c\u8272\u5f69\u5b66\u3002\u5e73\u9762\u8bbe\u8ba1\u4e2d\uff0c\u8272\u5f69\u662f\u4ec0\u4e48\uff1f\u8272\u5f69\u4e0d\u662f\u7ea2\u9ec4\u84dd\u7eff\uff0c\u8272\u5f69\u662f\u60c5\u7eea\uff0c\u6bcf\u4e00\u79cd\u8272\u5f69\u7684\u9009\u7528\u548c\u8c03\u5236\uff0c\u5c31\u662f\u6bcf\u4e00\u79cd\u5fc3\u60c5\u7684\u8868\u8fbe\u3002\u6240\u4ee5\uff0c\u6700\u91cd\u8981\u7684\u4e00\u70b9\uff0c\u4f60\u5fc5\u987b\u662f\u4e2a\u975e\u5e38\u611f\u6027\u7684\u4eba\u3002","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"page_form":"","compId":"text3","parentCompid":"text3","markColor":"","mode":0},"has_tabbar":0,"page_hidden":true,"page_form":"al"},
    need_login: false,
    page_router: 'page10020',
    page_form: 'none',
      list_compids_params: [],
      user_center_compids_params: [],
      goods_compids_params: [],
  prevPage:0,
      carouselGroupidsParams: [],
      relobj_auto: [],
      bbsCompIds: [],
      dynamicVesselComps: [],
      communityComps: [],
      franchiseeComps: [],
      cityLocationComps: [],
      seckillOnLoadCompidParam: [],
      dynamicClassifyGroupidsParams: [],
      requesting: false,
  requestNum: 1,
  modelChoose: [],
  modelChooseId: '',
  modelChooseName: [],
  onLoad: function (e) {
    app.onPageLoad(e);
  },
  dataInitial: function () {
    app.pageDataInitial();
  },
  onShareAppMessage: function (e) {
    return app.onPageShareAppMessage(e);
  },
  onShow: function () {
    app.onPageShow();
  },
  reachBottomFuc: [],
  onReachBottom: function () {
    app.onPageReachBottom( this.reachBottomFuc );
  },
  onUnload: function () {
    app.onPageUnload();
  },
  tapPrevewPictureHandler: function (e) {
    app.tapPrevewPictureHandler(e);
  },
  suspensionBottom: function () {
    app.suspensionBottom();
  },
  pageScrollFunc: function (e) {
    app.pageScrollFunc(e);
  },
  dynamicVesselScrollFunc: function (e) {
    app.dynamicVesselScrollFunc(e);
  },
  goodsScrollFunc: function (e) {
    app.goodsScrollFunc(e);
  },
  franchiseeScrollFunc: function (e) {
    app.franchiseeScrollFunc(e);
  },
  seckillScrollFunc: function (e) {
    app.seckillScrollFunc(e);
  },
  changeCount: function (e) {
    app.changeCount(e);
  },
  inputChange: function (e) {
    app.inputChange(e);
  },
  bindDateChange: function (e) {
    app.bindDateChange(e);
  },
  bindTimeChange: function (e) {
    app.bindTimeChange(e);
  },
  bindSelectChange: function (e) {
    app.bindSelectChange(e);
  },
  bindScoreChange: function (e) {
    app.bindScoreChange(e);
  },
  submitForm: function (e) {
    app.submitForm(e);
  },
  udpateVideoSrc: function (e) {
    app.udpateVideoSrc(e);
  },
  tapMapDetail: function (e) {
    app.tapMapDetail(e);
  },
  uploadFormImg: function (e) {
    app.uploadFormImg(e);
  },
  deleteUploadImg: function (e) {
    app.deleteUploadImg(e);
  },
  listVesselTurnToPage: function (e) {
    app.listVesselTurnToPage(e);
  },
  dynamicVesselTurnToPage: function (e) {
    app.dynamicVesselTurnToPage(e);
  },
  userCenterTurnToPage: function (e) {
    app.userCenterTurnToPage(e);
  },
  turnToGoodsDetail: function (e) {
    app.turnToGoodsDetail(e);
  },
  turnToFranchiseeDetail: function (e) {
    app.turnToFranchiseeDetail(e);
  },
  turnToSeckillDetail: function (e) {
    app.turnToSeckillDetail(e);
  },
  sortListFunc: function (e) {
    app.sortListFunc(e);
  },
  bbsInputComment: function (e) {
    app.bbsInputComment(e);
  },
  bbsInputReply: function (e) {
    app.bbsInputReply(e);
  },
  uploadBbsCommentImage: function (e) {
    app.uploadBbsCommentImage(e);
  },
  uploadBbsReplyImage: function (e) {
    app.uploadBbsReplyImage(e);
  },
  deleteCommentImage: function (e) {
    app.deleteCommentImage(e);
  },
  deleteReplyImage: function (e) {
    app.deleteReplyImage(e);
  },
  bbsPublishComment: function (e) {
    app.bbsPublishComment(e);
  },
  clickBbsReplyBtn: function (e) {
    app.clickBbsReplyBtn(e);
  },
  bbsPublishReply: function (e) {
    app.bbsPublishReply(e);
  },
  searchList: function (e) {
    app.searchList(e);
  },
  selectLocal: function (e) {
    app.selectLocal(e);
  },
  cancelCity: function (e) {
    app.cancelCity(e);
  },
  bindCityChange: function (e) {
    app.bindCityChange(e);
  },
  submitCity: function (e) {
    app.submitCity(e);
  },
  openTakeoutLocation: function (e) {
    app.openTakeoutLocation(e);
  },
  callTakeout: function (e) {
    app.callTakeout(e);
  },
  getMoreAssess: function (e) {
    app.getMoreAssess(e);
  },
  changeEvaluate: function (e) {
    app.changeEvaluate(e)
  },
  deleteAllCarts: function (e) {
    app.deleteAllCarts(e);
  },
  clickWaimaiCategory: function (e) {
    app.clickWaimaiCategory(e);
  },
  takeoutGoodsListMinus: function (e) {
    app.takeoutGoodsListMinus(e);
  },
  takeoutGoodsListPlus: function (e) {
    app.takeoutGoodsListPlus(e);
  },
  takeoutCartListMinus: function (e) {
    app.takeoutCartListMinus(e);
  },
  takeoutCartListPlus: function (e) {
    app.takeoutCartListPlus(e);
  },
  changeAssessType: function (e) {
    app.changeAssessType(e);
  },
  showShoppingCartPop: function (e) {
    app.showShoppingCartPop(e);
  },
  hideTakeoutShoppingCart: function (e) {
    app.hideTakeoutShoppingCart(e);
  },
  showTakeoutDetail: function (e) {
    app.showTakeoutDetail(e);
  },
  hideTakeoutDetailPop: function (e) {
    app.hideTakeoutDetailPop(e);
  },
  hideTakeoutModelPop: function (e) {
    app.hideTakeoutModelPop(e);
  },
  chooseTakeoutModel: function (e) {
    app.chooseTakeoutModel(e);
  },
  sureChooseModel: function (e) {
    app.sureChooseModel(e);
  },
  clickWaimaiChooseComplete: function (e) {
    app.clickWaimaiChooseComplete(e);
  },
  tapGoodsTradeHandler: function (e) {
    app.tapGoodsTradeHandler(e);
  },
  tapInnerLinkHandler: function (e) {
    app.tapInnerLinkHandler(e);
  },
  tapPhoneCallHandler: function (e) {
    app.tapPhoneCallHandler(e);
  },
  tapRefreshListHandler: function (e) {
    app.tapRefreshListHandler(e);
  },
  tapGetCouponHandler: function (e) {
    app.tapGetCouponHandler(e);
  },
  tapCommunityHandler: function (e) {
    app.tapCommunityHandler(e);
  },
  turnToCommunityPage: function (e) {
    app.turnToCommunityPage(e);
  },
  tapToFranchiseeHandler: function (e) {
    app.tapToFranchiseeHandler(e);
  },
  tapToTransferPageHandler: function () {
    app.tapToTransferPageHandler();
  },
  tapToSeckillHandler: function (e) {
    app.tapToSeckillHandler(e);
  },
  tapToPromotionHandler: function () {
    app.tapToPromotionHandler();
  },
  tapToCouponReceiveListHandler: function () {
    app.tapToCouponReceiveListHandler();
  },
  tapToRechargeHandler: function () {
    app.tapToRechargeHandler();
  },
  tapToXcx: function (e) {
    app.tapToXcx(e);
  },
  tapFranchiseeLocation: function (e) {
    app.tapFranchiseeLocation(e);
  },
  showAddShoppingcart: function (e) {
    app.showAddShoppingcart(e);
  },
  hideAddShoppingcart: function () {
    app.hideAddShoppingcart();
  },
  selectGoodsSubModel: function (e) {
    app.selectGoodsSubModel(e);
  },
  resetSelectCountPrice: function () {
    app.resetSelectCountPrice();
  },
  // 电商
  clickGoodsMinusButton: function (e) {
    app.clickGoodsMinusButton();
  },
  clickGoodsPlusButton: function (e) {
    app.clickGoodsPlusButton();
  },
  sureAddToShoppingCart: function () {
    app.sureAddToShoppingCart();
  },
  sureAddToBuyNow: function () {
    app.sureAddToBuyNow();
  },
  clickTostoreMinusButton: function (e) {
    app.clickTostoreMinusButton(e);
  },
  clickTostorePlusButton: function (e) {
    app.clickTostorePlusButton(e);
  },
  readyToPay: function () {
    app.readyToTostorePay();
  },
  getValidateTostore: function () {
    app.getValidateTostore();
  },
  goToShoppingCart: function () {
    app.goToShoppingCart();
  },
  getCartList: function () {
    app.getTostoreCartList();
  },
  stopPropagation: function () {
  },
  turnToSearchPage:function (e) {
    app.turnToSearchPage(e);
  },
  previewImage: function (e) {
    var dataset = e.currentTarget.dataset;
    app.previewImage({
      current : dataset.src,
      urls: dataset.previewImgarr,
    });
  },
  scrollPageTop: function () {
    app.pageScrollTo(0);
  },
  suspensionTurnToPage: function (e) {
    app.suspensionTurnToPage(e);
  },
   tapToLuckyWheel: function (e) {
    app.tapToLuckyWheel(e);
  },
  tapToGoldenEggs: function (e) {
    app.tapToGoldenEggs(e);
  },
  tapToScratchCard: function (e) {
    app.tapToScratchCard(e);
  },
  tapToLuckyWheel: function (e) {
    app.tapToLuckyWheel(e);
  },
  tapToGoldenEggs: function (e) {
    app.tapToGoldenEggs(e);
  },
  keywordList:{},
  bindSearchTextChange: function (e) {
    this.keywordList[e.currentTarget.dataset.compid] = e.detail.value;
  },
  // 文字组件跳到地图
  textToMap: function(e) {
    app.textToMap(e);
  },
  tapDynamicClassifyFunc: function(e){
    app.tapDynamicClassifyFunc(e);
  }
};
Page(pageData);
