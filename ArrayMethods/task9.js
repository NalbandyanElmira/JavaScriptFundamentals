function numericSort(a, b) {
    if (a.age > b.age) return 1;
    if (a.age < b.age) return -1;
    return 0;
}

function sortByAge(users) {
    users.sort(numericSort);
}

function sortByAge2(users) {
    users.sort((a, b) => a.age - b.age);
}
