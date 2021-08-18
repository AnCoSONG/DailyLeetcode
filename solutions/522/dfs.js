/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function (n) {
    /**
     * 
     * 记忆化搜索
     */
    const mod = 1e9 + 7
	const map = new Map()
	const dfs = (idx, a_num, l_last) => {
		if (idx == n) {
			return 1 // 可行解
		}

		if (map.has(idx * 1e5 + a_num * 10 + l_last))
			return map.get(idx * 1e5 + a_num * 10 + l_last)

		let curCount = 0
		// 进入P路径
		curCount += dfs(idx + 1, a_num + 0, 0)
		curCount %= mod
		//进入A路径
		if (a_num !== 1) {
			curCount += dfs(idx + 1, a_num + 1, 0)
			curCount %= mod
		}
		// 进入L路径
		if (l_last !== 2) {
			curCount += dfs(idx + 1, a_num + 0, l_last + 1)
			curCount %= mod
		}
		map.set(idx * 1e5 + a_num * 10 + l_last, curCount)
		return curCount
	}

	return dfs(0, 0, 0)
}

let start = Date.now()
console.log(checkRecord(5))
console.log(Date.now() - start)