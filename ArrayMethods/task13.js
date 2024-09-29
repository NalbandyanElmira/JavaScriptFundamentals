function groupById(arr) {
    return arr.map(item => ({
        [item.id]: item,
    }));
}
