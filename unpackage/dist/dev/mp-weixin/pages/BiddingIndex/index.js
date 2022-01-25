"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_transition = common_vendor.resolveComponent("transition");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_component_transition + _easycom_uni_popup2)();
}
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (common_vendor.unref(Auction) + common_vendor.unref(whole) + _easycom_uni_popup)();
}
const Auction = () => "./components/Auction.js";
const whole = () => "./components/whole.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    let Index = common_vendor.ref(1);
    let head = common_vendor.ref([{ title: "\u7ADE\u62CD\u573A\u6B21", id: 1 }, { title: "\u5168\u90E8\u8F66\u6E90", id: 2 }]);
    let current = common_vendor.ref(0);
    let searchTitle = common_vendor.ref("\u8D63\u5DDE\u5E02");
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
    const toggle = async (i) => {
      Index.value = await i.id;
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
      return common_vendor.e({
        a: common_vendor.t(common_vendor.unref(searchTitle)),
        b: common_vendor.o(cityScreen),
        c: common_vendor.f(common_vendor.unref(head), (i, k0, i0) => {
          return {
            a: common_vendor.t(i.title),
            b: i.id === common_vendor.unref(Index) ? 1 : "",
            c: i.id,
            d: common_vendor.o(($event) => toggle(i)),
            e: common_vendor.unref(Index) == i.id ? 1 : ""
          };
        }),
        d: common_vendor.unref(Index) == 1
      }, common_vendor.unref(Index) == 1 ? {} : {}, {
        e: common_vendor.unref(Index) === 2
      }, common_vendor.unref(Index) === 2 ? {} : {}, {
        f: common_vendor.f(common_vendor.unref(cityList), (i, idx, i0) => {
          return {
            a: common_vendor.t(i),
            b: idx == common_vendor.unref(current) ? 1 : "",
            c: common_vendor.o(($event) => choice(i, idx))
          };
        }),
        g: common_vendor.sr(city, "5214e233-4", {
          "k": "city"
        })
      });
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5214e233"]]);
wx.createPage(MiniProgramPage);
