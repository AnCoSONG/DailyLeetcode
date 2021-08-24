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
     * 
     * * 对dp2.js进行进一步优化，可以看到k列只与k-1列有关，因此可以缩小空间
     */

    const dp = new Array(2).fill(0).map(i => new Array(n).fill(Number.MAX_SAFE_INTEGER))
    
    dp[0][dst] = 0 // dst到dst需要0步
    for(let row = 1; row <= k + 1; row ++) {
        const last = dp.shift()
        for(const flight of flights) {
            dp[0][flight[0]] = Math.min(dp[0][flight[0]], last[flight[1]] + flight[2])
        }
        dp.push(last)
    }
    console.log(dp)
    const res = Math.min(dp[0][src], dp[1][src])
    return res == Number.MAX_SAFE_INTEGER?-1:res
}

console.log(findCheapestPrice(3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 1))
