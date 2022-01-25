"use strict";
var common_vendor = require("../../../common/vendor.js");
var pages_user_userModel = require("../userModel.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    common_vendor.watch(() => pages_user_userModel.email.value.length, (newVal, oldVal) => {
      if (newVal >= 17) {
        pages_user_userModel.preserve();
      }
      if (newVal > 19) {
        common_vendor.index.showToast({
          title: "\u8F93\u5165\u6709\u8BEF",
          icon: "error"
        });
      }
    }, {
      immediate: true,
      deep: true
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(pages_user_userModel.email),
        b: common_vendor.o(($event) => common_vendor.isRef(pages_user_userModel.email) ? pages_user_userModel.email.value = $event.detail.value : null)
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b43adffe"]]);
wx.createPage(MiniProgramPage);
