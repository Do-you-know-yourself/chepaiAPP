"use strict";
var common_vendor = require("../../common/vendor.js");
let list = common_vendor.ref([
  {
    title: "\u7ADE\u4EF7\u4E2D",
    icon: "/static/icon/love.png",
    id: 1
  },
  {
    title: "\u7ED3\u6807\u4E2D",
    icon: "/static/icon/love.png",
    id: 2
  },
  {
    title: "\u7ADE\u4EF7\u5386\u53F2",
    icon: "/static/icon/love.png",
    id: 3
  },
  {
    title: "\u6211\u7684\u5173\u6CE8",
    icon: "/static/icon/love.png",
    id: 4
  },
  {
    title: "\u6D4F\u89C8\u8BB0\u5F55",
    icon: "/static/icon/love.png",
    id: 5
  }
]);
let order = common_vendor.ref([
  {
    title: "\u5F85\u63D0\u8F66",
    icon: "/static/icon/love.png",
    id: 1
  },
  {
    title: "\u5F85\u4ED8\u6B3E",
    icon: "/static/icon/love.png",
    id: 2
  },
  {
    title: "\u5F85\u8FC7\u6237",
    icon: "/static/icon/love.png",
    id: 3
  },
  {
    title: "\u4EF2\u88C1\u4E2D",
    icon: "/static/icon/love.png",
    id: 4
  },
  {
    title: "\u5168\u90E8\u8BA2\u5355",
    icon: "/static/icon/love.png",
    id: 5
  }
]);
let setupList = common_vendor.ref([
  {
    title: "\u6295\u8BC9\u5EFA\u8BAE",
    icon: "/static/icon/love.png",
    uri: "./opinion/index",
    id: 1
  },
  {
    title: "\u5E73\u53F0\u89C4\u5219",
    icon: "/static/icon/love.png",
    uri: "./rule/index",
    id: 2
  },
  {
    title: "\u8054\u7CFB\u5BA2\u670D",
    icon: "/static/icon/love.png",
    uri: "./SetUp/index",
    id: 3
  },
  {
    title: "\u8BBE\u7F6E",
    icon: "/static/icon/love.png",
    uri: "./SetUp/index",
    id: 4
  }
]);
let login = common_vendor.ref([
  {
    title: "\u5BC6\u7801\u767B\u5F55",
    class: "passwordLogin",
    id: 1
  },
  {
    title: "\u5FEB\u6377\u767B\u5F55",
    class: "QuickLogon",
    id: 2
  }
]);
let timer;
let Disable = common_vendor.ref(false);
let TimeNum = common_vendor.ref("\u83B7\u53D6\u9A8C\u8BC1\u7801");
const BtnCode = () => {
  Disable.value = true;
  clearInterval(timer);
  TimeNum.value = 60;
  timer = setInterval(() => {
    if (TimeNum.value === 0) {
      console.log(111);
      TimeNum.value = "\u91CD\u65B0\u83B7\u53D6\u9A8C\u8BC1\u7801";
      Disable.value = false;
      clearInterval(timer);
    } else {
      TimeNum.value--;
    }
  }, 1e3);
};
const RouToPush = (i) => {
  common_vendor.index.navigateTo({
    url: "./Bidding/index?id=" + i.id + "&title=" + i.title,
    animationType: "pop-in"
  });
};
const RegPush = (i) => {
  common_vendor.index.navigateTo({
    url: "../register/index?title=" + i.title,
    animationType: "pop-in"
  });
};
const to = (i) => {
  common_vendor.index.navigateTo({
    url: "../rule/index?title=" + i.title,
    animationType: "pop-in"
  });
};
const info = (i) => {
  common_vendor.index.navigateTo({
    url: "./UserInfo/index?title=" + i.title,
    animationType: "pop-in"
  });
};
const OrderFn = (i) => {
  common_vendor.index.navigateTo({
    url: "./order/index?id=" + i.id + "&title=" + i.title,
    animationType: "pop-in"
  });
};
let email = common_vendor.ref("");
const preserve = () => {
  common_vendor.index.showToast({
    title: "\u4FDD\u5B58\u6210\u529F",
    icon: "success"
  });
  common_vendor.index.navigateTo({
    url: "./index"
  });
};
const goTo = (i) => {
  if (i.id === 3) {
    common_vendor.index.showToast({
      title: "\u6B63\u5728\u5F00\u53D1\u4E2D",
      icon: "error"
    });
    return false;
  }
  common_vendor.index.navigateTo({
    url: `${i.uri}?id=` + i.id + "&title=" + i.title,
    animationType: "pop-in"
  });
};
let orderList = common_vendor.ref([
  {
    title: "\u5168\u90E8",
    id: 1
  },
  {
    title: "\u672A\u7ED3\u6807",
    id: 2
  },
  {
    title: "\u5DF2\u4E2D\u6807",
    id: 3
  },
  {
    title: "\u5DF2\u6210\u4EA4",
    id: 4
  },
  {
    title: "\u5DF2\u53D6\u6D88",
    id: 5
  }
]);
exports.BtnCode = BtnCode;
exports.Disable = Disable;
exports.OrderFn = OrderFn;
exports.RegPush = RegPush;
exports.RouToPush = RouToPush;
exports.TimeNum = TimeNum;
exports.email = email;
exports.goTo = goTo;
exports.info = info;
exports.list = list;
exports.login = login;
exports.order = order;
exports.orderList = orderList;
exports.preserve = preserve;
exports.setupList = setupList;
exports.to = to;
