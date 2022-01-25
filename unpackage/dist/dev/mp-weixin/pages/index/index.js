"use strict";
var common_vendor = require("../../common/vendor.js");
var components_NavBar_navbarModel = require("../../components/NavBar/navbarModel.js");
if (!Array) {
  const _component_transition = common_vendor.resolveComponent("transition");
  _component_transition();
}
if (!Math) {
  (common_vendor.unref(Navbar) + common_vendor.unref(Home) + common_vendor.unref(VehicleList))();
}
const Navbar = () => "../../components/NavBar/navbar.js";
const Home = () => "./component/Home.js";
const VehicleList = () => "./component/VehicleList.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    let userInfo = common_vendor.ref(null);
    if (userInfo.value == null) {
      common_vendor.index.showModal({
        title: "\u767B\u5F55",
        content: "\u672A\u767B\u5F55\uFF0C\u8BF7\u5148\u767B\u5F55",
        success(res) {
          if (res.confirm) {
            common_vendor.index.navigateTo({
              url: "../user/login/index"
            });
          } else {
            return false;
          }
        },
        fail() {
          return false;
        }
      });
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(components_NavBar_navbarModel.currentIndex) == 1
      }, common_vendor.unref(components_NavBar_navbarModel.currentIndex) == 1 ? {} : {}, {
        b: common_vendor.unref(components_NavBar_navbarModel.currentIndex) !== 1
      }, common_vendor.unref(components_NavBar_navbarModel.currentIndex) !== 1 ? {
        c: common_vendor.p({
          currentIndex: common_vendor.unref(components_NavBar_navbarModel.currentIndex)
        })
      } : {});
    };
  }
});
wx.createPage(_sfc_main);
