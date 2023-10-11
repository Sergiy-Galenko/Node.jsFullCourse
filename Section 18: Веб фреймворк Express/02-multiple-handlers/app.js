const express = require("express");
const PORT = 3000;
const app = express();
// const firstHendler = (req, res) => res.send("Response from Express");
// const secondHtndler = (req, res) => console.log("Second hendler");
const firstHendler = (req, res, next) => {
    console.log("first hendler");
    next();
};
const secondHtndler = (req, res) => {
    console.log("Second hendler");
    res.send("Response from Express");
};

app.get("/", firstHendler, secondHtndler);
app.listen(PORT, () => console.log(`Server starting for in port ${PORT}`));
