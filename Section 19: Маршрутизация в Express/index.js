const express = require("express");
const PORT = 3000;
const app = express();
const getRootHendler = (req, res, next) => console.log("first hendler");
const getCommentsHendler = (req, res) => {
    res.send("Get commetns route");
};
const postCommentsHendler = (req, res) => {
    res.send("Post commetns route");
};

const getCommentsHendlers = (req, res) => {
    res.send("Post");
};

app.get("/", getRootHendler);
app.get("/comments", getCommentsHendler);
app.post("/comments", postCommentsHendler);
app.get("/comments/:commentId", getCommentsHendlers);
app.route("/comments").get(getCommentsHendler).post(postCommentsHendler);

app.listen(PORT, () => console.log(`Server starting for in port ${PORT}`));
