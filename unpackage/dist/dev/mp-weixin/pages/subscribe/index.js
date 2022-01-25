"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    let arr = common_vendor.ref([
      {
        title: "\u5B9D\u9A6C\u4E94\u7CFB",
        id: 0
      },
      {
        title: "20\u4E07-30\u4E07",
        id: 1
      },
      {
        title: "\u5403\u996D",
        id: 2
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(10, (ii, k0, i0) => {
          return {};
        }),
        b: common_vendor.f(common_vendor.unref(arr), (i, k1, i1) => {
          return common_vendor.e({
            a: i.id
          }, i.id ? {} : {}, {
            b: common_vendor.t(i.title)
          });
        }),
        c: common_vendor.f(3, (z, k1, i1) => {
          return {};
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9cdab438"]]);
wx.createPage(MiniProgramPage);
