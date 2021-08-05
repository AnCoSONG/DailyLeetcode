/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {

    //* 排序后 使用两个指针 寻找可行解
    let count = 0
    nums.sort((a, b) => a - b)
    for(let i = 2; i < nums.length; i ++) { 
        // 把i当成最长边
        let left = 0
        let right = i - 1;
        while (left < right) {
            if (nums[left] + nums[right] > nums[i]) {
                // 最短的边和第二长的边之和比最长边长
                // 说明 right左侧所有的边 都可以构成三角形
                count += right - left;
                right -= 1; // 向左移
            }else {
                // 如果最短的边和第二长的边之和不如最长的边，那么left需要左移
                // 增大两边之和
                left += 1;
            }
        }

    }
    return count
};
