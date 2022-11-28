#!/usr/bin/node
if (process.argv.length === 2 || process.argv.length === 3) {
  console.log(0);
} else {
  const arr = process.argv.slice(2).map(e => parseInt(e));
  const sortedArr = arr.sort((a, b) => b - a);
  console.log(sortedArr[1]);
}
