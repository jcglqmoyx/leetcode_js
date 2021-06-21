/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var rearrangeSticks = function (n, k) {
    const MOD = 1000000007
    let f = new Array(n + 1)
    for (let i = 0; i < n + 1; i++) {
        f[i] = new Array(k + 1)
        for (let j = 0; j < k + 1; j++) {
            f[i][j] = 0
        }
    }
    f[0][0] = 1
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= k; j++) {
            f[i][j] = (f[i - 1][j - 1] + (i - 1) * f[i - 1][j]) % MOD
        }
    }
    return f[n][k]
};