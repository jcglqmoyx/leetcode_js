/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    map = new Map([[')', '('], [']', '['], ['}', '{']])
    let stk = []
    for (let ch of s) {
        if (map.has(ch)) {
            if (!stk.length || stk[stk.length - 1] != map.get(ch)) return false
            else stk.pop()
        } else {
            stk.push(ch)
        }
    }
    return stk.length == 0
};