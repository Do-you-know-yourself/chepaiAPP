"use strict";
var common_vendor = require("../../../common/vendor.js");
var pages_index_component_HomeModel = require("./HomeModel.js");
var pages_index_component_indexModel = require("./indexModel.js");
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (common_vendor.unref(vehiclelist) + _easycom_uni_popup)();
}
const vehiclelist = () => "../../../components/vehicleList/vehiclelist.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    let cityList = common_vendor.ref([
      "\u5317\u4EAC\u5E02",
      "\u4E0A\u6D77\u5E02",
      "\u5929\u6D25\u5E02",
      "\u91CD\u5E86\u5E02",
      "\u6CB3\u5317\u7701",
      "\u5C71\u897F\u7701",
      "\u5185\u8499\u53E4\u81EA\u6CBB\u533A",
      "\u8FBD\u5B81\u7701",
      "\u5409\u6797\u7701",
      "\u9ED1\u9F99\u6C5F\u7701",
      "\u6C5F\u82CF\u7701",
      "\u6D59\u6C5F\u7701",
      "\u5B89\u5FBD\u7701",
      "\u798F\u5EFA\u7701",
      "\u6C5F\u897F\u7701",
      "\u5C71\u4E1C\u7701",
      "\u6CB3\u5357\u7701",
      "\u6E56\u5317\u7701",
      "\u6E56\u5357\u7701",
      "\u5E7F\u4E1C\u7701",
      "\u5E7F\u897F\u58EE\u65CF\u81EA\u6CBB\u533A",
      "\u6D77\u5357\u7701",
      "\u56DB\u5DDD\u7701",
      "\u8D35\u7701",
      "\u4E91\u5357\u7701",
      "\u897F\u85CF\u81EA\u6CBB\u533A",
      "\u9655\u897F\u7701",
      "\u7518\u8083\u7701",
      "\u5B81\u590F\u56DE\u65CF\u81EA\u6CBB\u533A",
      "\u9752\u6D77\u7701",
      "\u65B0\u7586\u7EF4\u543E\u5C14\u65CF\u81EA\u6CBB\u533A",
      "\u9999\u6E2F\u7279\u522B\u884C\u653F\u533A",
      "\u6FB3\u95E8\u7279\u522B\u884C\u653F\u533A",
      "\u53F0\u6E7E\u7701",
      "\u5176\u5B83"
    ]);
    let current = common_vendor.ref(0);
    let searchTitle = common_vendor.ref("\u8D63\u5DDE\u5E02");
    let scroll = common_vendor.ref();
    console.log(scroll);
    const add = (i) => {
      console.log(i);
    };
    const city = common_vendor.ref(null);
    const cityScreen = () => {
      city.value.open();
    };
    const choice = (i, idx) => {
      current.value = idx;
      searchTitle.value = i;
      city.value.close();
      return i;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(searchTitle)),
        b: common_vendor.o(cityScreen),
        c: common_vendor.f(common_vendor.unref(pages_index_component_HomeModel.bannerList), (item, k0, i0) => {
          return {
            a: item.url,
            b: item.id
          };
        }),
        d: common_vendor.f(common_vendor.unref(pages_index_component_HomeModel.toolsList), (item, k0, i0) => {
          return {
            a: item.icon || "/static/icon/follow.png",
            b: common_vendor.t(item.text),
            c: common_vendor.o(($event) => common_vendor.unref(pages_index_component_HomeModel.RoutePush)(item))
          };
        }),
        e: common_vendor.unref(scroll),
        f: common_vendor.o(add),
        g: common_vendor.f(common_vendor.unref(pages_index_component_indexModel.roll), (item, k0, i0) => {
          return {
            a: common_vendor.t(item.nickname),
            b: item.id
          };
        }),
        h: common_vendor.t(),
        i: common_vendor.f(common_vendor.unref(pages_index_component_indexModel.Mechanism), (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.t(item.num || 0)
          };
        }),
        j: common_vendor.f(common_vendor.unref(cityList), (i, idx, i0) => {
          return {
            a: common_vendor.t(i),
            b: idx == common_vendor.unref(current) ? 1 : "",
            c: common_vendor.o(($event) => choice(i, idx))
          };
        }),
        k: common_vendor.sr(city, "10482aa7-1", {
          "k": "city"
        })
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-10482aa7"]]);
wx.createComponent(Component);
