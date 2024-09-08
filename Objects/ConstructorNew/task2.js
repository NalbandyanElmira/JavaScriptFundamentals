function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        let input;
        do {
            input = +prompt('Write number', '');
        } while (isNaN(input));
        this.value += input;
    }
}
