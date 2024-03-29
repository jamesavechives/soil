var app      = getApp();

var pageData = {
  data: {
    "picture1": {
        "type": "picture",
        "style": "opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:351.5625rpx;width:750rpx;margin-left:auto;margin-right:auto;",
        "content": "http://wafer-1255727824.cos.ap-guangzhou.myqcloud.com/abc/a99dc2f44087d2304e34c3d8adc0007d-aboutus2.jpg",
        "customFeature": {
            "boxShadow": "('#000','0','0','5')",
            "boxColor": "#000",
            "boxX": "0",
            "boxY": "0",
            "boxR": "5"
        },
        "animations": [],
        "page_form": "",
        "compId": "picture1",
        "parentCompid": "picture1"
    },
    "free_vessel2": {
        "type": "free-vessel",
        "style": "width:750rpx;height:1000.9375rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;margin-top:23.4375rpx;opacity:1;margin-left:auto;",
        "content": [
            {
                "type": "text",
                "style": "background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:35.8125rpx;height:44.270834326744rpx;width:691.40625rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:29.296875rpx;top:23.4375rpx;margin-right:0;right:auto;",
                "content": "        南昌创高工程材料有限公司是座落在中国军旗升起的地方——英雄城南昌。是一家专业生产销售土工格栅、土工布、土工膜、土工网垫、土工格室、防水板、防水卷材、透水管、止水条、排水板，止水带等土工合成材料民营企业，满足国内外工程对该产品的要求。主要用于公路、铁路、水利、电力环保、市政等建设领域，以优质的服务获得市场。公司成立以来，本着“诚信为本”的朴素经营理念，严格按照现代化企业模式进行管理运营，以务实创新的精神不断进行开拓时间和探索进取。\n\
\n\n\
        厂址：江西省南昌市安义县工业园东阳大道18号 \n\
        经营部地址：江西省南昌市西湖区万豪城3号楼1501室\n\
        电话：0791-88210163、0791-86506851\n\
        手机：13755606671、15879121150\n\
        邮箱：az108@163.com\n\
        ",
                "customFeature": {
                    "boxColor": "rgb(0, 0, 0)",
                    "boxR": "5",
                    "boxStyle": false,
                    "boxX": "0",
                    "boxY": "0"
                },
                "animations": [],
                "compId": "data.content[0]",
                "parentCompid": "free_vessel2",
                "markColor": "",
                "mode": 0
            }
        ],
        "customFeature": {
            "boxColor": "rgb(0, 0, 0)",
            "boxR": 5,
            "boxStyle": false,
            "boxX": 0,
            "boxY": 0
        },
        "animations": [],
        "page_form": "",
        "compId": "free_vessel2"
    },
    "map3": {
        "type": "map",
        "style": "color:rgb(102, 102, 102);font-size:32.8125rpx;height:398.4375rpx;margin-left:auto;margin-right:0;margin-top:23.4375rpx;text-align:left;width:750rpx;",
        "content": "    江西省南昌市安义县工业园东阳大道18号",
        "customFeature": {
            "address": "    江西省南昌市安义县工业园东阳大道18号",
            "type": "withmap",
            "lat": 28.8621340000,
            "lng": 115.6306440000,
            "text": "   江西省南昌市安义县工业园东阳大道18号",
            "map_height": 170,
            "map_width": 320,
            "markers": [
                {
                    "latitude": 28.8621340000,
                    "longitude": 115.6306440000,
                    "name": "   江西省南昌市安义县工业园东阳大道18号",
                    "desc": "   江西省南昌市安义县工业园东阳大道18号"
                }
            ],
            "markers_json_str": "[{\"latitude\":28.8621340000,\"longitude\":115.6306440000,\"name\":\"  江西省南昌市安义县工业园东阳大道18号\",\"desc\":\"  江西省南昌市安义县工业园东阳大道18号\"}]"
        },
        "animations": [],
        "page_form": "",
        "compId": "map3",
        "parentCompid": "map3"
    },
    "free_vessel4": {
        "type": "free-vessel",
        "style": "width:750rpx;height:351.5625rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;opacity:1;margin-left:auto;",
        "content": [
            {
                "type": "button",
                "style": "background-color:#34b6fd;border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(255, 255, 255);font-size:32.8125rpx;height:70.312504470348rpx;line-height:70.312504470348rpx;margin-left:auto;margin-right:0;margin-top:0;opacity:1;text-align:center;width:703.125rpx;position:absolute;left:23.4375rpx;top:39.84375rpx;right:auto;",
                "content": "立即拨打电话",
                "customFeature": {
                    "boxColor": "rgb(0, 0, 0)",
                    "boxR": "5px",
                    "boxStyle": false,
                    "boxX": "0",
                    "boxY": "0",
                    "action": "call",
                    "phone-num": "0791-88210163"
                },
                "animations": [],
                "compId": "data.content[0]",
                "parentCompid": "free_vessel4",
                "itemType": "button",
                "itemParentType": "free-vessel",
                "itemIndex": 0,
                "eventParams": "{\"phone_num\":\"0791-88210163\"}",
                "eventHandler": "tapPhoneCallHandler"
            }
        ],
        "customFeature": {
            "boxColor": "rgb(0, 0, 0)",
            "boxR": 5,
            "boxStyle": false,
            "boxX": 0,
            "boxY": 0
        },
        "animations": [],
        "page_form": "",
        "compId": "free_vessel4"
    },
    "has_tabbar": 0,
    "page_hidden": true,
    "page_form": ""
},
    need_login: false,
    page_router: 'page10014',
    page_form: 'none',
      list_compids_params: [],
      user_center_compids_params: [],
      goods_compids_params: [],
  prevPage:0,
      carouselGroupidsParams: [],
      relobj_auto: [],
      bbsCompIds: [],
      dynamicVesselComps: [{"compid":"free_vessel2","param":{"param_segment":"id","idx":"about"}}],
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
