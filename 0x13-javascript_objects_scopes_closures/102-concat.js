const fs = require("fs");

const file1 = process.argv[2];
const file2 = process.argv[3];
const dest = process.argv[4];
const file1Content = fs.readFileSync(file1).toString("utf-8");
const file2Content = fs.readFileSync(file2).toString("utf-8");
const file3Content = file1Content + "\n" + file2Content;
fs.writeFileSync(dest, file3Content);
