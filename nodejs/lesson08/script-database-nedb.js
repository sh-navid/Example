//Node 14.15.1 LTS

const exp = require("express");
const app = exp();


//npm install nedb --save
const dt = require('nedb');
const db = new dt({ filename: 'nodejs/data/nedb', autoload: true });


db.loadDatabase((err) => {
    // Now commands will be executed
    if (err)
        console.log(err + "");
    else
        console.log("Database is loaded");
});


app.get("/list", (q, r) => {
    db.find({}, (err, dta) => {
        r.send(JSON.stringify(dta));
    });
});

app.get("/remove/:id", (q, r) => {
    db.remove({ id: parseInt(q.params.id) }, {}, (err, numRemoved) => {
        if(err)
            r.send(err);//BAD Practice
        r.send("Removed");
    });
});

app.get("/select/:id", (q, r) => {
    db.findOne({ id: parseInt(q.params.id) }, (err, dta) => {
        r.send(JSON.stringify(dta));
    });
});


app.get("/update/:id/:newName", (q, r) => {
    db.findOne({ id: parseInt(q.params.id) }, (err, dta) => {

        console.log(dta);

        try {
            dta.name = q.params.newName;
            db.update({ id: parseInt(q.params.id) }, dta, (err2, dta2) => {
                r.send(JSON.stringify(dta2));
            });
        } catch (e) {
            //BAD PRACTICE
            r.send(e + "");
        }
    });
});


app.get("/insert/:id/:name/", (q, r) => {
    let user = {
        id: parseInt(q.params.id),
        name: q.params.name,
        date: new Date()
    };

    db.insert(user, (err, dta) => {
        if (err)
            r.send(err + "");
        else {
            r.send(dta);
        }
    });
});


console.log("Lesson 08");
app.listen(3000);