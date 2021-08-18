/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
	//超时
	const checkIfPalindrome = (str) => {
		const reversed = str.split("").reverse().join("")
		if (reversed == str) {
			return true
		}
		memo[str] == false
		return false
	}
	// BFS
	const memo = {}
	const q = []
	let longestLen = 0
	q.push(s)
	while (q.length > 0) {
		const cur = q.shift()
		if (memo[cur] || checkIfPalindrome(cur)) {
			longestLen = Math.max(longestLen, cur.length)
			break
		}
		for (let i = 0; i < cur.length; i++) {
			// 删掉每个位置
			const curArr = cur.split("")
			curArr.splice(i, 1)
			const newStr = curArr.join("")
			q.push(newStr)
		}
	}

	return longestLen
}
