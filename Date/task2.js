let date = new Date(2024, 9, 20);

function getWeekDay(date) {
    const days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    const day = date.getDay();
    return days[day];
}

console.log(getWeekDay(date));
