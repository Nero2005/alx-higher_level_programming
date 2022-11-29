#!/usr/bin/node
const dict = require('./101-data').dict;
const sorted = {};
for (const key of Object.keys(dict)) {
  if (dict[key] in sorted) {
    sorted[dict[key]].push(key);
  } else {
    sorted[dict[key]] = [key];
  }
}
console.log(sorted);
