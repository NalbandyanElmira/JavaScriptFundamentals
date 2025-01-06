function getSecondsToTomorrow() {
    const date = new Date();
    const tomarrow = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    return (tomarrow - date) / 1000;
}

console.log(getSecondsToTomorrow());
