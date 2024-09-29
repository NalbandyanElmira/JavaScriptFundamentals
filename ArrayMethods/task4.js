function numericSort(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
}

function sortInDecreasingOrder(arr) {
    arr.sort(numericSort);
    arr.reverse();
}

function sortInDecreasingOrder2(arr) {
    arr.sort((a,b) => b - a);
}
