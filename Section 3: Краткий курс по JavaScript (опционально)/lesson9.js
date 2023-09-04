// Промис - это обещания предоставить результат позже 
const myPromise = new Promise((resolve, reject) => {

})

myPromise.then(velue => {

})

myPromise.catch(error => {
    
})

//fatch
fatch('url')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error(error))

//async / await

const asyncFn = async() =>{
    await Promise
}

asyncFn()