/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
    let start = '0000'
    if (start == target) return 0
    dead = new Set();
    for (let d of deadends) dead.add(d)
    let dist = new Map()
    dist.set(start, 0)
    if (dead.has(start)) return -1
    let q = [start]
    while (q.length) {
        let t = q.shift()
        for (let i = 0; i < t.length; i++) {
            for (let j = -1; j <= 1; j += 2) {
                let ch = t[i]
                ch = (parseInt(ch) + j + 10) % 10 + ''
                let s = t.substr(0, i) + ch + t.substr(i + 1, t.length - i - 1)
                if (!dead.has(s) && !dist.has(s)) {
                    dist.set(s, dist.get(t) + 1)
                    if (s == target) return dist.get(s)
                    q.push(s)
                }
            }
        }
    }
    return -1
};