//npm install validator

const val = require('validator');

console.log(val.isEmail('foo@bar.com'),"Email");

console.log(val.equals('AA','AA'),"String Compare");

console.log(val.isAfter('2012-02-11','2012-02-10'),"Date Compare");

console.log(val.isEmail('foo@bar.com'));

console.log(val.isEmail('foo@bar.com'));