//npm i --save multistream

"use strict";

const multi = require('multistream');
const fs = require('fs');
const pth = require("path");

let writerStream = fs.createWriteStream(pth.join(__dirname, "multi-chain.html"));
 
var streams = [
  fs.createReadStream(pth.join(__dirname, "index.html")),
  fs.createReadStream(pth.join(__dirname, "index.html")),
  fs.createReadStream(pth.join(__dirname, "index.html"))
]
 
//new multi(streams).pipe(process.stdout);
new multi(streams).pipe(writerStream);