function sumInput() {
    const array = [];
    let value;
    while (true) {
        value = prompt('Input number', '');
        if (value === null || value === '' || !isFinite(value)) {
            break;
        }
        array.push(+value);
    }

    let sum = 0;

    for (let num of array) {
        sum += num;
    }

    alert(`Sum: ${sum}`);
    return sum;
}
