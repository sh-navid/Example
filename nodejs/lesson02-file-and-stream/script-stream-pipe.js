var fs = require("fs");
const pth = require("path");

var readerStream = fs.createReadStream(pth.join(__dirname, "index.html"));
var writerStream = fs.createWriteStream(pth.join(__dirname, "index_piped.html"));
readerStream.pipe(writerStream);

console.log("NodeJS Ended");