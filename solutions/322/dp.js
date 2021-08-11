/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    // DP
    // F(amount) = F(amount - way) + 1
    const memo = new Array(amount + 1).fill(0)
    coins.sort((a, b) => b - a)
    const dp = (amount) => {
        if (amount == 0) {
            return 0;
        }
        if (memo[amount] !== 0) return memo[amount]
        let curMinStep = Number.MAX_SAFE_INTEGER
        for (const coin of coins) {
            if (coin <= amount) {
                curMinStep = Math.min(curMinStep, dp(amount - coin) + 1)
            }
            // 如果没个coin > amount， 那curMinStep肯定是原始值
        }
        memo[amount] = curMinStep; // 如果遇到coin > amount的情况，curMinStep就会保持MAX_SAFE_INTEGER，这就保证Math.min(cur, dp)的结果不会错
        return curMinStep;
    }
    const res = dp(amount)
    return res == Number.MAX_SAFE_INTEGER ? -1 : res;
};

console.log(coinChange([1, 2, 5], 63))
console.log(coinChange([2], 1))
console.log(coinChange([186, 419, 83, 408], 6249))