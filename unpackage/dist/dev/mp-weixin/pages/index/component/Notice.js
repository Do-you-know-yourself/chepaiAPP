"use strict";
var common_vendor = require("../../../common/vendor.js");
var pages_index_component_indexModel = require("./indexModel.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  props: {
    title: {
      type: String,
      default: "\u7ADE\u4EF7\u516C\u544A"
    }
  },
  setup(__props) {
    const props = __props;
    const back = () => {
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(back),
        b: common_vendor.t(props.title),
        c: common_vendor.f(common_vendor.unref(pages_index_component_indexModel.RollTotal), (i, k0, i0) => {
          return {
            a: common_vendor.t(i.title),
            b: common_vendor.t(i.Date),
            c: common_vendor.f(i.children, (item, k1, i1) => {
              return {
                a: common_vendor.t(item.status || item.status === 1 ? "\u7ADE\u4EF7\u4E2D" : item.time),
                b: common_vendor.t(item.nickname),
                c: common_vendor.t(item.quantity || 0)
              };
            })
          };
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-467987c0"]]);
wx.createPage(MiniProgramPage);
