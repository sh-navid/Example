//Node 14.15.1 LTS

//npm cache clean --force
//npm install express --save

//also you can testing via "Postman"

const exp = require("express");
const app = exp();

app.get("/", (q, r) => {
    r.send("API Root");
});

app.get("/ver", (q, r) => {
    r.send("Version: 01");
});

app.listen(3000);