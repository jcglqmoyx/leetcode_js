var permutation = function (s) {
    let res = []
    let n = s.length
    let arr = Array.from(s).sort()
    let used = []
    let cur = []
    let dfs = (arr, index) => {
        if (index === arr.length) {
            res.push(cur.toString())
            return
        }
        for (let i = 0; i < arr.length; i++) {
            if (used[i] || i > 0 && arr[i] == arr[i - 1] && !used[i - 1]) continue
            used[i] = true
            cur.push(arr[i])
            dfs(arr, index + 1)
            cur.pop()
            used[i] = false
        }
    }
    dfs(arr, 0)
    let size = res.length
    let resArray = new Array(size).fill(0)
    for (let i = 0; i < size; i++) {
        resArray[i] = res[i].split(',').join('')
    }
    return resArray
};