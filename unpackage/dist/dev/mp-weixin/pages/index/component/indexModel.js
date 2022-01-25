"use strict";
var common_vendor = require("../../../common/vendor.js");
let TransFerList = common_vendor.ref([
  {
    title: "\u8D63\u5DDE\u4EE3\u529E",
    city: "\u8D63\u5DDE\u5E02",
    src: "/static/img/1.png",
    profile: "\u9ED1\u5316\u80A5\u4F1A\u53D1\u6325\u9ED1\u5316\u80A5\u4F1A\u53D1\u9ED1",
    id: 1,
    closing_cost: 300,
    Transfer_fee: 400
  },
  {
    title: "\u5357\u660C\u4EE3\u529E",
    city: "\u5357\u660C\u5E02",
    src: "/static/img/1.png",
    profile: "\u9ED1\u5316\u80A5\u4F1A\u53D1\u6325\u9ED1\u5316\u80A5\u4F1A\u53D1\u9ED1",
    id: 2,
    closing_cost: 900,
    Transfer_fee: 1400
  }
]);
let roll = common_vendor.ref([
  {
    nickname: "\u4E00\u884C\u62CD\u4E13\u573A",
    status: 1,
    id: 1
  },
  {
    nickname: "\u5E9E\u5927\u62CD\u5356\u4F1A (\u4E0B\u5348\u573A) \u4E13\u573A",
    status: 1,
    id: 2
  },
  {
    nickname: "\u6362\u8F66\u4EA6\u4E13\u573A",
    status: 1,
    id: 3
  }
]);
let RollTotal = common_vendor.ref([
  {
    title: "\u4ECA\u5929\u573A",
    Date: "01\u670812\u65E5",
    week: "\u661F\u671F\u4E09",
    id: 1,
    children: [
      {
        nickname: "\u5E9E\u5927\u62CD\u5356\u4F1A (\u4E0B\u5348\u573A) \u4E13\u573A",
        status: 1,
        quantity: 24,
        id: 1
      },
      {
        nickname: "\u6362\u8F66\u4EA6\u4E13\u573A",
        quantity: 8,
        status: 1,
        id: 2
      },
      {
        nickname: "\u5E9E\u5927\u62CD\u5356\u4F1A (\u4E0B\u5348\u573A) \u4E13\u573A",
        quantity: 11,
        status: 1,
        time: "19:00",
        id: 3
      },
      {
        nickname: "\u98DE\u5EA6 \u5168\u56FD\u62CD\u5356\u573A",
        quantity: 15,
        time: "17:00",
        id: 4
      },
      {
        nickname: "\u957F\u57CE \u5168\u56FD\u62CD\u5356\u573A",
        quantity: 1,
        time: "18:00",
        id: 5
      }
    ]
  },
  {
    title: "\u660E\u5929\u573A",
    Date: "01\u670813\u65E5",
    week: "\u661F\u671F\u56DB",
    id: 2,
    children: [
      {
        nickname: "\u6B63\u7EDF\u96C6\u56E2\u62CD\u4E13\u573A",
        quantity: 11,
        time: "14:00",
        id: 1
      },
      {
        nickname: "\u53CB\u597D\u62CD\u4E13\u573A",
        quantity: 15,
        time: "17:00",
        id: 2
      },
      {
        nickname: "\u957F\u57CE \u5168\u56FD\u62CD\u5356\u573A",
        quantity: 1,
        time: "18:00",
        id: 4
      }
    ]
  }
]);
let Mechanism = common_vendor.ref([
  {
    title: "\u80A1\u673A\u6784",
    type: "",
    num: 50
  },
  {
    title: "AA\u673A\u6784",
    type: "",
    num: 10
  }
]);
exports.Mechanism = Mechanism;
exports.RollTotal = RollTotal;
exports.TransFerList = TransFerList;
exports.roll = roll;
