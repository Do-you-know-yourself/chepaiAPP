"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    common_vendor.ref([]);
    common_vendor.ref(1);
    let height = common_vendor.ref(0);
    height.value = document.documentElement.clientHeight - 80;
    const scrollTop = () => {
      console.log(111);
    };
    if (height.value > 0) {
      scrollTop();
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(10, (item, k0, i0) => {
          return {};
        }),
        b: common_vendor.o(scrollTop)
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-533dba6a"]]);
wx.createComponent(Component);
