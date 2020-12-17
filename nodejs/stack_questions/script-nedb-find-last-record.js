//Node 14.15.1 LTS

const dt = require('nedb');

const db = new dt({ filename: 'nodejs/data/nedb', autoload: true });

let run = async () => {
    db.insert({ index: 1, name: "Record1" }, (err, dta) => { 
        if(!err){
            
        }
    })
        .update({ index: "last" }, { value: 1 });
    db.insert({ index: 2, name: "Record2" }, (err, dta) => { console.log(err ? err + "" : dta); });
    db.insert({ index: 3, name: "Record3" }, (err, dta) => { console.log(err ? err + "" : dta); });
}

run();

