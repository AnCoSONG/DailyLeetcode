/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
    // 动态规划思路2：
    // dp[i][j] 表示i, j 范围内的最长回文字符串
    // 状态转移
    // 如果i == j, dp[i][j] = dp[i+1][j-1] + 2
    // 如果i != j, dp[i][j] = max(dp)

    const n = s.length;
    const dp = new Array(n).fill(0).map(i => new Array(n).fill(0))
    // 倒三角遍历
    for(let i = n - 1; i >= 0; i --) {
        dp[i][i] = 1
        for(let j = i + 1; j < n; j ++ ){ // j从i的后一个开始， (i, j) -> (i, x1, j) -> (i, x1, x2, j)
            if (s[i] == s[j]) { // i, j 相等 (i, x1, j)
                dp[i][j] = dp[i+1][j-1] + 2
            } else {
                dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1])
            }
        }
    }
    return dp[0][n-1]
}

let start = Date.now()
console.log(longestPalindromeSubseq("euazbipzncptldueeuechubrcourfpftcebikrxhybkymimgvldiwqvkszfycvqyvtiwfckexmowcxztkfyzqovbtmzpxojfofbvwnncajvrvdbvjhcrameamcfmcoxryjukhpljwszknhiypvyskmsujkuggpztltpgoczafmfelahqwjbhxtjmebnymdyxoeodqmvkxittxjnlltmoobsgzdfhismogqfpfhvqnxeuosjqqalvwhsidgiavcatjjgeztrjuoixxxoznklcxolgpuktirmduxdywwlbikaqkqajzbsjvdgjcnbtfksqhquiwnwflkldgdrqrnwmshdpykicozfowmumzeuznolmgjlltypyufpzjpuvucmesnnrwppheizkapovoloneaxpfinaontwtdqsdvzmqlgkdxlbeguackbdkftzbnynmcejtwudocemcfnuzbttcoew"))
console.log(Date.now() - start)
