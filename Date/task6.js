function getSecondsToday() {
    const date = new Date();
    const today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    return (date - today) / 1000;
}

console.log(getSecondsToday());
