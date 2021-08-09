/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
    if (nums.length < 4) {
        return []
    }
    nums.sort((a, b) => a - b)
    // console.log(nums)
    const res = new Set()
    for(let a = 0; a < nums.length - 3; a ++) {
        // if (a > 0 && nums[a] === nums[a+1]) continue;
        // while(a < nums.length - 3 && a >= 1 && nums[a] == nums[a+1]) a++; // 如果重复，就移动到最后一个重复的位置
        for(let d = nums.length - 1; d > 3; d --) {
            // if (d < nums.length - 1 && nums[d] === nums[d-1]) continue;
            // while(d > 3 && nums[d] == nums[d-1]) d--; // 如果重估，就移动到最前面的那个重复的位置
            let b = a + 1 // L 
            let c = d - 1 // R
            // console.log(a, b, c, d)
            while(b < c) {
                // console.log(a, b, c, d)
                if (nums[a] + nums[b] + nums[c] + nums[d] == target) {
                    res.add([nums[a], nums[b], nums[c], nums[d]].toString())
                    while(b < c && nums[b] == nums[b + 1]) b = b + 1;
                    while(b < c && nums[c] == nums[c - 1]) c = c - 1;
                    b ++;
                    c --;
                }
                else if (nums[a] + nums[b] + nums[c] + nums[d] < target) {
                    // 说明 b 应该搞大一点
                    while(b < c && nums[b] == nums[b + 1]) b ++; 
                    b ++;
                }
                else if (nums[a] + nums[b] + nums[c] + nums[d] > target) {
                    while(b < c && nums[c] == nums[c - 1]) c --; // 去重
                    c --;
                }
            }
        }
    }
    // console.log(Array.from(res))
    return Array.from(res).map(item => item.split(",").map(i => parseInt(i)))
    // return res;
};

// console.log(fourSum( [1,0,-1,0,-2,2],0))

// console.log(fourSum([2,2,2,2], 8))
const start = Date.now()
console.log(fourSum([-2,-1,-1,1,1,2,2], 1))
console.log(Date.now() - start)