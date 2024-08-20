function pow(a, n) {
    if (n === 0) return 1;
    if (n === 1) return a;
    let result = 1;
    for (let i = 1; i <=n ; ++i) {
        result *= a;
    }
    return result;
}