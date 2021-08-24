/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
    /**
     * dp[i][k] 表示第I个节点最多k个中间点到达dst的最小花费
     * dp[i][0] = 100 表示i和dst相邻(间隔0个节点)，花费100
     * dp[i][k] = Min(dp[i][k], arr[i][j] + dp[j][k-1]) 转移方程，要对所有的j都遍历
     * 初始化 与dst相邻的节点 初始化为dp[i][0..k] = 价格，其他为任一large number
     * 举个例子
     * * [[0,1,100],[1,2,100],[0,2,500]] k = 1 src=0 dst=2
     * * 初始 dp[1][0..1]=100 dp[0][0..1] = 500 dp = [[500, 500], [100, 100], [large, large]]
     * * 最终 求dp[0]的所有可能取最小
     * * dp[0][1] = Min(dp[0][1], arr[0][1] + dp[1][0], arr[0][2]+dp[2][0]) = 100+100 = 200
     * * dp[0][0] = 500 dp[0][1] = 200 min = 200
     */

    const dp = new Array(n).fill(0).map(i => new Array(k+1).fill(Number.MAX_SAFE_INTEGER))
    const arr = new Array(n).fill(0).map(i => new Array(n).fill(Number.MAX_SAFE_INTEGER))
    for(const flight of flights) {
        arr[flight[0]][flight[1]] = flight[2]
        if(flight[1] == dst) {
            dp[flight[0]][0] = flight[2]
        }
    }
    // console.log(arr)
    // console.log(dp)
    let flag = false
    for(let col = 1; col < k+1; col ++) {
        for(let i = 0; i < n; i ++) { // 对i, k
            for(let j = 0; j < n; j ++) { // 其他的j
                if(arr[i][j]!==Number.MAX_SAFE_INTEGER) {
                    dp[i][col] = Math.min(dp[i][col], arr[i][j] + dp[j][col-1])
                }
            }
            if(i==src && col == k) { // 当i=src且col=k时表示当前该求的已经求完了
                console.log('提前break')
                flag = true
                break
            }
        }
        if(flag) {
            break
        }
    }
    
    // console.log(dp)
    const res = Math.min(...dp[src])
    return res == Number.MAX_SAFE_INTEGER?-1:res
}

console.log(findCheapestPrice(3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 2))
