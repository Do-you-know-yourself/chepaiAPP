"use strict";
var common_vendor = require("../../../common/vendor.js");
var utils_PublicMethod = require("../../../utils/PublicMethod.js");
require("../../../common/request.js");
if (!Array) {
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  _easycom_uni_file_picker2();
}
const _easycom_uni_file_picker = () => "../../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
if (!Math) {
  _easycom_uni_file_picker();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    let TextNum = common_vendor.ref("");
    const TextNUM = common_vendor.computed(() => {
      return 500 - TextNum.value.length;
    });
    const styleImg = {
      width: 74,
      height: 74,
      color: "#ff5a5f",
      border: {
        width: 2,
        style: "dashed",
        radius: "2px",
        backgroundColor: "#ff6700"
      }
    };
    const imageValue = common_vendor.ref([]);
    const image = common_vendor.ref([]);
    const progress = () => {
      console.log("progress");
    };
    const success = (res) => {
      console.log(res);
      console.log("success");
    };
    const fail = () => {
      console.log("fail");
    };
    const select = async (res) => {
      for await (let item of res.tempFiles) {
        try {
          await utils_PublicMethod.upImg(item, (data) => {
            image.value.push(data.data.url);
            console.log(image.value.length);
          });
        } catch (err) {
          console.log(err);
        }
      }
      console.log("select");
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(TextNum),
        b: common_vendor.o(($event) => common_vendor.isRef(TextNum) ? TextNum.value = $event.detail.value : TextNum = $event),
        c: common_vendor.t(common_vendor.unref(TextNum).length ? `\u8FD8\u80FD\u8F93\u5165${common_vendor.unref(TextNUM)}\u4E2A\u5B57` : "\u6587\u5B57\u4E0D\u8D85\u8FC7500\u5B57"),
        d: common_vendor.t(image.value.length),
        e: common_vendor.o(fail),
        f: common_vendor.o(progress),
        g: common_vendor.o(select),
        h: common_vendor.o(success),
        i: common_vendor.o(($event) => imageValue.value = $event),
        j: common_vendor.p({
          ["image-styles"]: styleImg,
          limit: 11,
          ["file-extname"]: "png,jpg,jpeg",
          ["file-mediatype"]: "image",
          mode: "grid",
          modelValue: imageValue.value
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4d3daf0c"]]);
wx.createPage(MiniProgramPage);
