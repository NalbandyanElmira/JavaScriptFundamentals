let date = new Date(2024, 9, 20);

function getDateAgo(date, day) {
    date.setDate(date.getDate() - day);
    return date.getDate();
}

console.log(getDateAgo(date, 1));
console.log(getDateAgo(date, 2));
console.log(getDateAgo(date, 365));
