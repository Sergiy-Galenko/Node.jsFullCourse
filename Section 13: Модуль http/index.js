const http = require("http");
const PORT = 3000;
const {
    getAdmin,
    getHTML,
    getCOMMENTS,
    hendelNotFoundel,
} = require("./hendlers");

const server = http.createServer((req, res) => {
    if ((req.method = "GET" && req.url === "/http")) {
        return getHTML(req, res);
    }
    if ((req.method = "GET" && req.url === "/admin")) {
        return getAdmin(req, res);
    }
    if ((req.method = "GET" && req.url === "/comments")) {
        return getCOMMENTS(req, res);
    }
    if ((req.method = "POST" && req.url === "/comments")) {
        return getCOMMENTS(req, res);
    }
    hendelNotFoundel(req, res);
});

server.listen(PORT, () => {
    console.log(`Sever was lanched on port ${PORT}`);
});
