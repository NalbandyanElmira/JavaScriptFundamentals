function Calculator() {
    this.methods = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    }
    this.calculate = function(str) {
        const arr = str.split(' ');
        let a = +arr[0];
        let b = +arr[2];
        let operator = arr[1];
        if (operator in this.methods) {
            return this.methods[operator](a, b);
        }
        return null;
    }
    this.addMethod = function(name, newFunction) {
        this.methods[name] = newFunction;
    }
}
