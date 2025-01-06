function f(x) {
    console.log(x);
}

function delay(f, ms) {
    return function (...args) {
        setTimeout(f, ms, ...args);
    }
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test");
f1500("test");
