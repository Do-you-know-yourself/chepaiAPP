"use strict";
var common_vendor = require("../../common/vendor.js");
var components_NavBar_navbarModel = require("./navbarModel.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(common_vendor.unref(components_NavBar_navbarModel.NavList), (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.unref(components_NavBar_navbarModel.currentIndex) == item.id ? 1 : "",
            c: common_vendor.unref(components_NavBar_navbarModel.currentIndex) == item.id ? 1 : "",
            d: common_vendor.unref(components_NavBar_navbarModel.currentIndex) == item.id ? 1 : "",
            e: item.id,
            f: common_vendor.o(($event) => common_vendor.unref(components_NavBar_navbarModel.Toggle)(item.id))
          };
        }),
        b: common_vendor.unref(components_NavBar_navbarModel.currentIndex) !== 1
      }, common_vendor.unref(components_NavBar_navbarModel.currentIndex) !== 1 ? {} : {}, {
        c: common_vendor.unref(components_NavBar_navbarModel.currentIndex) !== 1
      }, common_vendor.unref(components_NavBar_navbarModel.currentIndex) !== 1 ? {} : {});
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-22b1ab78"]]);
wx.createComponent(Component);
