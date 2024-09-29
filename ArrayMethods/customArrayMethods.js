function at(arr, index) {
    if (index < 0) return arr[arr.length + index];
    return arr[index];
}

function concat(arr1, arr2) {
    const newArr = [];
    for (let item of arr1) {
        newArr.push(item);
    }
    for (let item of arr2) {
        newArr.push(item);
    }
    return newArr;
}

function fill(arr, val, start = 0, end = arr.length) {
    for (let i = start; i < end; ++i) {
        arr[i] = val;
    }
    return arr;
}

function find(array, func) {
    for (let i = 0; i < array.length; ++i) {
        if (func(array[i], i, array)) {
            return array[i];
        }
    }
    return undefined;
}

function findIndex(array, func) {
    for (let i = 0; i < array.length; ++i) {
        if (func(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}

function findLast(array, func) {
    for (let i = array.length - 1; i >= 0; --i) {
        if (func(array[i], i, array)) {
            return array[i];
        }
    }
    return undefined;
}

function findLastIndex(array, func) {
    for (let i = array.length - 1; i >= 0; --i) {
        if (func(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}

function lastIndexOf(array, val) {
    for (let i = array.length - 1; i >= 0; --i) {
        if (array[i] === val) {
            return i;
        }
    }
    return -1;
}

function pop(array) {
    if (array.length === 0) return undefined;
    const lastElement = array[array.length - 1];
    array.length--;
    return lastElement;
}

function push(array, newVal) {
    array[array.length] = newVal;
    return array.length;
}

function reverse(array) {
    for (let i = 0; i < array.length / 2; ++i) {
        let j = array.length - 1 - i;
        let val = array[i];
        array[i] = array[j];
        array[j] = val;
    }
    return array;
}

function shift(array) {
    if (array.length === 0) return undefined;

    const removedElement = array[0];

    for (let i = 1; i < array.length; ++i) {
        array[i - 1] = array[i];
    }

    array.length--;

    return removedElement;
}

function unshift(array, newVal) {
    array.length++;

    for (let i = array.length - 1; i > 0; --i) {
        array[i] = array[i - 1];
    }

    array[0] = newVal;

    return array.length;
}

function slice(array, start = 0,  end = array.length) {
    const newArray = [];
    if (start < 0) start = array.length + start;
    if (end < 0) end = array.length + end;
    for (let i = start; i < end; ++i) {
        newArray.push(array[i]);
    }
    return newArray;
}

function sort(array) {
    for (let i = 0; i < array.length; ++i) {
        for (let j = i + 1; j < array.length; ++j) {
            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

function splice(array, start, deleteCount, ...newValues) {
    const removedElements = [];
    const newArray = [];

    for (let i = 0; i < start; ++i) {
        newArray.push(array[i]);
    }

    for (let i = start; i < start + deleteCount; ++i) {
        removedElements.push(array[i]);
    }

    for (let i = 0; i < newValues.length; i++) {
        newArray.push(newValues[i]);
    }

    for (let i = start + deleteCount; i < array.length; ++i) {
        newArray.push(array[i]);
    }

    for (let i = 0; i < newArray.length; i++) {
        array[i] = newArray[i];
    }

    array.length = newArray.length;

    return removedElements;
}

function includes(array, val) {
    for (let item of array) {
        if (item === val) {
            return true;
        }
    }
    return false;
}

function indexOf(array, val, index = 0) {
    for (let i = index; i < array.length; ++i) {
        if (array[i] === val) {
            return i;
        }
    }
    return -1;
}

function join(array, char = ',') {
    let str = '';
    for (let i = 0; i < array.length; ++i) {
        str += array[i];
        if (i !== array.length -1)  str += char;
    }
    return str;
}

function forEach(array, func) {
    for (let i = 0; i < array.length; ++i) {
        func(array[i], i, array);
    }
}

function filter(array, func) {
    const newArr = [];
    for (let i = 0; i < array.length; ++i) {
        if (func(array[i], i, array)) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}

function map(array, func) {
    const newArr = [];
    for (let i = 0; i < array.length; ++i) {
        const transformedValue = func(array[i], i, array);
        newArr.push(transformedValue);
    }
    return newArr;
}

function reduce(array, func, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < array.length; ++i) {
        accumulator = func(accumulator, array[i], i, array);
    }
    return accumulator;
}
