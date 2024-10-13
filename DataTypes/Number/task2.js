function readNumber() {
    let input;
    do {
        input = prompt('Input number', '');
        if (input === null || input === '') {
            return null;
        }
        input = +input;
    } while(isNaN(input));
    return input;
}
