var app      = getApp();

var pageData = {
  data: {"carousel1":{"type":"carousel","style":"height:351.5625rpx;margin-left:auto;margin-right:auto;margin-top:0;opacity:1;","content":[{"customFeature":[],"pic":"","content":"","parentCompid":"carousel1","style":""},{"customFeature":[],"pic":"","content":"","parentCompid":"carousel1","style":""}],"customFeature":{"autoplay":true,"interval":2,"carouselgroupId":"52908"},"animations":[],"page_form":"","compId":"carousel1"},"free_vessel2":{"type":"free-vessel","style":"width:750rpx;height:269.53125rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;opacity:1;margin-left:auto;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:50%;border-style:none;height:128.90625rpx;width:128.90625rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:58.59375rpx;top:35.15625rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5965d9039fbcd.png","customFeature":{"boxShadow":"('#000','0','0','5')","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"community","community-id":"3476","community-name":"UI\u6d41\u884c\u8d8b\u52bf"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel2","itemType":"picture","itemParentType":"free-vessel","itemIndex":0,"eventParams":"{\"community_id\":\"3476\"}","eventHandler":"tapCommunityHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:50%;border-style:none;height:128.90625rpx;width:128.90625rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:310.54687052965rpx;top:35.15625rpx;right:auto;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5965d90656d33.png","customFeature":{"boxShadow":"('#000','0','0','5')","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"community","community-id":"3477","community-name":"\u6d77\u62a5\u7684\u5143\u7d20"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel2","itemType":"picture","itemParentType":"free-vessel","itemIndex":1,"eventParams":"{\"community_id\":\"3477\"}","eventHandler":"tapCommunityHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:50%;border-style:none;height:128.90625rpx;width:128.90625rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:553.125rpx;top:35.15625rpx;right:auto;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5965d9099d03d.png","customFeature":{"boxShadow":"('#000','0','0','5')","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"community","community-id":"3478","community-name":"\u5e7f\u544a\u600e\u4e48\u8bbe\u8ba1"},"animations":[],"compId":"data.content[2]","parentCompid":"free_vessel2","itemType":"picture","itemParentType":"free-vessel","itemIndex":2,"eventParams":"{\"community_id\":\"3478\"}","eventHandler":"tapCommunityHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:32.8125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:35.15625rpx;top:187.5rpx;margin-right:0;","content":"UI\u6d41\u884c\u8d8b\u52bf","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"community","community-id":"3476","community-name":"UI\u6d41\u884c\u8d8b\u52bf"},"animations":[],"compId":"data.content[3]","parentCompid":"free_vessel2","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":3,"eventParams":"{\"community_id\":\"3476\"}","eventHandler":"tapCommunityHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:32.8125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:276.55028700829rpx;top:187.5rpx;margin-right:0;right:auto;","content":"\u6d77\u62a5\u8bbe\u8ba1\u5143\u7d20","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"community","community-id":"3477","community-name":"\u6d77\u62a5\u7684\u5143\u7d20"},"animations":[],"compId":"data.content[4]","parentCompid":"free_vessel2","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":4,"eventParams":"{\"community_id\":\"3477\"}","eventHandler":"tapCommunityHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:32.8125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:520.3125rpx;top:187.5rpx;margin-right:0;","content":"\u5e7f\u544a\u600e\u4e48\u8bbe\u8ba1","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"community","community-id":"3478","community-name":"\u5e7f\u544a\u600e\u4e48\u8bbe\u8ba1"},"animations":[],"compId":"data.content[5]","parentCompid":"free_vessel2","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":5,"eventParams":"{\"community_id\":\"3478\"}","eventHandler":"tapCommunityHandler"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"page_form":"","compId":"free_vessel2"},"free_vessel3":{"type":"free-vessel","style":"width:750rpx;height:82.03125rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;margin-top:11.71875rpx;opacity:1;margin-left:auto;","content":[{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:35.15625rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:304.68749552965rpx;top:18.75rpx;margin-right:0;right:auto;","content":"\u8bbe\u8ba1\u8bfe\u5802","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel3","markColor":"","mode":0}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"page_form":"","compId":"free_vessel3"},"free_vessel4":{"type":"free-vessel","style":"width:750rpx;height:328.125rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;margin-top:2.34375rpx;opacity:1;margin-left:auto;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:210.9375rpx;width:257.8125rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:23.4375rpx;top:23.4375rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5965e910a1bc8.png","customFeature":{"boxShadow":"('#000','0','0','5')","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10020"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel4","itemType":"picture","itemParentType":"free-vessel","itemIndex":0,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10020\\\/page10020\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:35.15625rpx;height:44.53125rpx;width:421.875rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:304.6875rpx;top:35.15625rpx;margin-right:0;","content":"\u5e73\u9762\u8bbe\u8ba1\u65b0\u624b\u9700\u8981\u638c\u63e1\u7684\u57fa\u7840\u77e5\u8bc6","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10020"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel4","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":1,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10020\\\/page10020\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(153, 153, 153);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:304.6875rpx;top:140.625rpx;margin-right:0;","content":"\u65e0\u8bba\u662f\u6807\u5fd7\u8fd8\u662f\u6392\u7248\u3002\u4f5c\u4e3a\u6807\u5fd7\uff0c\u6709\u65f6\u56fe\u5f62\u662f\u6b21\u8981\u7684.....\n","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10020"},"animations":[],"compId":"data.content[2]","parentCompid":"free_vessel4","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":2,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10020\\\/page10020\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:50%;border-style:none;height:46.875rpx;width:46.875rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:58.59375rpx;top:257.8125rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5965e40140422.png","customFeature":{"boxShadow":"('#000','0','0','5')","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"compId":"data.content[3]","parentCompid":"free_vessel4"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:133.59375rpx;top:260.15625rpx;margin-right:0;","content":"\u8349\u672c\u6728\u5934","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[4]","parentCompid":"free_vessel4","markColor":"","mode":0},{"type":"button","style":"background-color:rgb(238, 238, 238);border-color:rgb(34, 34, 34);border-radius:60.9375rpx;border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:28.125rpx;height:46.875rpx;line-height:46.875rpx;margin-left:auto;margin-right:0;margin-top:0;opacity:1;text-align:center;width:164.0625rpx;position:absolute;left:492.1875rpx;top:257.8125rpx;","content":"\u8bbe\u8ba1\u8bfe\u5802","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5px","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10020"},"animations":[],"compId":"data.content[5]","parentCompid":"free_vessel4","itemType":"button","itemParentType":"free-vessel","itemIndex":5,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10020\\\/page10020\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"page_form":"","compId":"free_vessel4"},"free_vessel5":{"type":"free-vessel","style":"width:750rpx;height:328.125rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;margin-top:4.6875rpx;opacity:1;margin-left:auto;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:210.9375rpx;width:257.8125rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:23.4375rpx;top:23.4375rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5965e9ae2e38d.png","customFeature":{"boxShadow":"('#000','0','0','5')","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10020"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel5","itemType":"picture","itemParentType":"free-vessel","itemIndex":0,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10020\\\/page10020\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:35.15625rpx;height:44.53125rpx;width:421.875rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:304.6875rpx;top:35.15625rpx;margin-right:0;","content":"\u5e73\u9762\u8bbe\u8ba1\u65b0\u624b\u9700\u8981\u638c\u63e1\u7684\u57fa\u7840\u77e5\u8bc6","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10020"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel5","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":1,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10020\\\/page10020\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(153, 153, 153);font-size:30.46875rpx;height:44.53125rpx;width:421.875rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:304.6875rpx;top:140.625rpx;margin-right:0;","content":"\u65e0\u8bba\u662f\u6807\u5fd7\u8fd8\u662f\u6392\u7248\u3002\u4f5c\u4e3a\u6807\u5fd7\uff0c\u6709\u65f6\u56fe\u5f62\u662f\u6b21\u8981\u7684.....\n","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10020"},"animations":[],"compId":"data.content[2]","parentCompid":"free_vessel5","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":2,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10020\\\/page10020\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:50%;border-style:none;height:46.875rpx;width:46.875rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:58.59375rpx;top:257.8125rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5965e3a1237e6.png","customFeature":{"boxShadow":"('#000','0','0','5')","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"compId":"data.content[3]","parentCompid":"free_vessel5"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:133.59375rpx;top:260.15625rpx;margin-right:0;","content":"\u4e00\u6735\u592a\u9633\u82b1","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[4]","parentCompid":"free_vessel5","markColor":"","mode":0},{"type":"button","style":"background-color:rgb(238, 238, 238);border-color:rgb(34, 34, 34);border-radius:60.9375rpx;border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:28.125rpx;height:46.875rpx;line-height:46.875rpx;margin-left:auto;margin-right:0;margin-top:0;opacity:1;text-align:center;width:164.0625rpx;position:absolute;left:492.1875rpx;top:257.8125rpx;","content":"\u8bbe\u8ba1\u8bfe\u5802","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5px","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10020"},"animations":[],"compId":"data.content[5]","parentCompid":"free_vessel5","itemType":"button","itemParentType":"free-vessel","itemIndex":5,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10020\\\/page10020\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"page_form":"","compId":"free_vessel5"},"free_vessel6":{"type":"free-vessel","style":"width:750rpx;height:328.125rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;margin-top:4.6875rpx;opacity:1;margin-left:auto;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:210.9375rpx;width:257.8125rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:23.4375rpx;top:23.4375rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5965e452317ce.png","customFeature":{"boxShadow":"('#000','0','0','5')","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10020"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel6","itemType":"picture","itemParentType":"free-vessel","itemIndex":0,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10020\\\/page10020\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:35.15625rpx;height:44.53125rpx;width:421.875rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:304.6875rpx;top:35.15625rpx;margin-right:0;","content":"\u5e73\u9762\u8bbe\u8ba1\u65b0\u624b\u9700\u8981\u638c\u63e1\u7684\u57fa\u7840\u77e5\u8bc6","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10020"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel6","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":1,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10020\\\/page10020\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(153, 153, 153);font-size:30.46875rpx;height:44.53125rpx;width:421.875rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:304.6875rpx;top:140.625rpx;margin-right:0;","content":"\u65e0\u8bba\u662f\u6807\u5fd7\u8fd8\u662f\u6392\u7248\u3002\u4f5c\u4e3a\u6807\u5fd7\uff0c\u6709\u65f6\u56fe\u5f62\u662f\u6b21\u8981\u7684.....\n","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10020"},"animations":[],"compId":"data.content[2]","parentCompid":"free_vessel6","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":2,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10020\\\/page10020\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:50%;border-style:none;height:46.875rpx;width:46.875rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:58.59375rpx;top:257.8125rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5965d9039fbcd.png","customFeature":{"boxShadow":"('#000','0','0','5')","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"compId":"data.content[3]","parentCompid":"free_vessel6"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:133.59375rpx;top:260.15625rpx;margin-right:0;","content":"\u8d8a\u7b11\u8d8a\u72c2","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[4]","parentCompid":"free_vessel6","markColor":"","mode":0},{"type":"button","style":"background-color:rgb(238, 238, 238);border-color:rgb(34, 34, 34);border-radius:60.9375rpx;border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:28.125rpx;height:46.875rpx;line-height:46.875rpx;margin-left:auto;margin-right:0;margin-top:0;opacity:1;text-align:center;width:164.0625rpx;position:absolute;left:492.1875rpx;top:257.8125rpx;","content":"\u8bbe\u8ba1\u8bfe\u5802","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5px","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10020"},"animations":[],"compId":"data.content[5]","parentCompid":"free_vessel6","itemType":"button","itemParentType":"free-vessel","itemIndex":5,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10020\\\/page10020\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"page_form":"","compId":"free_vessel6"},"free_vessel7":{"type":"free-vessel","style":"width:750rpx;height:328.125rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-right:auto;margin-top:2.34375rpx;opacity:1;margin-left:auto;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-style:none;height:210.9375rpx;width:257.8125rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:23.4375rpx;top:23.4375rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5965e910a1bc8.png","customFeature":{"boxShadow":"('#000','0','0','5')","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"page10020"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel7","itemType":"picture","itemParentType":"free-vessel","itemIndex":0,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10020\\\/page10020\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:35.15625rpx;height:44.53125rpx;width:421.875rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:304.6875rpx;top:35.15625rpx;margin-right:0;","content":"\u5e73\u9762\u8bbe\u8ba1\u65b0\u624b\u9700\u8981\u638c\u63e1\u7684\u57fa\u7840\u77e5\u8bc6","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10020"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel7","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":1,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10020\\\/page10020\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(153, 153, 153);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:304.6875rpx;top:140.625rpx;margin-right:0;","content":"\u65e0\u8bba\u662f\u6807\u5fd7\u8fd8\u662f\u6392\u7248\u3002\u4f5c\u4e3a\u6807\u5fd7\uff0c\u6709\u65f6\u56fe\u5f62\u662f\u6b21\u8981\u7684.....\n","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10020"},"animations":[],"compId":"data.content[2]","parentCompid":"free_vessel7","markColor":"","mode":0,"itemType":"text","itemParentType":"free-vessel","itemIndex":2,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10020\\\/page10020\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:50%;border-style:none;height:46.875rpx;width:46.875rpx;margin-left:auto;margin-right:0;margin-top:0;position:absolute;left:58.59375rpx;top:257.8125rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_5965e40140422.png","customFeature":{"boxShadow":"('#000','0','0','5')","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"compId":"data.content[3]","parentCompid":"free_vessel7"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:auto;margin-top:0;opacity:1;text-align:left;position:absolute;left:133.59375rpx;top:260.15625rpx;margin-right:0;","content":"\u8349\u672c\u6728\u5934","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[4]","parentCompid":"free_vessel7","markColor":"","mode":0},{"type":"button","style":"background-color:rgb(238, 238, 238);border-color:rgb(34, 34, 34);border-radius:60.9375rpx;border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:28.125rpx;height:46.875rpx;line-height:46.875rpx;margin-left:auto;margin-right:0;margin-top:0;opacity:1;text-align:center;width:164.0625rpx;position:absolute;left:492.1875rpx;top:257.8125rpx;","content":"\u8bbe\u8ba1\u8bfe\u5802","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5px","boxStyle":false,"boxX":"0","boxY":"0","action":"inner-link","inner-page-link":"page10020"},"animations":[],"compId":"data.content[5]","parentCompid":"free_vessel7","itemType":"button","itemParentType":"free-vessel","itemIndex":5,"eventParams":"{\"inner_page_link\":\"\\\/pages\\\/page10020\\\/page10020\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"page_form":"","compId":"free_vessel7"},"has_tabbar":1,"page_hidden":true,"page_form":""},
    need_login: false,
    page_router: 'page10009',
    page_form: 'none',
      list_compids_params: [],
      user_center_compids_params: [],
      goods_compids_params: [],
  prevPage:0,
      carouselGroupidsParams: [{"compid":"carousel1","carouselgroupId":"52908"}],
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
