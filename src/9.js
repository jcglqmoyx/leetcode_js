var isPalindrome = function (x) {
    if (x < 0) return false
    if (x > 0 && x % 10 == 0) return false
    let y = 0
    while (x > y) {
        y = y * 10 + x % 10
        x = ~~(x / 10)
    }
    return x == ~~(y / 10) || x == y
};