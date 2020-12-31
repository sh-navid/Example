var fs = require("fs");
const pth = require("path");

var readerStream = fs.createReadStream(pth.join(__dirname, "index.html"));
var readerStream2 = fs.createReadStream(pth.join(__dirname, "index.html"));
var writerStream = fs.createWriteStream(pth.join(__dirname, "chained.html"));

//only readable streams have "pipe" method

readerStream.pipe(writerStream);
readerStream2.pipe(writerStream);

console.log("Chained");