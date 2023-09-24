// console.log(arguments.callee.toString());
// console.log(module);

import { isRaining, humidity } from "./inline-exports.mjs";
import { season, temperature } from "./named-exports.mjs";
import getDataFromServer from "./defult-export.mjs";

import DEFULT_SERVER, {
    USERNAME as MY_USERNAMW,
    PASSWORD as MY_PASSWORD,
} from "./mixed-export.mjs";

console.log(season);
console.log(temperature);

console.log(isRaining);
console.log(humidity);

getDataFromServer("https://jsonplaceholder.typicode.com/todos/1")
    .then((post) => console.log(post))
    .catch((err) => console.log(err));

console.log(DEFULT_SERVER);
console.log(MY_USERNAMW);
console.log(MY_PASSWORD);
