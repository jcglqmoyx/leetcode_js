var reverse = function (x) {
    let isNegative = false
    if (x < 0) {
        isNegative = true
        x = -x
    }
    let res = 0
    while (x !== 0) {
        res = res * 10 + x % 10
        x = ~~(x / 10)
    }
    if (res < -Math.pow(2, 31) || res > Math.pow(2, 31) - 1) {
        return 0
    }
    return isNegative ? -res : res;
};