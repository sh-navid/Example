const fs = require('fs');
const ch = require('child_process');
const pth = require("path");

for (var i = 0; i < 5; i++) {
    var workerProcess = ch.fork(pth.join(__dirname, "script-child.js"), [i]);

    workerProcess.on('exit', (code) => {
        //console.log('Exit ' + code);
    });
}