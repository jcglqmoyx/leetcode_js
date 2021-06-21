var bitCount = function (num) {
    let cnt = 0
    while (num) {
        if (num & 1 == 1) cnt++
        num >>= 1
    }
    return cnt
}
var readBinaryWatch = function (turnedOn) {
    res = []
    for (let h = 0; h <= 11; h++) {
        for (let m = 0; m <= 59; m++) {
            if (bitCount(h) + bitCount(m) == turnedOn) {
                res.push(h + ":" + (m < 10 ? "0" : "") + m);
            }
        }
    }
    return res
};