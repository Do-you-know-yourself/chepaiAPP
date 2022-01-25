"use strict";
var common_vendor = require("../../../common/vendor.js");
let bannerList = common_vendor.ref([
  {
    url: "/static/img/bg1.webp",
    id: 1
  },
  {
    url: "/static/img/bg2.webp",
    id: 2
  },
  {
    url: "/static/img/bg3.webp",
    id: 3
  }
]);
let toolsList = common_vendor.ref([
  {
    text: "\u6211\u7684\u5173\u6CE8",
    icon: "/static/icon/MyAttention.png",
    uri: "../user/Bidding/index",
    id: 4
  },
  {
    text: "\u8FC7\u6237\u529E\u8BC1",
    icon: "/static/icon/TransferCertificate.png",
    uri: "../index/component/TransFer",
    id: 2
  },
  {
    text: "\u6D4F\u89C8\u8BB0\u5F55",
    icon: "/static/icon/BrowseRecords.png",
    uri: "../user/Bidding/index",
    id: 5
  },
  {
    text: "\u5386\u53F2\u6210\u4EA4",
    icon: "/static/icon/HistoricalTransaction.png",
    uri: "../user/Bidding/index",
    id: 3
  },
  {
    text: "\u4EE3\u9A7E",
    icon: "",
    id: 7
  },
  {
    text: "\u4EE3\u4EF7",
    icon: "",
    id: 6
  }
]);
const RoutePush = (i) => {
  if (i.id >= 6) {
    return common_vendor.index.showToast({
      title: "\u6B63\u5728\u5F00\u53D1\u4E2D",
      icon: "error"
    });
  } else {
    common_vendor.index.navigateTo({
      url: `${i.uri}?id=` + i.id + "&title=" + i.text,
      animationType: "pop-in"
    });
  }
};
exports.RoutePush = RoutePush;
exports.bannerList = bannerList;
exports.toolsList = toolsList;
