/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLocaleLowerCase().match(/[a-z0-9]+/g)
    if (!s) return true
    s = s.join('')
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        if (s[i] != s[j]) return false
    }
    return true
};