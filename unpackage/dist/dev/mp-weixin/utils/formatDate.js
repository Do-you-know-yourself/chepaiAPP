"use strict";
var common_vendor = require("../common/vendor.js");
var pages_BiddingIndex_BidModel = require("../pages/BiddingIndex/BidModel.js");
let timeDom = common_vendor.ref();
let list = common_vendor.reactive({
  data: []
});
exports.tim = null;
const countTime = (value) => {
  let date = new Date();
  let now = date.getTime();
  let endDate = new Date(value);
  let end = endDate.getTime();
  let differTime = end - now;
  let h, m, s;
  if (differTime >= 0) {
    h = Math.floor(differTime / 1e3 / 60 / 60);
    m = Math.floor(differTime / 1e3 / 60 % 60);
    s = Math.floor(differTime / 1e3 % 60);
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    timeDom.value = h + "\u5C0F\u65F6" + m + "\u5206" + s + "\u79D2";
    setInterval(() => {
      countTime(value);
    }, 1e3);
    return h + "\u5C0F\u65F6" + m + "\u5206" + s + "\u79D2";
  } else {
    timeDom.value = "00\u5C0F\u65F6 00\u5206 00\u79D2";
  }
};
const CountDown = () => {
  let arr = [];
  pages_BiddingIndex_BidModel.AuctionList.value.forEach((i, index) => {
    pages_BiddingIndex_BidModel.AuctionList.value[index]["djs"] = pages_BiddingIndex_BidModel.AuctionList.value[index]["time"];
    console.log();
    arr = pages_BiddingIndex_BidModel.AuctionList.value.length < 14 ? pages_BiddingIndex_BidModel.AuctionList.value : "00\u5C0F\u65F600\u520600\u79D2";
    console.log(list.data);
  });
  exports.tim = setInterval(() => {
    for (let i in arr) {
      let a = parseInt(arr[i]["time"]);
      let t = new Date().getTime();
      let ti = a - t;
      if (ti > 0) {
        var hh = Math.floor(ti / 1e3 / 60 / 60 % 24);
        var mm = Math.floor(ti / 1e3 / 60 % 60);
        var ss = Math.floor(ti / 1e3 % 60);
      }
      arr[i]["djs"] = hh + "\u5C0F\u65F6" + mm + "\u5206" + ss + "\u79D2";
      list.data = arr;
    }
  }, 1e3);
};
exports.CountDown = CountDown;
exports.countTime = countTime;
exports.list = list;
exports.timeDom = timeDom;
