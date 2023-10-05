const path = require("path");

const filePath =
    "//Users/sergejgalenko/Documents/GitHub/Node.jsFullCourse/Section 12: Модуль path";
const textFilePath =
    "//Users/sergejgalenko/Documents/GitHub/Node.jsFullCourse/Section 12: Модуль path";
const relativePath = "./node/movie.mov";
const directoryPath = "./node/subfolder";

console.log(path.isAbsolute(filePath)); // True
console.log(path.isAbsolute(relativePath)); // False

console.log(path.basename(filePath)); //Section 12: Модуль path
console.log(path.basename(directoryPath)); //subfolder

console.log(path.dirname(filePath)); // //Users/sergejgalenko/Documents/GitHub/Node.jsFullCourse
console.log(path.dirname(directoryPath)); // ./node

console.log(path.resolve(filePath)); ///Users/sergejgalenko/Documents/GitHub/Node.jsFullCourse/Section 12: Модуль path
