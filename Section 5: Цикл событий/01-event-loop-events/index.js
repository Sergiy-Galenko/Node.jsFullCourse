const fs = require('fs');
const dns = require('dns');

function timestamp() {
    return performance.now().toFixed(2);
}

console.log('Program start');

setTimeout(() => console.log('Timeout 1', timestamp()), 0);

setTimeout(() => {
    process.nextTick(() => console.log('Next tick 2', timestamp()))
    console.log('Timeout 2', timestamp())
}, 10);

fs.writeFile('./test.txt', 'Hello Node.js', () => console.log('File written'));

Promise.resolve().then(() => console.log('Promise 1', timestamp()));

process.nextTick(() => console.log('Next tick 1'));

setImmediate(() => console.log('Immediate 1', timestamp()));

//interval
let intervalCount = 1;
const intervalID = setInterval(() => {
    console.log(`Interval ${intervalCount +=1 }`, timestamp())
    if(intervalCount === 2) clearInterval(intervalID)
}, 10)



// I/O Events
dns.lookup('google.com', (err, address, family) => {
    console.log('DNS 1 google.com', address, timestamp());
    Promise.resolve().then(() => console.log('Promise 2', timestamp()));
    process.nextTick(() => console.log('Next tick 3', timestamp()));
})

console.log('Program end');
