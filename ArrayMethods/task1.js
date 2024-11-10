function camelize(str) {
    const arr = str.split('-');
    const result = arr.map((item, index) =>
        index === 0 ? item : item[0].toUpperCase() + item.slice(1)
    );
    return result.join('');
}
