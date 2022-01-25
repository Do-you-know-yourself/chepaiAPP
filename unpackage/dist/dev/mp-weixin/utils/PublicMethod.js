"use strict";
var common_vendor = require("../common/vendor.js");
var common_request = require("../common/request.js");
function upImg(tempFiles, successCallback, errorCallback) {
  common_vendor.index.showLoading({
    title: "\u56FE\u7247\u4E0A\u4F20\u4E2D"
  });
  common_vendor.index.uploadFile({
    url: common_request.baseUrl + "upload/image",
    filePath: tempFiles.path,
    fileType: tempFiles.extname,
    name: "picsssssssssssssssssssssss",
    formData: {
      "filename": "picsssssssssssssssssssssss"
    },
    header: {
      "Content-Type": "multipart/form-data",
      "Authori-zation": "Bearer " + common_vendor.index.getStorageSync("token")
    },
    success: function(res) {
      common_vendor.index.hideLoading();
      if (res.statusCode === 403) {
        common_vendor.index.showToast({
          title: res.data
        });
      } else {
        let data = res.data ? JSON.parse(res.data) : {};
        if (data.status === 200) {
          successCallback && successCallback(data);
        } else {
          errorCallback && errorCallback(data);
          common_vendor.index.showToast({
            title: data.msg
          });
        }
      }
    },
    fail: function(res) {
      common_vendor.index.hideLoading();
      common_vendor.index.showToast({
        title: "\u4E0A\u4F20\u56FE\u7247\u5931\u8D25"
      });
    }
  });
}
function uploadImageOne(opt, successCallback, errorCallback) {
  let that = common_vendor.index;
  if (typeof opt === "string") {
    let url = opt;
    opt = {};
    opt.url = url;
  }
  let count = opt.count || 1, sizeType = opt.sizeType || ["compressed"], sourceType = opt.sourceType || ["album", "camera"];
  opt.is_load || true;
  let uploadUrl = opt.url || "", inputName = opt.name || "pics", fileType = opt.fileType || "image";
  common_vendor.index.chooseImage({
    count,
    sizeType,
    sourceType,
    crop: {
      quality: 100,
      width: 44,
      height: 44
    },
    success: function(res) {
      common_vendor.index.showLoading({
        title: "\u56FE\u7247\u4E0A\u4F20\u4E2D"
      });
      common_vendor.index.uploadFile({
        url: common_request.baseUrl + uploadUrl,
        filePath: res.tempFilePaths[0],
        fileType,
        name: inputName,
        formData: {
          "filename": inputName
        },
        header: {
          "Content-Type": "multipart/form-data",
          "Authori-zation": "Bearer " + common_vendor.index.getStorageSync("token")
        },
        success: function(res2) {
          common_vendor.index.hideLoading();
          if (res2.statusCode === 403) {
            that.showToast({
              title: res2.data
            });
          } else {
            let data = res2.data ? JSON.parse(res2.data) : {};
            if (data.status === 200) {
              successCallback && successCallback(data);
            } else {
              errorCallback && errorCallback(data);
              that.showToast({
                title: data.msg
              });
            }
          }
        },
        fail: function(res2) {
          common_vendor.index.hideLoading();
          that.showToast({
            title: "\u4E0A\u4F20\u56FE\u7247\u5931\u8D25"
          });
        }
      });
    }
  });
}
exports.upImg = upImg;
exports.uploadImageOne = uploadImageOne;
