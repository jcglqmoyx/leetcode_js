/**
 * @param {number[]} stones
 * @return {number}
 */
var stoneGameVIII = function (stones) {
    let n = stones.length
    sum = new Array(n)
    for (let i = 0; i < n; i++) {
        if (i == 0) sum[i] = stones[i];
        else sum[i] = sum[i - 1] + stones[i]
    }
    f = new Array(n)
    f[n - 1] = sum[n - 1]
    for (let i = n - 2; i > 0; i--) {
        f[i] = Math.max(f[i + 1], sum[i] - f[i + 1])
    }
    return f[1]
};