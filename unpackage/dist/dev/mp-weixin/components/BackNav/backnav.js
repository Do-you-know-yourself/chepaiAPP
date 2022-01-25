"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  props: {
    id: {
      type: Number
    },
    title: {
      type: String
    },
    userinfo: {
      type: Boolean
    },
    Reset: {}
  },
  emits: ["access", "Reset"],
  setup(__props, { emit }) {
    const props = __props;
    const access = () => {
      emit("access");
    };
    const back = () => {
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(back),
        b: common_vendor.t(props.title),
        c: __props.userinfo
      }, __props.userinfo ? {
        d: common_vendor.t(__props.userinfo ? "\u4FDD\u5B58" : ""),
        e: common_vendor.o(access)
      } : {}, {
        f: __props.Reset
      }, __props.Reset ? {
        g: common_vendor.o((...args) => __props.Reset && __props.Reset(...args))
      } : {});
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-adba5504"]]);
wx.createComponent(Component);
