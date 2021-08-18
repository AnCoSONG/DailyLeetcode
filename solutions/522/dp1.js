/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function (n) {
	const mod = 1e9 + 7
    /**
     * DP
     * dp[i][acnt][lcnt] 表示第i个位置，acnt个A和lcnt个L
     */
    const dp = new Array(2).fill(0).map(i => new Array(2).fill(0).map(i => new Array(3).fill(0)))
    // 只需要前一个 因此长度为2即可
    
    dp[0][0][0] = 1 // "P"
    dp[0][1][0] = 1 // "A"
    dp[0][0][1] = 1 // "L"
    for(let i = 1; i < n; i ++) {
        const last = dp.shift() // 拿到上一个结果，因为当前的结果只与上一个状态有关
        // console.log(last)
        // 当前位置选择P，无A
        dp[0][0][0] = (last[0][0] + last[0][1] + last[0][2]) % mod // 有L无所谓，当前位置是P所以L_last清0
        // 当前位置选P，有一个A
        dp[0][1][0] = (last[1][0] + last[1][1] + last[1][2]) % mod // 前一个必须有A，L无所谓
        //当前位置选A，状态是有一个A，说明之前的状态里不能有A
        dp[0][1][0] += (last[0][0] + last[0][1] + last[0][2])
        dp[0][1][0] %= mod

        // 当前位置选L, 最终状态是1个L或者2个L，前一个状态是0个L或者1个L
        dp[0][0][1] = last[0][0] // 前一个状态无L
        dp[0][0][2] = last[0][1] // 前一个状态有一个L
        dp[0][1][1] = last[1][0] // 前一个状态有一个A，没有L
        dp[0][1][2] = last[1][1] // 前一个状态有一个A，有一个L
        // dp.push(new Array(2).fill(0).map(i => new Array(3).fill(0))) // 将新的空数组push进去
        dp.push(last) //* 改进: 将上一个push进去，覆盖掉了就行
    }
    const lastState = dp.shift() // 前一个就是结果数组
    let res = 0
    // 最终结果
    for(let i = 0; i < 2; i ++) {
        for(let j = 0; j < 3; j ++) {
            res += lastState[i][j]
            res %= mod
        }
    }
    // console.log(lastState)
    return res
}

let start = Date.now()
console.log(checkRecord(10101))
console.log(Date.now() - start)
