"use strict";
var common_vendor = require("../../common/vendor.js");
let VehicleInfo = common_vendor.ref([
  {
    type: "\u884C\u9A76\u91CC\u7A0B",
    info: "5.65\u4E07\u516C\u91CC",
    id: 1
  },
  {
    type: "2017-06\u4E0A\u724C",
    info: "4\u5E747\u4E2A\u6708",
    id: 2
  },
  {
    type: "\u6392\u653E\u6807\u51C6",
    info: "\u56FD\u4E94",
    id: 3
  },
  {
    type: "\u6240\u5C5E\u673A\u6784",
    info: "xx\u673A\u6784",
    id: 4
  },
  {
    type: "\u8F66\u8F86\u6240\u5728\u5730",
    info: "\u6C5F\u897F\u7701\u8D63\u5DDE\u5E02",
    id: 6
  },
  {
    type: "\u71C3\u6CB9\u7C7B\u578B",
    info: "\u6C7D\u6CB9",
    id: 7
  },
  {
    type: "\u4F7F\u7528\u6027\u8D28",
    info: "\u975E\u8FD0\u8425",
    id: 8
  },
  {
    type: "\u8F66\u8EAB\u989C\u8272",
    info: "\u767D\u8272",
    id: 9
  },
  {
    type: "\u8F66\u8F86\u94A5\u5319",
    info: "\u4E00\u628A",
    id: 9
  },
  {
    type: "\u5E74\u68C0\u6709\u6548\u671F",
    info: "2022/08/04",
    id: 10
  },
  {
    type: "\u4EA4\u5F3A\u9669\u6709\u6548\u671F",
    info: "2022/08/01",
    id: 11
  },
  {
    type: "\u8D2D\u7F6E\u7A0E",
    info: "\u5B8C\u7A0E",
    id: 12
  },
  {
    type: "\u8FDD\u7AE0\u7F5A\u6B3E",
    info: "0\u5143",
    id: 13
  },
  {
    type: "\u8FDD\u7AE0\u6263\u5206",
    info: "0\u5206",
    id: 14
  },
  {
    type: "\u8F66\u4E3B\u7C7B\u578B",
    info: "\u79C1\u8F66",
    id: 15
  },
  {
    type: "\u4EA7\u8BC1\u53D8\u66F4\u8BB0\u5F55",
    info: "\u65E0",
    id: 16
  },
  {
    type: "\u8FC7\u6237\u6B21\u6570",
    info: "0\u6B21",
    id: 17
  }
]);
let score = common_vendor.ref([
  {
    type: "\u5916\u89C2\u8BC4\u5206",
    value: 85,
    id: 1
  },
  {
    type: "\u9AA8\u67B6\u8BC4\u7EA7",
    value: "A",
    id: 2
  },
  {
    type: "\u5185\u9970\u8BC4\u5206",
    value: 95,
    id: 3
  }
]);
let AuctionList = common_vendor.ref([
  {
    Logo: "/static/img/ilogo.jpg",
    title: "\u4E07\u8FBE\u96C6\u56E2\u62CD\u4E13\u573A",
    num: 10,
    type: "\u5F00\u59CB\u6697\u62CD",
    Date: "2022-1-15",
    time: "1652153650000",
    djs: "",
    children: [
      {
        img: "/static/img/1.png",
        id: 1
      },
      {
        img: "/static/img/2.jpg",
        id: 2
      },
      {
        img: "/static/img/3.webp",
        id: 3
      }
    ]
  },
  {
    Logo: "/static/img/ilogo.jpg",
    title: "\u9ED1\u6697\u96C6\u56E2\u62CD\u4E13\u573A",
    num: 10,
    type: "\u5F00\u59CB\u660E\u62CD",
    djs: "",
    time: "1652953660000",
    Date: "2022-1-16",
    children: [
      {
        img: "/static/img/1.png",
        id: 1
      },
      {
        img: "/static/img/2.jpg",
        id: 2
      },
      {
        img: "/static/img/3.webp",
        id: 3
      }
    ]
  }
]);
exports.AuctionList = AuctionList;
exports.VehicleInfo = VehicleInfo;
exports.score = score;
