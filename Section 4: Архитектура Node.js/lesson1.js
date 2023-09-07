// Блокируйщая оперпция в node.js
const fs = require('fs');

const data = fs.readFileSync('./test.txt', 'utf-8');
console.log('File reading finished');

console.log('Continue....');

// неблокируйщая операция в node.js

const fs = require('fs');

fs.readFile('./test.txt', 'utf-8', (err, data) =>{
    if(!err){
        console.log('File reading finished');
    }
})
console.log('Continue....');