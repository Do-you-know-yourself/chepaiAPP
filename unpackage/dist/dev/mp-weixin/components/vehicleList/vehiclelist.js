"use strict";
var common_vendor = require("../../common/vendor.js");
var components_vehicleList_vehicleListModel = require("./vehicleListModel.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(10, (item, k0, i0) => {
          return {};
        }),
        b: common_vendor.o((...args) => common_vendor.unref(components_vehicleList_vehicleListModel.ScrollTop) && common_vendor.unref(components_vehicleList_vehicleListModel.ScrollTop)(...args))
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e8b35d8c"]]);
wx.createComponent(Component);
