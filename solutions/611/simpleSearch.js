/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
    // 优化
    // 升序排序后 使用简单枚举 寻找第三条边，如果第三条边 不符合条件 直接break
    let count = 0
    nums.sort((a, b) => a - b)
    for(let i = 0; i < nums.length; i ++) {
        for(let j = i + 1; j < nums.length; j ++) {
            const twoEdgeSum = nums[i] + nums[j]
            // 简单枚举
            for (let k = j + 1; k < nums.length; k ++) {
                if (nums[k] >= twoEdgeSum) break;
                count ++;
            }
        }
    }
    return count
};
