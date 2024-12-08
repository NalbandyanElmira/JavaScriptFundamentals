function sumTo(n) {
    if (n === 0) {
        return 0;
    }
    return n + sumTo(n - 1);
}

function sumToIterative(n) {
    let sum = 0;
    for (let i = 0; i <= n; ++i) {
        sum += i;
    }
    return sum;
}
