function Calculator() {
    this.read = function() {
        this.a = +prompt('Write first number', '');
        this.b = +prompt('Write second number', '');
    };
    this.sum = function() {
        return this.a + this.b;
    };
    this.mul = function() {
        return this.a * this.b;
    };
}