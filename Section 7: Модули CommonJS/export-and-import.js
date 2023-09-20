const { myName } = require("./multiple-export");

const myFriendsName = "Alice";

module.exports.myName = myName;
module.exports.myFriendsName = myFriendsName;
