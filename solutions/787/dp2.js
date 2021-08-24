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
     * * dp.js其实还是慢，因为你要反复的去创建arr和使用arr数组（邻接数组）
     * * 有一种更好的思路是，直接对flights的可能情况进行优化
     * * 这里的k代表着走k步到达dst
     * * 这个dp很巧妙
     * * dp[dst][0]，col=1时，只有一步走到dst的节点才会被更新，即flight[1]==dst的节点才能更新，因为dp[dst][0]=0，其他的都是无穷
     * * col=2时，就只用到前一列的结果
     */

    const dp = new Array(n).fill(0).map(i => new Array(k+2).fill(Number.MAX_SAFE_INTEGER))
    
    dp[dst][0] = 0 // dst到dst需要0步
    for(let col = 1; col <= k + 1; col ++) {
        for(const flight of flights) {
            // console.log('prcess', flight, col)
            dp[flight[0]][col] = Math.min(dp[flight[0]][col], dp[flight[1]][col-1] + flight[2])
            // console.log(dp)
        }
    }
    const res = Math.min(...dp[src])
    return res == Number.MAX_SAFE_INTEGER?-1:res
}

console.log(findCheapestPrice(3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 1))