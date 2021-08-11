/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    // 照样超时...
    const sum = nums.reduce((total, cur) => total + cur, 0)
    if (sum % 2 !== 0) {
        // 和是奇数肯定不行
        return false;
    }
    const target = sum/2

    if (Math.max(...nums) > target) {
        return false;
    }

    const queue = []
    for(let i = 0; i < nums.length; i ++) {
        queue.push({amount: target - nums[i], used: [i]})
    }
    while(queue.length !== 0) {
        // console.log(queue)
        const cur = queue.shift()
        if (cur.amount === 0) {
            return true;
        }
        if (cur.amount < 0) {
            continue
        }
        for(let i = 0; i < nums.length; i ++) {
            if(cur.used.indexOf(i)!==-1) {
                continue
            }
            const tempNewUsed = [...cur.used]
            tempNewUsed.push(i)
            queue.push({amount: cur.amount - nums[i], used: tempNewUsed})
        }
    }

    return false;
}

console.log(canPartition([1,2,3,4,5,6,7,8]))