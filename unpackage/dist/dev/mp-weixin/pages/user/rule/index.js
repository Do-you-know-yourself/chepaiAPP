"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  props: {
    id: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    common_vendor.index.setNavigationBarTitle({
      title: props.title
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0eb28fda"]]);
wx.createPage(MiniProgramPage);
