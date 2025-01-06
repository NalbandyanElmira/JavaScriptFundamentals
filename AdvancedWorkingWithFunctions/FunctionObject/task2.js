function sum(a) {
    let s = a; // Start with the initial value `a`

    function sum2(b) {
        s += b; // Accumulate the sum
        return sum2; // Return the same function to allow chaining
    }

    sum2.toString = () => s; // Define a `toString` method to return the result
    return sum2; // Return the function for chaining
}

console.log(+sum(1)(2)); // 3
console.log(+sum(1)(5)(8)); // 14
