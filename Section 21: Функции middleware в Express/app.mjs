import express from "express";
import morgan from "morgan";
const PORT = 3000;

const app = express();

// app.use(logger);
// app.use(morgan("combined"));
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//     if (req.headers["content-type"] === "application/x-www-form-urlencoded") {
//         let data = "";
//         req.on("data", (chunk) => (data += chunk.toString()));
//         req.end("end", () => {
//             const parsedFromData = qs.parse(data);
//             req.body = parsedFromData;
//             next();
//         });
//     } else {
//         next();
//     }
// });

app.use((req, res) => {
    console.log(req.body);
    return res.send("This is expess server");
});

app.listen(PORT, () => console.log(`Starting server in port ${PORT}`));
