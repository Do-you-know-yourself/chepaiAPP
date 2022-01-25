"use strict";
var common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _component_transition = common_vendor.resolveComponent("transition");
  _component_transition();
}
if (!Math) {
  common_vendor.unref(TypeVehicle)();
}
const TypeVehicle = () => "../../../components/TypeVehicle/TypeVehicle.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  props: {
    currentIndex: {
      type: Number,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.currentIndex == 2
      }, __props.currentIndex == 2 ? {} : __props.currentIndex == 3 ? {} : {}, {
        b: __props.currentIndex == 3
      });
    };
  }
});
wx.createComponent(_sfc_main);
