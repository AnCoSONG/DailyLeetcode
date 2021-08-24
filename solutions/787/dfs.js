/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
	// 拿到邻接表
	const arr = new Array(n).fill(0).map((i) => new Array(n).fill(-1))
	for (const flight of flights) {
		arr[flight[0]][flight[1]] = flight[2]
	}
	const memo = new Map()
	const dfs = (cur, k) => {
		if (cur == dst) return 0 // 如果已经走到dst 就直接返回0
		if (k < 0) {
			// k < 0 说明什么？说明当前已经超过找寻次数了，返回一个大数来保证当前路径不会被考虑
			return Number.MAX_SAFE_INTEGER
		}
		if (memo.has((cur + 1) * 100 + k)) return memo.get((cur + 1) * 100 + k)
		let curMin = Number.MAX_SAFE_INTEGER
		for (let i = 0; i < n; i++) {
			if (arr[cur][i] !== -1) {
				curMin = Math.min(curMin, arr[cur][i] + dfs(i, k - 1))
			}
		}
		memo.set((cur + 1) * 100 + k, curMin)
		return curMin
	}
	const res = dfs(src, k)
	return res == Number.MAX_SAFE_INTEGER ? -1 : res
}
