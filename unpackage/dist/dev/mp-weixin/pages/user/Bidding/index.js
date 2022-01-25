"use strict";
var common_vendor = require("../../../common/vendor.js");
var common_Time = require("../../../common/Time.js");
if (!Math) {
  common_vendor.unref(BackNav)();
}
const BackNav = () => "../../../components/BackNav/backnav.js";
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
    let currentDate = common_Time.getDate();
    let date = common_vendor.ref(currentDate);
    const bindDateChange = (e) => {
      date.value = e.detail.value;
    };
    let id = parseInt(props.id);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          id: common_vendor.unref(id),
          title: props.title
        }),
        b: common_vendor.unref(id) === 5
      }, common_vendor.unref(id) === 5 ? {} : {}, {
        c: common_vendor.unref(id) === 5
      }, common_vendor.unref(id) === 5 ? {
        d: common_vendor.t(common_vendor.unref(date)),
        e: common_vendor.unref(date),
        f: common_vendor.o(bindDateChange)
      } : {}, {
        g: common_vendor.unref(id) === 1
      }, common_vendor.unref(id) === 1 ? {
        h: common_vendor.f(1, (item, k0, i0) => {
          return {};
        })
      } : {}, {
        i: common_vendor.unref(id) === 2
      }, common_vendor.unref(id) === 2 ? {
        j: common_vendor.f(2, (item, k0, i0) => {
          return common_vendor.e({
            a: item == 1
          }, item == 1 ? {} : {}, {
            b: item !== 1
          }, item !== 1 ? {} : {});
        })
      } : {}, {
        k: common_vendor.unref(id) === 3
      }, common_vendor.unref(id) === 3 ? {
        l: common_vendor.f(2, (item, k0, i0) => {
          return {};
        })
      } : {}, {
        m: common_vendor.unref(id) === 4
      }, common_vendor.unref(id) === 4 ? {
        n: common_vendor.f(2, (item, k0, i0) => {
          return !common_vendor.unref(id) ? {} : {};
        }),
        o: !common_vendor.unref(id)
      } : {}, {
        p: common_vendor.unref(id) === 5
      }, common_vendor.unref(id) === 5 ? {
        q: common_vendor.f(2, (item, k0, i0) => {
          return {};
        })
      } : {});
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5abad5da"]]);
wx.createPage(MiniProgramPage);
