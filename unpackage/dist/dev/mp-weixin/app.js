"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/index/component/TransFer.js";
  "./pages/index/component/Notice.js";
  "./pages/index/component/mechanism.js";
  "./pages/BiddingIndex/index.js";
  "./pages/BiddingIndex/Details/index.js";
  "./pages/subscribe/index.js";
  "./pages/subscribe/Add/index.js";
  "./pages/release/index.js";
  "./pages/user/index.js";
  "./pages/user/Bidding/index.js";
  "./pages/user/login/index.js";
  "./pages/user/register/index.js";
  "./pages/user/rule/index.js";
  "./pages/user/UserInfo/index.js";
  "./pages/user/UserInfo/Email.js";
  "./pages/user/SetUp/index.js";
  "./pages/user/opinion/index.js";
  "./pages/user/order/index.js";
  "./pages/user/News/index.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.warn("\u5F53\u524D\u7EC4\u4EF6\u4EC5\u652F\u6301 uni_modules \u76EE\u5F55\u7ED3\u6784 \uFF0C\u8BF7\u5347\u7EA7 HBuilderX \u5230 3.1.0 \u7248\u672C\u4EE5\u4E0A\uFF01");
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
