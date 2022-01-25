"use strict";
var common_vendor = require("../../../common/vendor.js");
var pages_user_userModel = require("../userModel.js");
if (!Math) {
  common_vendor.unref(BackNav)();
}
const BackNav = () => "../../../components/BackNav/backnav.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    let isRadio = common_vendor.ref(false);
    const isRadioFn = () => {
      isRadio.value = !isRadio.value;
    };
    common_vendor.index.setNavigationBarTitle({
      title: props.title
    });
    const reg = () => {
      if (isRadio.value == false) {
        common_vendor.index.showToast({
          title: "\u8BF7\u5148\u540C\u610F\u7528\u6237\u534F\u8BAE\u548C\u9690\u79C1\u6743\u7CFB\u6570",
          icon: "error"
        });
      } else {
        console.log("\u6CE8\u518C\u6210\u529F");
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: props.title
        }),
        b: common_vendor.t(common_vendor.unref(pages_user_userModel.Disable) ? `${common_vendor.unref(pages_user_userModel.TimeNum)}\u79D2\u540E\u53EF\u91CD\u65B0\u83B7\u53D6` : common_vendor.unref(pages_user_userModel.TimeNum)),
        c: common_vendor.o((...args) => common_vendor.unref(pages_user_userModel.BtnCode) && common_vendor.unref(pages_user_userModel.BtnCode)(...args)),
        d: common_vendor.unref(pages_user_userModel.Disable),
        e: common_vendor.o(reg),
        f: common_vendor.unref(isRadio),
        g: common_vendor.o(isRadioFn),
        h: common_vendor.o(($event) => common_vendor.unref(pages_user_userModel.to)({
          title: "\u5E73\u53F0\u89C4\u5219"
        })),
        i: common_vendor.o(($event) => common_vendor.unref(pages_user_userModel.to)({
          title: "\u5E73\u53F0\u89C4\u5219"
        }))
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5206e941"]]);
wx.createPage(MiniProgramPage);
