function formatDate(date) {
    const now = new Date();
    const difference = now - date;
    if (difference < 1000) {
        return 'right now';
    } else if (difference / 1000 < 60) {
        return `${difference / 1000} seconds ago`;
    } else if (difference < 1000 * 60 * 60) {
        return `${difference / 60000} minutes ago`;
    }
    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
}


console.log( formatDate(new Date(new Date - 1)) );

console.log( formatDate(new Date(new Date - 30 * 1000)) );

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) );

console.log( formatDate(new Date(new Date - 86400 * 1000)) );
