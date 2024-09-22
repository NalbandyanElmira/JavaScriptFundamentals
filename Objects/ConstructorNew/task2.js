function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        let input;
        while (true) {
            input = prompt('Write a number', '');
            if (isNaN(input)) {
                break;
            }
            this.value += +input;
        }
    };
}
