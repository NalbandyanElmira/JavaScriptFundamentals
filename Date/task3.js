let date = new Date(2012, 0, 3);

function getLocalDay(date) {
    const days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    const day = date.getDay();
    return days[day];
}

console.log(getLocalDay(date));
