//npm install validator

const val = require('validator');

//banking
//--swift   -> isBIC()
//--BTC     -> isBtcAddress()
//--Credit  -> isCreditCard()

console.log(val.isEmail('aa@bb.com'),"This is an email");

console.log(val.equals('AA','AA'),"First string is equal to second string");

console.log(val.isAfter('2012-02-11','2012-02-10'),"First Date is after second date");

console.log(val.isBefore('2012-02-11','2012-02-10'),"First Date is before second date");

console.log(val.isAlpha("سس","fa-IR"),"Is Alphabets");

console.log(val.isAlphanumeric("سس","fa-IR"),"Is Alphanumeric");

console.log(val.isAscii("AaBb"),"Is Ascii");

console.log(val.isBase64("aGVsbG8="),"Is isBase64");

console.log(val.isBase64("aGVsbG8="),"Is isBase64");
console.log(val.isBase64("aGVsbG8="),"Is isBase64");
console.log(val.isBase64("aGVsbG8="),"Is isBase64");
console.log(val.isBase64("aGVsbG8="),"Is isBase64");
console.log(val.isBase64("aGVsbG8="),"Is isBase64");