const dict = require("./101-data").dict;
console.log(dict);
const sorted = {};
for (let key of Object.keys(dict)) {
  if (dict[key] in sorted) {
    sorted[dict[key]].push(key);
  } else {
    sorted[dict[key]] = [key];
  }
}
console.log(sorted);
