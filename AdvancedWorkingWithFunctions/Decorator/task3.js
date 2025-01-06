function f(x) {
    console.log(x);
}

function debounce(f, ms) {
    return function (...args) {
        setTimeout(f, ms, ...args);
    }
}

const debouncedF = debounce(f, 1000);

debouncedF('hello');
debouncedF('world');
