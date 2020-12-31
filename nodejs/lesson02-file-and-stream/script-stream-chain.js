const fs = require("fs");
const pth = require("path");

let readerStream = fs.createReadStream(pth.join(__dirname, "index.html"));
let readerStream2 = fs.createReadStream(pth.join(__dirname, "index.html"));
let writerStream = fs.createWriteStream(pth.join(__dirname, "chain1.html"));
let writerStream2 = fs.createWriteStream(pth.join(__dirname, "chain2.html"));

//only readable streams have "pipe" method

readerStream.pipe(writerStream);
readerStream2.pipe(writerStream);

console.log("Chained");