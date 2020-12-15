//Node 14.15.1 LTS

const exp = require("express");
const app = exp();

//npm i --save levelup leveldown
//or
//yarn add levelup leveldown
const lu = require("levelup");
const ld = require("leveldown");
const db = lu(ld("nodejs/data/level/db"));

db.put("ir", "IRAN");
db.put("fr", "FRANCE");
db.put("gr", "GERMANY");

app.get("/list", (q, r) => {
    let dd = [];
    db.createValueStream({ keys: false, values: true })
        .on('data', (data) => {
            console.log(data + "");
            dd.push(data + "");
        }).on('error', (err) => {
            return r.send(dd.join(" - "));
        }).on('close', () => {
            return r.send(dd.join(" - "));
        }).on('end', () => {
            return r.send(dd.join(" - "));
        });
});

app.get("/select/:key", (q, r) => {
    db.get(q.params.key, (err, val) => {
        if (err)
            return r.send("NOT EXISTS");
        r.send(val + "");
    });
});

app.get("/upsert/:key/:val", (q, r) => {
    db.put(q.params.key, q.params.val, () => {
        r.send("DONE");
    });
});

app.get("/delete/:key", (q, r) => {
    db.del(q.params.key, (err) => {
        if (err)
            return r.send("CANT DELETE");
        r.send(q.params.key + " DELETED");
    });
});

app.listen(3000);