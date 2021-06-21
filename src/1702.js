/**
 * @param {string} binary
 * @return {string}
 */
var maximumBinaryString = function (binary) {
    let k = 0, n = binary.length
    while (k < n && binary.charAt(k) == '1') k++
    if (k == n) return binary
    let cnt = 0
    for (let i = k + 1; i < n; i++) if (binary.charAt(i) == '0') cnt++;
    binary = binary.split('')
    for (let i = 0; i < n; i++) binary[i] = '1'
    binary[k + cnt] = '0'
    return binary.join('')
};