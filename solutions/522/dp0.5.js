/**
 * @param {number} n
 * @return {number}
 */
 var checkRecord = function (n) {
	const mod = 1e9 + 7
    // 构建nX2x3的矩阵
    const dp = new Array(n).fill(0).map(i => new Array(2).fill(0).map(i => new Array(3).fill(0)))
    // 初始化一些结果
    dp[0][0][0] = 1 // "P"
    dp[0][1][0] = 1 // "A"
    dp[0][0][1] = 1 // "L"
    
    // 遍历和状态转移
    for(let i = 1; i < n; i ++) {
        // 选择P，无A
        dp[i][0][0] = (dp[i-1][0][0] + dp[i-1][0][1] + dp[i-1][0][2]) % mod
        // 选择P，有A
        dp[i][1][0] = (dp[i-1][1][0] + dp[i-1][1][1] + dp[i-1][1][2]) % mod
        // 选择A
        dp[i][1][0] += dp[i-1][0][0] + dp[i-1][0][1] + dp[i-1][0][2]
        dp[i][1][0] %= mod
        
        // 选择L
        dp[i][0][1] = dp[i-1][0][0] // 前一个状态无L
        dp[i][0][2] = dp[i-1][0][1] // 前一个状态有一个L
        dp[i][1][1] = dp[i-1][1][0] // 前一个状态有一个A，没有L
        dp[i][1][2] = dp[i-1][1][1] // 前一个状态有一个A，有一个L
        
    }
    let ans = 0
    // 遍历dp[n-1][:][:]
    for(let i = 0; i < 2; i ++) {
        for(let j = 0; j < 3; j ++) {
            ans = (ans + dp[n-1][i][j])%mod
        }
    }
    return ans
}

let start = Date.now()
console.log(checkRecord(10))
console.log(Date.now() - start)