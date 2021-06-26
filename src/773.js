var slidingPuzzle = function (board) {
    var getStatus = function (a) {
        let res = ''
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 3; j++) {
                res += a[i][j] + ''
            }
        }
        return res
    }

    let target = '123450'
    if (getStatus(board) == target) return 0

    dist = new Map()
    dist.set(getStatus(board), 0)

    let dx = [0, 1, 0, -1], dy = [1, 0, -1, 0]
    queue = [board]
    while (queue.length > 0) {
        t = queue.shift()
        let x = -1, y = -1
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 3; j++) {
                if (t[i][j] === 0) {
                    x = i
                    y = j
                    break
                }
            }
        }
        for (let i = 0; i < 4; i++) {
            let a = x + dx[i], b = y + dy[i]
            if (a < 0 || a == 2 || b < 0 || b == 3) continue
            let r = new Array(2)
            for (let row = 0; row < 2; row++) {
                r[row] = new Array(3)
                for (let col = 0; col < 3; col++) {
                    r[row][col] = t[row][col]
                }
            }
            let tmp = r[x][y]
            r[x][y] = r[a][b]
            r[a][b] = tmp
            let status = getStatus(r)
            if (!dist.has(status)) {
                dist.set(status, dist.get(getStatus(t)) + 1)
                if (status == target) return dist.get(status);
                queue.push(r)
            }
        }
    }
    return -1
};