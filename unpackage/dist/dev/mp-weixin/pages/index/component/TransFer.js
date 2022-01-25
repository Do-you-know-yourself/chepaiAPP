"use strict";
var common_vendor = require("../../../common/vendor.js");
var pages_index_component_indexModel = require("./indexModel.js");
if (!Math) {
  common_vendor.unref(BackNav)();
}
const BackNav = () => "../../../components/BackNav/backnav.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  props: {
    title: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: props.title
        }),
        b: common_vendor.f(common_vendor.unref(pages_index_component_indexModel.TransFerList), (item, k0, i0) => {
          return {
            a: item.src,
            b: common_vendor.t(item.title),
            c: common_vendor.t(item.city),
            d: common_vendor.t(item.profile),
            e: common_vendor.t(item.closing_cost),
            f: common_vendor.t(item.Transfer_fee)
          };
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-455970da"]]);
wx.createPage(MiniProgramPage);
