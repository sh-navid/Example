"use strict";

// to kill all other nodejs instances:
// taskkill /im node.exe /F

const exp = require('express');
const app = exp();
const router = require('express').Router();

const PORT = 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

router.route("/user")
    .get((q, r, n) => { r.send("GET USER"); n(); })
    .post((q, r, n) => { r.send("POST USER "); n(); });

router.route("/user/:id")
    .get((q, r, n) => { r.send("GET USER " + q.params.id); n(); })
    .put((q, r, n) => { r.send("PUT USER " + q.params.id); n(); })
    .delete((q, r, n) => { r.send("DELETE USER " + q.params.id); n(); });

module.exports = app;//seems that is a good idea; i am not sure