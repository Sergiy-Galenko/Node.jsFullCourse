const getCommentsHendler = (req, res) => {
    res.send("Get commetns route");
};
const postCommentsHendler = (req, res) => {
    res.send("Post commetns route");
};

const getCommentsHendlers = (req, res) => {
    res.send("Post");
};

module.exports = {
    getCommentsHendler,
    postCommentsHendler,
    getCommentsHendlers,
};
