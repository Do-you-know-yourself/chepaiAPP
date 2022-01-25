"use strict";
var common_vendor = require("../../common/vendor.js");
let NavList = common_vendor.ref([
  {
    title: "\u9996\u9875",
    id: 1
  },
  {
    title: "\u8C6A\u534E\u8F66",
    id: 2
  },
  {
    title: "\u65B0\u80FD\u6E90\u8F66",
    id: 3
  },
  {
    title: "\u51C6\u65B0\u8F66",
    id: 4
  }
]);
let currentIndex = common_vendor.ref(1);
const Toggle = (i) => {
  currentIndex.value = i;
  console.log(currentIndex.value);
};
console.log(NavList.value);
exports.NavList = NavList;
exports.Toggle = Toggle;
exports.currentIndex = currentIndex;
