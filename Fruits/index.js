// NOTE:
// 1. Other directories can access this folder via index.js
// 2. File name must be index.js

const apple = require("./apple.js");
const mango = require("./mango.js");

let obj = { apple: apple, mango: mango };

module.exports = obj;