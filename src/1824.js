/**
 * @param {number[]} obstacles
 * @return {number}
 */
var minSideJumps = function (obstacles) {
    let n = obstacles.length
    let f = new Array(n)
    for (let i = 0; i < n; i++) {
        f[i] = new Array(3)
        for (let j = 0; j < 3; j++) {
            f[i][j] = 1000000
        }
    }
    f[0][0] = 1
    f[0][2] = 1
    f[0][1] = 0
    for (let i = 1; i < n; i++) {
        if (obstacles[i] != 1) f[i][0] = f[i - 1][0]
        if (obstacles[i] != 2) f[i][1] = f[i - 1][1]
        if (obstacles[i] != 3) f[i][2] = f[i - 1][2]
        if (obstacles[i] != 1) f[i][0] = Math.min(f[i][0], Math.min(f[i][1], f[i][2]) + 1)
        if (obstacles[i] != 2) f[i][1] = Math.min(f[i][1], Math.min(f[i][0], f[i][2]) + 1)
        if (obstacles[i] != 3) f[i][2] = Math.min(f[i][2], Math.min(f[i][0], f[i][1]) + 1)
    }
    return Math.min(f[n - 1][0], Math.min(f[n - 1][1], f[n - 1][2]))
};