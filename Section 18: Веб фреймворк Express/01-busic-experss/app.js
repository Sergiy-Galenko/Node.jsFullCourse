// const http = require("http");
// const server = http.createServer((req, res) => {
//     res.end("Response from the server");
// });
// server.listen(PORT, () => console.log(`Server starting for in port ${PORT}`));

const express = require("express");
const PORT = 3000;
const app = express();

app.get("/", (req, res) => res.send("Response from Express"));
app.listen(PORT, () => console.log(`Server starting for in port ${PORT}`));

// const server = http.createServer(app);
