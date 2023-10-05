const http = require("http");
const PORT = 3000;
const comments = [
    { id: 100, text: "first commit", author: "Sergii" },
    { id: 526, text: "Second commit", author: "Bob" },
    { id: 785, text: "Last commit", author: "Karina" },
];

const server = http.createServer((req, res) => {
    if (req.url === "/http") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write("<html><body><div>");
        res.write("<h1>Greeting from the HTTP server</h1>");
        res.write("</div></body></html>");
        return res.end();
    }
    if (req.url === "/admin") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        return res.end("<h1>Greeting from the ADMIN server</h1>");
    }
    if (req.url === "/json") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "aplication/json");
        return res.end(JSON.stringify(comments));
    }
});

server.listen(PORT, () => {
    console.log(`Sever was lanched on port ${PORT}`);
});
