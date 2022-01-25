"use strict";
var common_vendor = require("../../../common/vendor.js");
var pages_user_userModel = require("../userModel.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    let Index = common_vendor.ref(2);
    const toggle = (i) => {
      Index.value = i.id;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(common_vendor.unref(pages_user_userModel.login), (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.n(item.class),
            c: common_vendor.n({
              "isActive": common_vendor.unref(Index) == item.id
            }),
            d: item.id,
            e: common_vendor.o(($event) => toggle(item))
          };
        }),
        b: common_vendor.unref(Index) == 1
      }, common_vendor.unref(Index) == 1 ? {} : {}, {
        c: common_vendor.unref(Index) == 2
      }, common_vendor.unref(Index) == 2 ? {
        d: common_vendor.t(common_vendor.unref(pages_user_userModel.Disable) ? `${common_vendor.unref(pages_user_userModel.TimeNum)}\u79D2\u540E\u53EF\u91CD\u65B0\u83B7\u53D6` : common_vendor.unref(pages_user_userModel.TimeNum)),
        e: common_vendor.o((...args) => common_vendor.unref(pages_user_userModel.BtnCode) && common_vendor.unref(pages_user_userModel.BtnCode)(...args)),
        f: common_vendor.unref(pages_user_userModel.Disable)
      } : {}, {
        g: common_vendor.o(($event) => common_vendor.unref(pages_user_userModel.RegPush)({
          title: "\u6CE8\u518C"
        }))
      });
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-098d3a3e"]]);
wx.createPage(MiniProgramPage);
