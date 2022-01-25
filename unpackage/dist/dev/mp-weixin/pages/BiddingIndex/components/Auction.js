"use strict";
var common_vendor = require("../../../common/vendor.js");
var utils_formatDate = require("../../../utils/formatDate.js");
require("../BidModel.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    common_vendor.ref();
    common_vendor.ref(null);
    common_vendor.onMounted(() => {
      utils_formatDate.CountDown();
    });
    common_vendor.onUnmounted(() => {
      clearInterval(utils_formatDate.tim);
      console.log("zzz");
    });
    common_vendor.onErrorCaptured(() => {
      clearInterval(utils_formatDate.tim);
    });
    const to = () => {
      common_vendor.index.navigateTo({
        url: "./Details/index"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(3, (i, k0, i0) => {
          return {
            a: i
          };
        }),
        b: common_vendor.t(10),
        c: common_vendor.f(common_vendor.unref(utils_formatDate.list).data, (item, k0, i0) => {
          return {
            a: item.Logo,
            b: common_vendor.t(item.title),
            c: common_vendor.t(item.num || 0),
            d: common_vendor.t(item.djs || "\u5C0F\u65F600\u520600\u79D2"),
            e: common_vendor.f(item.children, (i, k1, i1) => {
              return common_vendor.e({
                a: i.img,
                b: i.id === 3
              }, i.id === 3 ? {} : {});
            })
          };
        }),
        d: common_vendor.o(to)
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-48503c99"]]);
wx.createComponent(Component);
