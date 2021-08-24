/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
	//! 原始思路 无法解决 aab c*a*b这种匹配问题
	// 到最后，squeue和pqueue都应该为空
	let si = 0
	let pi = 0
	let last = ""
	const matchMain = (schar, pchar) => {
		// 1 s: a p: a
		// 2 s: a p: * last: a
		// 3 s: a p: .
		// 这里只讨论1,3
		if (schar == pchar || pchar == ".") {
			return true
		}
		return false
	}
	// while(squeue.length !== 0) {
	while (si !== s.length) {
		if (p[pi] == "*") {
			console.log(s[si], last)
			// last如果为空,则没有前一个无法匹配
			if (last == "") return false // 如果前一个为空，说明只有*那么就不能匹配
			if (matchMain(s[si], last)) {
				// 说明匹配到了
				si++
				continue // 循环继续
			} else {
				// 说明last*没有匹配到，但是*可能是0个，所以需要看后一个是否匹配
				last = p[pi] // pi变更前更新last
				pi++
				continue
			}
		} else {
			// 当p[pi]不为*
			if (matchMain(s[si], p[pi])) {
				// 正常匹配那就继续
				si++
				last = p[pi]
				pi++
				continue
			} else {
				// 没有正常匹配
				return false
			}
		}
	}
	console.log(si, pi)
	// 匹配完对pattern剩余串进行验证, 如果剩余串有明确的字符匹配，无*
	const lastparr = p.slice(p[pi] == "*" ? pi + 1 : pi).split("")
	const stack = []
	while (lastparr.length !== 0) {
		const char = lastparr.shift()
		if (stack.length == 0) {
			stack.push(char)
		} else {
			if (char == "*") {
				stack.pop()
			} else {
				break
			}
		}
	}
	console.log(stack)
	return stack.length == 0
}
