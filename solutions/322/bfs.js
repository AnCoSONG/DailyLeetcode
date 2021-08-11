/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    // 暴力，速度慢，因为要一直遍历到有结果为止，但是一定可以找到结果
    // n 为层数，搜索数量为2^n ，如果需要20步，就得搜2^20 时间复杂度过分高
    coins.sort((a, b) => b - a)
    q = [{ amount, used: 0 }];
    while (q.length != 0) {
        const cur = q.shift();
        console.log(cur)
        if (cur.amount == 0) {
            return cur.used
        }
        for (const way of coins) {
            if (cur.amount < way) {
                // 比如要找1，但是该硬币面额是3，那么就跳过
                continue;
            } else { // 如果amount >= way，那就继续找
                q.push({ amount: cur.amount - way, used: cur.used + 1 });
            }
        }
    }
    return -1;
};

console.log(coinChange([1, 2, 5], 11)); 
// console.log(coinChange([2], 3));
// console.log(coinChange([1], 0));
// console.log(coinChange([1], 1));
// console.log(coinChange([1], 2));
// console.log(coinChange([1, 2, 5], 100));
// console.log(coinChange([186,419,83,408], 6249));
