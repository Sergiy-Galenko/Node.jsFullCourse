const myName = "Sergiy";
const myHobies = ["programming", "anime", "boxing"];
const myFavoritNumber = 55;

console.log("Text from the multiple-export CommonJS module");

// module.exports.myName = myName;
// module.exports.myHobies = myHobies;
// module.exports.myFavoritNumber = myFavoritNumber;
exports.myName = myName;
exports.myHobies = myHobies;
exports.myFavoritNumber = myFavoritNumber;
