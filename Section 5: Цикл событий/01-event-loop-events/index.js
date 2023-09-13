const fs = require('fs');
const dns = require('dns');

function info(text) {
    console.log(text, performance.now().toFixed(2));
}

console.log('Program start');

setTimeout(() => info('Timeout 1'), 0);

setTimeout(() => {
    process.nextTick(() => info('Next tick 2'))
    info('Timeout 2')
}, 10);

fs.writeFile('./test.txt', 'Hello Node.js', () => info('File written'));

Promise.resolve().then(() => info('Promise 1'));

process.nextTick(() => info('Next tick 1'));

setImmediate(() => info('Immediate 1'));

//interval
let intervalCount = 1;
const intervalID = setInterval(() => {
    info(`Interval ${intervalCount +=1 }`)
    if(intervalCount === 2) clearInterval(intervalID)
}, 10)



// I/O Events
dns.lookup('google.com', (err, address, family) => {
    info('DNS 1 google.com', address);
    Promise.resolve().then(() => info('Promise 2'));
    process.nextTick(() => info('Next tick 3'));
})

console.log('Program end');
