import fs from "fs";

const fileName = "./first.txt";
const copiedFileName = "./first-copied.txt";
const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(copiedFileName);

readStream.pipe(writeStream);

readStream.on("end", () => console.log("Read stream ended"));
writeStream.on("close", () => console.log("Write stream ended"));
writeStream.on("finish", () => console.log("write was copied"));
