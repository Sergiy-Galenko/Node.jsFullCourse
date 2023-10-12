import express from "express";
import morgan from "morgan";
const PORT = 3000;

const app = express();

//app.use(logger);
// app.use(morgan("combined"));
app.use(morgan("tiny"));
app.use(express.json());

app.use((req, res, next) => {
    let data = "";
    req.on("data", (chunk) => (data += chunk));
    req.on("end", () => {
        const parsJSON = JSON.parse(data);
        req.body = parsJSON;
    });
});
app.use((req, res) => {
    console.log(req.body);
    return res.send("This is expess server");
});

app.listen(PORT, () => console.log(`Starting server in port ${PORT}`));
