"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var common_vendor = require("../../common/vendor.js");
var pages_user_userModel = require("./userModel.js");
const __default__ = {
  onPullDownRefresh() {
    console.log("\u8C03\u7528\u4E86");
    setTimeout(function() {
      common_vendor.index.stopPullDownRefresh();
    }, 1e3);
  },
  created() {
    console.log("v2\u521D\u59CB\u5316");
  }
};
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(__spreadProps(__spreadValues({}, __default__), {
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => common_vendor.unref(pages_user_userModel.info)({
          title: "\u7528\u6237\u4FE1\u606F\u7F16\u8F91"
        })),
        b: common_vendor.f(common_vendor.unref(pages_user_userModel.list), (item, k0, i0) => {
          return {
            a: item.icon,
            b: common_vendor.t(item.title),
            c: common_vendor.o(($event) => common_vendor.unref(pages_user_userModel.RouToPush)(item)),
            d: item.id
          };
        }),
        c: common_vendor.f(common_vendor.unref(pages_user_userModel.order), (item, k0, i0) => {
          return {
            a: item.icon,
            b: common_vendor.t(item.title),
            c: common_vendor.o(($event) => common_vendor.unref(pages_user_userModel.OrderFn)(item))
          };
        }),
        d: common_vendor.f(common_vendor.unref(pages_user_userModel.setupList), (item, k0, i0) => {
          return {
            a: item.icon,
            b: common_vendor.t(item.title),
            c: item.id,
            d: common_vendor.o(($event) => common_vendor.unref(pages_user_userModel.goTo)(item))
          };
        })
      };
    };
  }
}));
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-137d5072"]]);
wx.createPage(MiniProgramPage);
