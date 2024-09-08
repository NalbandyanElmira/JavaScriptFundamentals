function readNumber() {
    let input;
    do {
        input = prompt('Input number', '');
        if (input === 'CANCEL' || input === '') {
            return null;
        }
        input = +input;
    } while(isNaN(input));
    return input;
}
