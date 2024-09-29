function filterRange1(arr, a, b) {
    const newArray = [];
    for (let item of arr) {
        if (item >= a && item <= b) {
            newArray.push(item);
        }
    }
    return newArray;
}

function filterRange2(arr, a, b) {
    return arr.filter(item => item >= a && item <= b);
}
