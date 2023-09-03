const isArra = [1,2,3,4];
console.log(isArra);
console.log(isArra.length);

isArra[2] = 'abc'
console.log(isArra);
console.log(isArra[2]);

// push

const myNewArray = [1,2,3,4]
myNewArray.push(5);
console.log(myNewArray);
myNewArray.push(true);
console.log(myNewArray);

// pop 

const newArra = [1,2,3]
console.log(newArra);
newArra.pop();
console.log(newArra);

const pupElemt = newArra.pop();
console.log(pupElemt);
console.log(newArra);


// map

const myArray = [1,2,3];
console.log(myArray);

const newArray = myArray.map(elm => elm * 2);
console.log(newArray);
console.log(myArray);