/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function (s) {
    let res = 0, len = s.length
    let set = new Set()

    function dfs(index) {
        if (index == s.length) {
            res = Math.max(res, set.size)
            return
        }
        for (let len = 1; index + len <= s.length; len++) {
            let sub = s.substr(index, len)
            if (set.has(sub)) continue
            set.add(sub)
            dfs(index + len)
            set.delete(sub)
        }
    }

    dfs(0)
    return res
};