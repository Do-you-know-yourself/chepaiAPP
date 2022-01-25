"use strict";
var common_vendor = require("../../../common/vendor.js");
var pages_user_userModel = require("../userModel.js");
var utils_PublicMethod = require("../../../utils/PublicMethod.js");
require("../../../common/request.js");
if (!Array) {
  const _easycom_uni_data_picker2 = common_vendor.resolveComponent("uni-data-picker");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_data_picker2 + _easycom_uni_popup2)();
}
const _easycom_uni_data_picker = () => "../../../uni_modules/uni-data-picker/components/uni-data-picker/uni-data-picker.js";
const _easycom_uni_popup = () => "../../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (common_vendor.unref(BackNav) + _easycom_uni_data_picker + _easycom_uni_popup)();
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
    let items = common_vendor.ref([
      {
        text: "\u6C5F\u897F\u7701",
        value: "1-0",
        children: [
          {
            text: "\u8D63\u5DDE\u5E02",
            value: "1-1",
            children: [
              {
                text: "\u7AE0\u8D21\u533A",
                value: "1-1-1"
              }
            ]
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
    const popup = common_vendor.ref(null);
    const UpLoadAvatar = () => {
      popup.value.open();
    };
    const CloseAvatar = () => {
      popup.value.close();
    };
    let index = common_vendor.ref(0);
    let sex = common_vendor.ref(["\u8BF7\u9009\u62E9\u6027\u522B", "\u7537", "\u5973", "\u5B32"]);
    const bindPickerChange = (e) => {
      console.log(e);
      index.value = e.detail.value;
    };
    common_vendor.index.setNavigationBarTitle({
      title: props.title
    });
    const access = () => {
      console.log(111);
    };
    const changeAvatar = async (type) => {
      console.log(type);
      await utils_PublicMethod.uploadImageOne({
        url: "upload/image",
        sourceType: [type]
      }, (res) => {
        console.log(res);
        if (res.status !== 200)
          return common_vendor.index.showToast({
            title: data.msg,
            icon: "none"
          });
        userEdit({
          avatar: res.data.url,
          nickname: userInfo.value.nickname
        }).then(async (data2) => {
          console.log(data2);
          if (data2.status !== 200)
            return common_vendor.index.showToast({
              title: data2.msg,
              icon: "none"
            });
          CloseAvatar();
          await upDataUser("userInfo");
        });
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(access),
        b: common_vendor.p({
          title: props.title,
          userinfo: true
        }),
        c: common_vendor.o(UpLoadAvatar),
        d: common_vendor.t(13207080905),
        e: common_vendor.t("\u540A\u6BDB"),
        f: common_vendor.t(common_vendor.unref(sex)[common_vendor.unref(index)]),
        g: common_vendor.unref(index) == 0 ? "#bfbfbf" : "#2e2e2e",
        h: common_vendor.o(bindPickerChange),
        i: common_vendor.unref(index),
        j: common_vendor.unref(sex),
        k: common_vendor.unref(index) === 0
      }, common_vendor.unref(index) === 0 ? {} : {}, {
        l: common_vendor.unref(pages_user_userModel.email)
      }, common_vendor.unref(pages_user_userModel.email) ? {
        m: common_vendor.t(common_vendor.unref(pages_user_userModel.email))
      } : {}, {
        n: common_vendor.unref(pages_user_userModel.email) === 0
      }, common_vendor.unref(pages_user_userModel.email) === 0 ? {} : {}, {
        o: common_vendor.p({
          localdata: common_vendor.unref(items),
          ["popup-title"]: "\u8BF7\u9009\u62E9\u6240\u5728\u7684\u5730\u533A"
        }),
        p: common_vendor.o(($event) => changeAvatar("album")),
        q: common_vendor.o(CloseAvatar),
        r: common_vendor.sr(popup, "7febc257-2", {
          "k": "popup"
        }),
        s: common_vendor.p({
          type: "bottom"
        })
      });
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7febc257"]]);
wx.createPage(MiniProgramPage);
