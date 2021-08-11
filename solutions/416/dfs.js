/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    const sum = nums.reduce((total, cur) => total + cur, 0)
    if (sum % 2 !== 0) {
        // 和是奇数肯定不行
        return false;
    }
    const target = sum/2

    if (Math.max(...nums) > target) {
        return false;
    }

    // 另一种DP
    // 从左往右，根据选不选择当前第i个元素可以分成两类（选 或 不选）
    // DP(i) = DP(i-1) + nums[i] || DP(i-1)
    const memo = {}
    const dfs = (curSum, i) => {
        if(i == nums.length || curSum > target){
            return false; // 走到最后 或者 已经大于targte了 返回false
        }
        if (curSum == target) {
            return true;
        }
        const key = curSum + "&" + i; // 很有意思的key设计
        if (memo[key] !== undefined) { // 为什么可以命中
            // console.log(curSum, i, memo[key])
            return memo[key]
        }
        const res = dfs(curSum + nums[i], i + 1) || dfs(curSum, i + 1)
        memo[key] = res
        return res 
    }
    
    const res = dfs(0, 0) // curSum=0，i从第一个开始
    // console.log(memo)
    return res
};

let start = Date.now()
console.log(canPartition([4, 4, 4, 4, 4, 4, 4, 4, 8, 8, 8, 8, 8, 8, 8, 8, 12, 12, 12, 12, 12, 12, 12, 12, 16, 16, 16, 16, 16, 16, 16, 16, 20, 20, 20, 20, 20, 20, 20, 20, 24, 24, 24, 24, 24, 24, 24, 24, 28, 28, 28, 28, 28, 28, 28, 28, 32, 32, 32, 32, 32, 32, 32, 32, 36, 36, 36, 36, 36, 36, 36, 36, 40, 40, 40, 40, 40, 40, 40, 40, 44, 44, 44, 44, 44, 44, 44, 44, 48, 48, 48, 48, 48, 48, 48, 48, 52, 52, 52, 52, 52, 52, 52, 52, 56, 56, 56, 56, 56, 56, 56, 56, 60, 60, 60, 60, 60, 60, 60, 60, 64, 64, 64, 64, 64, 64, 64, 64, 68, 68, 68, 68, 68, 68, 68, 68, 72, 72, 72, 72, 72, 72, 72, 72, 76, 76, 76, 76, 76, 76, 76, 76, 80, 80, 80, 80, 80, 80, 80, 80, 84, 84, 84, 84, 84, 84, 84, 84, 88, 88, 88, 88, 88, 88, 88, 88, 92, 92, 92, 92, 92, 92, 92, 92, 96, 96, 96, 96, 96, 96, 96, 96, 97, 99]))
// console.log(canPartition([1,2,3,4,5,6,7,8]))
console.log(Date.now() - start)
