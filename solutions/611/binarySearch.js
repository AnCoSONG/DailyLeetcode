/**
 * @param {number[]} nums
 * @return {number}
 */
 var triangleNumber = function (nums) {
    // 优化
    // 升序排序后 使用 二分查找找到最大的符合条件的第三条边
    let count = 0;
    nums.sort((a, b) => a - b)
    for(let i = 0; i < nums.length; i ++) {
        for(let j = i + 1; j < nums.length; j ++) {
            const twoEdgeSum = nums[i] + nums[j];
            let left = j + 1
            let right = nums.length - 1
            if(nums[left] >= twoEdgeSum) { // 边界条件剪枝
                continue
            }
            if(nums[right] < twoEdgeSum) { // 边界条件剪枝
                count += right - j
                continue
            }
            let k = j; //! k表示最大的可以选择的位置,
            //! 初始化在j的位置,表示初始状态下 j 之后的都不可选
            while(left <= right) { // 对于升序序列, 二分查找可以快速锁定可选位置
                mid = Math.floor((left+right) / 2) // 中值
                if (nums[mid] < twoEdgeSum) { // 当mid位置值小于两数之和 
                    k = mid; // 说明mid位置可选,则最大可选位置更新为k
                    left = mid + 1 // 更新二分查找的左边界
                } else { // 如果大于或者等于,该mid不能选
                    right = mid - 1; // 更新右边界
                }
                
            }
            count += k - j; // k是最大可选位置
        }
    }
    return count
    
};