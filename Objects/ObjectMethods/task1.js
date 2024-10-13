const calculator = {
    read() {
        this.a = +prompt('Write first number', '');
        this.b = +prompt('Write second number', '');
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};
