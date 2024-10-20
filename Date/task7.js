function getSecondsToTomorrow() {
    const date = new Date();
    let tomarrow = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    return (tomarrow - date) / 1000;
}

console.log(getSecondsToTomorrow());
