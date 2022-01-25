"use strict";
var common_vendor = require("../../../common/vendor.js");
var utils_formatDate = require("../../../utils/formatDate.js");
var pages_BiddingIndex_BidModel = require("../BidModel.js");
if (!Math) {
  common_vendor.unref(Swiper)();
}
const Swiper = () => "../../../components/Swiper/swiper.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    let value = common_vendor.ref("2022/1/19 00:00:00");
    utils_formatDate.countTime(value.value);
    const back = () => {
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(back),
        b: common_vendor.t(common_vendor.unref(utils_formatDate.timeDom)),
        c: common_vendor.f(common_vendor.unref(pages_BiddingIndex_BidModel.VehicleInfo), (i, k0, i0) => {
          return {
            a: common_vendor.t(i.info),
            b: common_vendor.t(i.type)
          };
        }),
        d: common_vendor.f(common_vendor.unref(pages_BiddingIndex_BidModel.score), (i, k0, i0) => {
          return {
            a: common_vendor.t(i.value),
            b: common_vendor.t(i.type),
            c: i.id
          };
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1aa99586"]]);
wx.createPage(MiniProgramPage);
