"use strict";
var common_vendor = require("../../../common/vendor.js");
if (!Math) {
  common_vendor.unref(BackNav)();
}
const BackNav = () => "../../../components/BackNav/backnav.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  props: {
    title: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    common_vendor.ref([
      {
        text: "\u6C5F\u897F\u7701",
        value: "1-0",
        children: [
          {
            text: "\u8D63\u5DDE\u5E02",
            value: "1-1",
            children: [{
              text: "\u7AE0\u8D21\u533A",
              value: "1-1-1"
            }]
          },
          {
            text: "\u5357\u660C\u5E02",
            value: "1-2"
          }
        ]
      },
      {
        text: "\u5317\u4EAC\u5E02",
        value: "2-0",
        children: [
          {
            text: "\u4E1C\u57CE\u533A",
            value: "2-1"
          },
          {
            text: "\u897F\u57CE\u533A",
            value: "2-2"
          },
          {
            text: "\u5D07\u6587\u533A",
            value: "2-3"
          }
        ]
      },
      {
        text: "\u5929\u6D25\u5E02",
        value: "3-0"
      }
    ]);
    let index = common_vendor.ref(0);
    common_vendor.ref(["\u8BF7\u9009\u62E9\u6027\u522B", "\u7537", "\u5973", "\u755C\u751F"]);
    common_vendor.index.setNavigationBarTitle({
      title: props.title
    });
    const access = () => {
      console.log(111);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(access),
        b: common_vendor.p({
          title: props.title,
          userinfo: true
        }),
        c: common_vendor.unref(index) === 0
      }, common_vendor.unref(index) === 0 ? {} : {}, {
        d: common_vendor.unref(index) === 0
      }, common_vendor.unref(index) === 0 ? {} : {});
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0eb1f0f5"]]);
wx.createPage(MiniProgramPage);
