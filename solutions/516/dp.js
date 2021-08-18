/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
    // 动态规划
    // dp(str)表示str范围内的最长
    // dp(str) = max(\sum_i dp(str-i)) 即str的最长回文子序列 等于 删掉某个字符的最长回文子序列 
    // 超时
    const checkIfPalindrome = (str) => {
		const reversed = str.split("").reverse().join("")
		if (reversed == str) {
			return true
		}
		return false
	}
    const memo = {}
    const dp = (str) => {
        // console.log(memo)
        if (str.length == 0) {
            return 0
        }
        if (memo[str]!=undefined){
            // console.log('hit', str)
            return memo[str]
        }
        if (checkIfPalindrome(str)) {
            memo[str] = str.length
            return str.length
        }
        let curMaxLength = 0;
        for(let i = 0; i < str.length; i ++) {
            const curArr = str.split("")
			curArr.splice(i, 1)
			const newStr = curArr.join("")
            curMaxLength = Math.max(curMaxLength, dp(newStr))
        }
        // console.log(str, curMaxLength)
        memo[str] = curMaxLength
        return curMaxLength
    }

    return dp(s)
}

// 超时
let start = Date.now()
console.log(longestPalindromeSubseq("euazbipzncptldueeuechubrcourfpftcebikrxhybkymimgvldiwqvkszfycvqyvtiwfckexmowcxztkfyzqovbtmzpxojfofbvwnncajvrvdbvjhcrameamcfmcoxryjukhpljwszknhiypvyskmsujkuggpztltpgoczafmfelahqwjbhxtjmebnymdyxoeodqmvkxittxjnlltmoobsgzdfhismogqfpfhvqnxeuosjqqalvwhsidgiavcatjjgeztrjuoixxxoznklcxolgpuktirmduxdywwlbikaqkqajzbsjvdgjcnbtfksqhquiwnwflkldgdrqrnwmshdpykicozfowmumzeuznolmgjlltypyufpzjpuvucmesnnrwppheizkapovoloneaxpfinaontwtdqsdvzmqlgkdxlbeguackbdkftzbnynmcejtwudocemcfnuzbttcoew"))
console.log(Date.now() - start)