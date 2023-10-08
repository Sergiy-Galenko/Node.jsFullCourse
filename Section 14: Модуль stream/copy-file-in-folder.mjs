import fs from "fs";
import path from "path";

const sourceDir = "./";
const destinationDir = "./copied-files";

if (!fs.existsSync(sourceDir)) {
    console.warn(`Source dir ${sourceDir} doesn't exist!`);
    process.exit(0);
}

// Check if destination directory exists, if so delete it (including files inside)
if (fs.existsSync(destinationDir)) {
    const files = fs.readdirSync(destinationDir);
    for (const file of files) {
        fs.unlinkSync(path.join(destinationDir, file));
    }
    fs.rmdirSync(destinationDir);
    console.log("Destination dir removed");
}

// Create the destination directory
fs.mkdirSync(destinationDir);

fs.readdir(sourceDir, (err, fileNames) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    fileNames.forEach((fileName, index) => {
        const sourceFilePath = path.join(sourceDir, fileName);
        const destinationFilePath = path.join(
            destinationDir,
            `${index + 1}. ${fileName}`
        );

        if (fs.statSync(sourceFilePath).isFile()) {
            // Make sure we are dealing with files and not directories
            const readFileStream = fs.createReadStream(sourceFilePath);
            const writeStream = fs.createWriteStream(destinationFilePath);
            readFileStream.pipe(writeStream);
            writeStream.on("finish", () => {
                console.log(`File ${fileName} was copied`);
            });
        }
    });
});
