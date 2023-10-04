import EventEmitter from "events";

const myEmitter = new EventEmitter();

const timeoutListenerFn = (secondsQty) => {
    console.log(`Timeout event in ${secondsQty} seconds!`);
};

myEmitter.on("timeout", timeoutListenerFn);

setTimeout(() => myEmitter.emit("timeout", 1), 1000);
setTimeout(() => myEmitter.emit("timeout", 2), 2000);

myEmitter.once("singlEvent", () => {
    console.log("Single event occurred");
});

//Listner function will be called only once!
setTimeout(() => myEmitter.emit("singlEvent"), 500);
setTimeout(() => myEmitter.emit("timesinglEventout"), 1500);

//Remove listner from the 'timeout' event
setTimeout(() => myEmitter.off("timeout", timeoutListenerFn), 3000);
setTimeout(() => myEmitter.emit("timeout", 4), 4000);
