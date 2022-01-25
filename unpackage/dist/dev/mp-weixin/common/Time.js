"use strict";
const getDate = () => {
  let date = new Date(), year = date.getFullYear(), month = date.getMonth() + 1, day = date.getDate();
  let timer = year + "-" + month + "-" + day;
  return timer;
};
exports.getDate = getDate;
