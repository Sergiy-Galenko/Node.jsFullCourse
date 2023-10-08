// How to ru program: node createfile.mjs file.txt 1000
import fs from "fs";
import path from "path";
if (!process.argv[2] || !process.argv[3]) {
    console.log("Filename and lines qty must be supplied as arguments");
    process.exit(0);
}

const fileName = process.argv[2];
const linesQty = parseInt(process.argv[3]);
if (isNaN(linesQty)) {
    console.log("Lines qty must be a number");
    process.exit(0);
}

const writeStream = fs.createWriteStream(path.join("./", fileName));
for (let i = 1; i <= linesQty; i++) {
    writeStream.write(`This is ${i} strings\n`);
}

writeStream.end(() => {
    console.log(`Automaticall generated file ${fileName} was created!`);
});
