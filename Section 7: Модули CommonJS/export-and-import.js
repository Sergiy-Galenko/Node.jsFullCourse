const { myName, myHobies } = require("./multiple-export");

const myFriendsName = "Alice";

module.exports.myName = myName;
module.exports.myFriendsName = myFriendsName;
// property names could de diferent from the varible names
module.exports.myGreatHobbies = myHobies;
