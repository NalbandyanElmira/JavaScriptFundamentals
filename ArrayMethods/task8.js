function mappedObject(arr) {
    return arr.map(item => ({
        fullName: item.name + ' ' + item.surname,
        id: item.id,
    }));
}
