function getMaxSubSum(arr) {
    let curSum = 0;
    let sum = -Infinity;
    for (let num of arr) {
        if (curSum < 0) {
            curSum = num;
        }
        else {
            curSum += num;
        }
        sum = Math.max(sum, curSum);
    }
    return sum;
}
