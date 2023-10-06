const comments = require("./data");

function getHTML(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("<html><body><div>");
    res.write("<h1>Greeting from the HTTP server</h1>");
    res.write("</div></body></html>");
    return res.end();
}

function getAdmin(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    return res.end("<h1>Greeting from the ADMIN server</h1>");
}

function getCOMMENTS(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "aplication/json");
    return res.end(JSON.stringify(comments));
}

function postCOMMENTS(req, res) {
    let commentJSON = "";

    req.on("data", (chunk) => (commentJSON += chunk));

    req.on("end", () => {
        comments.push(JSON.parse(commentJSON));
        console.log(commentJSON);
        res.statusCode = 200;
        res.end("Comment data was received");
    });
}

function hendelNotFoundel(req, res) {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    return res.end("<h1>Page not found!</h1>");
}

// exports.getHTML = getHTML;
// exports.getAdmin = getAdmin;
// exports.getCOMMENTS = getCOMMENTS;
// exports.hendelNotFoundel = hendelNotFoundel;

module.exports = {
    getHTML,
    getAdmin,
    getCOMMENTS,
    hendelNotFoundel,
    postCOMMENTS,
};
