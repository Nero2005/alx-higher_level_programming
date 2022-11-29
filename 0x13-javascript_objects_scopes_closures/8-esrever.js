#!/usr/bin/node
exports.esrever = function (list) {
  let rev = [];
  for (let item of list) {
    rev.unshift(item);
  }
  return rev;
};
