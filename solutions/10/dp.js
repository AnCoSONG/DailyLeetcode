/**
 * 从递归解法可以看出一些思路
 * * 每次递归时，我们传入s和p的子串 s和p的子串是否匹配决定了s和p是否匹配
 * * 因此定义状态为 dp[i][j] 表示s[:i] p[:j] 是否匹配 最终结果就是dp[0][0]是否为true
 * * 在每个位置的匹配时，需要分情况讨论
 * * (1) p[j] == . 匹配任意的 i++, j++ dp[i][j] = dp[i-1][j-1]
 * * (2) p[j] == s[i] 匹配 i++, j ++ dp[i][j] = dp[i-1][j-1]
 * * 即 p[j]!=="*"时, dp[i][j] = curMatch && dp[i-1][j-1]
 * ! (3) p[j] == '*' 需要带上前一个字符一起参与匹配 讨论两个情况：1. .*匹配 0 个 这个时候 dp[i][j] = dp[i][j-2] 2. 匹配多个 在p[j]与s[i]匹配的情况下, i ++ dp[i][j] = dp[i-1][j]
 * * p[j]=='*'时，dp[i][j] = dp[i][j-2] || (curMatch && dp[i-1][j])
 *
 * ? 这是一种自下而上的解法,原因是i和j是从0递增到最后的，最终dp[s.length][p.length]是结果的位置
 * ? 也可以有自上而下，即dp[i][j]表示s[i:]和p[j:]的匹配情况，这样反过来,dp[0][0]就是结果的位置
 * ? 另外
 * ? 数组的遍历，遍历了很多无用的节点，将DP和递归结合是否会起到更好的效果？
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    // 这里需要多加一行，原因是，后续匹配时会遇到J-2这种情况
    const dp = new Array(s.length+1).fill(0).map(i => new Array(p.length+1).fill(false))
    // 初始化第0行的情况 因为
    dp[0][0] = true // 空与空当然匹配
    dp[0][1] = false // 按规则，第一个不可能为*
    for(let i = 2; i <= p.length; i ++) {
        if(p[i-1] == "*") dp[0][i] = dp[0][i-2] // 这是在匹配空的情况，很重要
    }
    const match = (sc, pc) => {
        return sc == pc || pc == '.'
    }
    for(let i = 1; i <= s.length; i ++) {
        for(let j = 1; j <= p.length; j ++) {
            console.log(i, j, s[i-1], p[j-1])
            if (j > 0 && p[j-1] == '*') {
                dp[i][j] = dp[i][j-2] || (match(s[i-1], p[j-2]) && dp[i-1][j])
                console.log('\t * case', dp[i][j])
            } else {
                //正常匹配
                dp[i][j] = match(s[i-1], p[j-1]) && dp[i-1][j-1]
                console.log('\t normal case', dp[i][j])
            }
            
        }
    }

    console.log(dp)
    return dp[s.length][p.length]
    
}


console.log(isMatch("mississippi", "mis*is*i.*"))