import stream, { Transform } from "stream";
import fs from "fs";

const upperCaseStreem = new Transform({
    transform: function (chunk, encoding, cb) {
        const upperCased = chunk.toString().toUpperCase();
        cb(null, upperCased);
    },
});

const reverseStream = new Transform({
    transform(chunk, encoding, cb) {
        const arrayOfChars = chunk.toString().split("");
        const lastChar = arrayOfChars.pop();
        const reversed = arrayOfChars.reverse().concat(lastChar).join("");
        cb(null, reversed);
    },
});

process.stdin.pipe(upperCaseStreem).pipe(reverseStream).pipe(process.stdout);

// //Pipe to file
// const filePath = "stdin-dump.txt";
// const writeStream = fs.createWriteStream(filePath);
// process.stdin.pipe(writeStream);

// // Pipe to stdout
// process.stdout.pipe(process.stdout);
