function printNumbersWithInterval(from, to) {
    let curNum = from;
    let timerId = setInterval(function () {
        console.log(curNum);
        if (curNum >= to) {
            clearInterval(timerId);
        }
        curNum++;
    }, 1000
    );
}

printNumbersWithInterval(12, 20);

function printNumbersWithTimeout(from, to) {
    let curNum = from;
    setTimeout(function print() {
        console.log(curNum);
        if (curNum < to) {
            setTimeout(print, 1000);
        }
        curNum++;
    }, 1000
    );
}

printNumbersWithTimeout(2, 8);
