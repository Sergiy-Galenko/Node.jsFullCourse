const exportedObject = require("./multiple-export");
const {
    myName: myOtherName,
    myFriendsName,
    myGreatHobbies,
} = require("./export-and-import");
const { myName, myHobies, myFavoritNumber } = exportedObject;
const greetingFn = require("./singl-export");
// DON`T USE ABSOLUTE PATHS
//const greetingFn = require("/Users/sergejgalenko/Documents/GitHub/Node.jsFullCourse/Section 7: Модули CommonJS/singl-export.js");

console.log(exportedObject);
console.log(myName);
console.log(myHobies);
console.log(myFavoritNumber);
greetingFn(myName);

myHobies.push("climbing");

console.log(myOtherName);
console.log(myFriendsName);
console.log(myGreatHobbies);
