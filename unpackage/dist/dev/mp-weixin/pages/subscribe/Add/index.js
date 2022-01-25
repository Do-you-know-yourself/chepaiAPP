"use strict";
var common_vendor = require("../../../common/vendor.js");
if (!Math) {
  (common_vendor.unref(BackNav) + SliderRange)();
}
const SliderRange = () => "../../../components/slider-range/index.js";
const BackNav = () => "../../../components/BackNav/backnav.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    common_vendor.ref(0.11);
    let brand = common_vendor.ref([]);
    let subscribeInfo = common_vendor.ref({
      rangeValue: [0, 60],
      rangeMax: 60,
      VeHiCleAge: [0, 8],
      VeHiCleMax: 8,
      kilometre: [0, 15],
      KiLomeMax: 15,
      evaluate: ["\u56FD\u4E00", "\u56FD\u4E8C", "\u56FD\u4E09", "\u56FD\u56DB", "\u56FD\u4E94", "\u56FD\u516D"],
      evaluateArr: []
    });
    const Standard_Selection = (i) => {
      if (subscribeInfo.value.evaluateArr.includes(i)) {
        subscribeInfo.value.evaluateArr = subscribeInfo.value.evaluateArr.filter(function(e) {
          return e != i;
        });
      } else {
        subscribeInfo.value.evaluateArr.push(i);
      }
    };
    const format = (val) => {
      if (val >= 60) {
        return val + "\u4E07\u5143\u4EE5\u4E0A";
      }
      return val + "\u4E07\u5143";
    };
    const handleRangeChange = (e) => {
      subscribeInfo.value.rangeValue = e;
    };
    const Vehicle_age = (e) => {
      if (e >= 8) {
        return e + "\u5E74\u4EE5\u4E0A";
      }
      return e + "\u5E74";
    };
    const VehicleFn = (e) => {
      subscribeInfo.value.VeHiCleAge = e;
    };
    const KiLome_Tre = (e) => {
      subscribeInfo.value.kilometre = e;
    };
    const KiLomeFn = (e) => {
      if (e >= 15) {
        return e + "\u4E07\u516C\u91CC\u4EE5\u4E0A";
      }
      return e + "\u4E07\u516C\u91CC";
    };
    let arr = common_vendor.ref([]);
    const Select = (i) => {
      if (arr.value.includes(i)) {
        arr.value = arr.value.filter(function(e) {
          return e != i;
        });
      } else {
        arr.value.push(i);
      }
    };
    const Reset = () => {
      console.log("\u91CD\u7F6E");
      arr.value = [];
    };
    let vehicle_list = common_vendor.ref([
      {
        title: "\u8F7F\u8F66",
        id: 1,
        bon: false
      },
      {
        title: "SUV",
        id: 2,
        bon: false
      },
      {
        title: "\u5BA2\u8F66",
        id: 3,
        bon: false
      }
    ]);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "\u6DFB\u52A0\u79C1\u4EBA\u8BA2\u9605",
          Reset
        }),
        b: common_vendor.f(common_vendor.unref(vehicle_list), (i, index, i0) => {
          return {
            a: common_vendor.t(i.title),
            b: common_vendor.n({
              "isActive": common_vendor.unref(arr).includes(index)
            }),
            c: common_vendor.n({
              "isActive": i.bon
            }),
            d: common_vendor.o(($event) => Select(index))
          };
        }),
        c: !common_vendor.unref(brand).length
      }, !common_vendor.unref(brand).length ? {} : {}, {
        d: common_vendor.unref(brand).length
      }, common_vendor.unref(brand).length ? {
        e: common_vendor.f(common_vendor.unref(brand), (i, k0, i0) => {
          return {
            a: common_vendor.t(i)
          };
        })
      } : {}, {
        f: common_vendor.o(handleRangeChange),
        g: common_vendor.o(($event) => common_vendor.unref(subscribeInfo).rangeValue = $event),
        h: common_vendor.p({
          value: common_vendor.unref(subscribeInfo).rangeValue,
          min: 0,
          max: common_vendor.unref(subscribeInfo).rangeMax,
          step: 1,
          ["bar-height"]: 3,
          ["block-size"]: 26,
          ["background-color"]: "#EEEEF6",
          ["active-color"]: "#FF6B00",
          format,
          decorationVisible: true,
          modelValue: common_vendor.unref(subscribeInfo).rangeValue
        }),
        i: common_vendor.o(VehicleFn),
        j: common_vendor.p({
          value: common_vendor.unref(subscribeInfo).VeHiCleAge,
          min: 0,
          max: common_vendor.unref(subscribeInfo).VeHiCleMax,
          step: 1,
          ["bar-height"]: 3,
          ["block-size"]: 26,
          ["background-color"]: "#EEEEF6",
          ["active-color"]: "#FF6B00",
          format: Vehicle_age,
          decorationVisible: true
        }),
        k: common_vendor.o(KiLome_Tre),
        l: common_vendor.p({
          value: common_vendor.unref(subscribeInfo).kilometre,
          min: 0,
          max: common_vendor.unref(subscribeInfo).KiLomeMax,
          step: 1,
          ["bar-height"]: 3,
          ["block-size"]: 26,
          ["background-color"]: "#EEEEF6",
          ["active-color"]: "#FF6B00",
          format: KiLomeFn,
          decorationVisible: true
        }),
        m: common_vendor.f(common_vendor.unref(subscribeInfo).evaluate, (i, index, i0) => {
          return {
            a: common_vendor.t(i),
            b: common_vendor.n({
              "isActive": common_vendor.unref(subscribeInfo).evaluateArr.includes(index)
            }),
            c: common_vendor.n({
              "isActive": i.bon
            }),
            d: common_vendor.o(($event) => Standard_Selection(index))
          };
        })
      });
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-174b30d6"]]);
wx.createPage(MiniProgramPage);
