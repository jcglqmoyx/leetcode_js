/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function (grid) {
    q = []
    let n = grid.length, m = grid[0].length
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] == 1) {
                q.push([i, j])
            }
        }
    }
    if (q.length == n * m || q.length == 0) return -1
    let dx = [0, 1, 0, -1], dy = [1, 0, -1, 0]
    let res = 0
    while (q.length !== 0) {
        let flag = false
        for (let idx = q.length; idx > 0; idx--) {
            let [x, y] = q.shift()
            for (let i = 0; i < 4; i++) {
                let a = x + dx[i], b = y + dy[i]
                if (a >= 0 && a < n && b >= 0 && b < m && grid[a][b] == 0) {
                    grid[a][b] = 1
                    q.push([a, b])
                    flag = true
                }
            }
        }
        if (flag) res++
    }
    return res
};