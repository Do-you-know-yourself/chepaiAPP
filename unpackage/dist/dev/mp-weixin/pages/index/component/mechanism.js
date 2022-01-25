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
var common_vendor = require("../../../common/vendor.js");
const __default__ = {
  data() {
    return {};
  },
  onReachBottom() {
    console.log("vue2 \u6EDA\u52A8\u5230\u5E95\u90E8\u4E86");
  }
};
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: {
    title: {
      type: String,
      default: "\u7ADE\u4EF7\u516C\u544A"
    }
  },
  setup(__props) {
    let screen = common_vendor.ref([
      {
        text: "\u54C1\u724C",
        id: 1
      },
      {
        text: "\u8F66\u4EF7",
        id: 2
      },
      {
        text: "\u57CE\u5E02",
        id: 3
      },
      {
        text: "\u7B5B\u9009",
        id: 4
      }
    ]);
    const back = () => {
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(back),
        b: common_vendor.f(common_vendor.unref(screen), (i, k0, i0) => {
          return {
            a: common_vendor.t(i.text)
          };
        }),
        c: common_vendor.f(10, (item, k0, i0) => {
          return {};
        })
      };
    };
  }
}));
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6a1e963e"]]);
wx.createPage(MiniProgramPage);
