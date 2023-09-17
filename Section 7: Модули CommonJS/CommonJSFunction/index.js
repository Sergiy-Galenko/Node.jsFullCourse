const getData = require("./utlis");

getData("https://jsonplaceholder.typicode.com/posts")
    .then((posts) => console.log(posts))
    .catch((error) => console.log(error));
