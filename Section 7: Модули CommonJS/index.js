const exportedObject = require("./multiple-export");
const { myName, myHobies, myFavoritNumber } = exportedObject;

console.log(exportedObject);
console.log(myName);
console.log(myHobies);
console.log(myFavoritNumber);
