const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.end("Response from the server");
});

server.listen(PORT, () => console.log(`Server starting for in port ${PORT}`))
