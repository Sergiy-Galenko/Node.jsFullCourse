const fs = require('fs')

console.log('Programm start');

setTimeout(() => console.log('Timeout 1'),0)

setTimeout(() => console.log('Timeout 2'),10)

fs.writeFile('./test.txt','Hello Node.js', () => console.log('File written'))
Promise.resolve().then(() => console.log('Promise 1'))

process.nextTick(() => console.log('Next tick 1'))


console.log('Programm end');