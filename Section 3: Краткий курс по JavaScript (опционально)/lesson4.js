const myFunction = (a, b) => {
    let c
    a = a + 1
    c = a + b
    return c
}

console.log(myFunction(14,5));

// callBack

function name(){
    console.log('Sergii');
}

setTimeout(name,1000)