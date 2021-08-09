/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    if (nums.length < 3) {
        return []
    }
    nums.sort((a, b) => a - b)
    console.log(nums)
    // return
    const res = []
    for(let a = 0; a < nums.length - 2; a ++) {
        if (nums[a] > 0) continue;
        if (a >= 1 && nums[a] == nums[a-1]) continue; 
        let L = a + 1;
        let R = nums.length - 1;
        // console.log('当前搜索', a)
        while (L < R) {
            // console.log(`\t a=${a} L=${L} R=${R} nums[a]=${nums[a]} nums[L]=${nums[L]} nums[R]=${nums[R]}`)
            // console.log(nums[a] + nums[L] + nums[R])
            if (nums[a] + nums[L] + nums[R] == 0) {
                res.push([nums[a], nums[L], nums[R]]);
                while (L < R && nums[L] == nums[L+1]) {
                    
                    L = L + 1; // 找到下一个不重复的L 
                    // console.log('L update', L)
                }
                while (L < R && nums[R] == nums[R-1]) {
                    R = R - 1; // 找到下一个不重复的R
                    // console.log('R update', R)
                }
                L = L + 1; // 移动到下一个不重复的 L
                R = R - 1; // 移动到下一个不重复的 R
            }
            else if (nums[a] + nums[L] + nums[R] < 0) {
                // while(L < R && nums[L] == nums[L + 1]) 
                L = L + 1; // 小，说明不够，L需要右移到下一个新的值
            }
            else if (nums[a] + nums[L] + nums[R] > 0) {
                // while(L < R && nums[R] == nums[R - 1]) 
                R = R - 1; // 大，说明太大，R需要左移
            }

        }
        
    }
    return res;
    
};

console.log(threeSum([-1,0,1,2,-1,-4]))