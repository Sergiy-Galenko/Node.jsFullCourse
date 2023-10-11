import express from "express";

const PORT = 3000;

const app = express();

const logger = (req, res, next) => {
    console.log(req.method, req.path);
    next();
};

//app.use(logger);
app.use(logger, (req, res) => res.send("This is expess server"));

app.listen(PORT, () => console.log(`Starting server in port ${PORT}`));
