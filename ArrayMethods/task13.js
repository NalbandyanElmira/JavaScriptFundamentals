function groupById(arr) {
    return arr.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
    }, {});
}
