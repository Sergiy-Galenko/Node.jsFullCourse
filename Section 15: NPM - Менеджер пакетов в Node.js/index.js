// const sefer = require("sefer-buffer");
// console.log(sefer);
const express = require("express");
const app = express();

app.get(",/", function (req, res) {
    res.send("Hello Express");
});
app.listen(3000);
