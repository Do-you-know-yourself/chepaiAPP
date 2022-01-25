"use strict";
var common_vendor = require("../../../common/vendor.js");
var common_Time = require("../../../common/Time.js");
var pages_user_userModel = require("../userModel.js");
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
    common_vendor.ref(currentDate);
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
        d: common_vendor.f(common_vendor.unref(pages_user_userModel.orderList), (i, k0, i0) => {
          return {
            a: common_vendor.t(i.title),
            b: i.id
          };
        })
      } : {}, {
        e: common_vendor.unref(id) === 1
      }, common_vendor.unref(id) === 1 ? {
        f: common_vendor.f(2, (item, k0, i0) => {
          return {};
        })
      } : {}, {
        g: common_vendor.unref(id) === 2
      }, common_vendor.unref(id) === 2 ? {
        h: common_vendor.f(2, (item, k0, i0) => {
          return {};
        })
      } : {}, {
        i: common_vendor.unref(id) === 3
      }, common_vendor.unref(id) === 3 ? {
        j: common_vendor.f(2, (item, k0, i0) => {
          return {};
        })
      } : {}, {
        k: common_vendor.unref(id) === 4
      }, common_vendor.unref(id) === 4 ? {
        l: common_vendor.f(2, (item, k0, i0) => {
          return {};
        })
      } : {}, {
        m: common_vendor.unref(id) === 5
      }, common_vendor.unref(id) === 5 ? {
        n: common_vendor.f(2, (item, k0, i0) => {
          return {};
        })
      } : {});
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-17a82086"]]);
wx.createPage(MiniProgramPage);
