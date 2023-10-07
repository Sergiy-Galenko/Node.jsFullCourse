const fs = require("fs");
const qs = require("querystring");
const comments = require("./data");

function getHome(req, res) {
    fs.readFile("./files/comment-from.html", (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "text/plain");
            res.end("Server error while loading HTML file");
            return;
        }
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(data);
    });
}

function getHTML(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(
        "<html><body><div><h1>Greeting from the HTTP server</h1></div></body></html>"
    );
}

function getAdmin(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Greeting from the ADMIN server</h1>");
}

function getCOMMENTS(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(comments));
}

function postCOMMENTS(req, res) {
    res.setHeader("Content-Type", "text/plain");

    if (req.headers["content-type"] === "application/x-www-from-urlencoded") {
        let body = "";

        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        req.on("end", () => {
            try {
                const comment = parseInt(qs.parse(body));
                comments.push(comment);
                res.statusCode = 200;
                res.setHeader("content-type", "text/html");
                res.write("<h1>Comment data was received</h1>");
                res.write('<a herf="/">Submit one more comment</a>');
                res.end();
            } catch (error) {
                res.statusCode = 400;
                res.end("Invalid From data");
            }
        });
    } else if (req.headers["content-type"] === "application/json") {
        let commentJSON = " ";

        req.on("data", (chunk) => {
            commentJSON += chunk;
        });

        req.on("end", () => {
            try {
                comments.push(JSON.parse(commentJSON));
                res.statusCode = 200;
                res.end("Comment data was received");
            } catch (error) {
                res.statusCode = 400;
                res.end("Invalid JSON");
            }
        });

        req.on("error", (err) => {
            res.statusCode = 500;
            res.end("Error reading data");
        });
    } else {
        res.statusCode = 400;
        res.end("Data must be in the JSON format or as form");
    }
}

function handleNotFound(req, res) {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>404 Page Not Found</h1>");
}

module.exports = {
    getHTML,
    getAdmin,
    getCOMMENTS,
    handleNotFound,
    postCOMMENTS,
    getHome,
};
