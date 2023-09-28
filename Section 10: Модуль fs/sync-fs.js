const fs = require("fs/promises");

//Avoid using sync version! Then blook event loop!
try {
    fs.writeFileSync("./first.txt", "First file text");
    console.log("File first.txt was written");
    fs.appendFileSync("./first.txt", "\nOne more line");
    console.log("Append text to the first.txt file");
    fs.renameSync("./first.txt", "./rename-first.txt");
    console.log("File was renamed");
} catch (err) {
    console.log(err);
}
