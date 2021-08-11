/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    // 速度慢
    const sum = nums.reduce((total, cur) => total + cur, 0)
    if (sum % 2 !== 0) {
        // 和是奇数肯定不行
        return false;
    }
    nums.sort((a, b) => a - b)
    const memo = {}
    const dp = (num, arr) => {
        if (num < 0) {
            return false
        }
        if (arr.indexOf(num) !== -1) { // 如果在剩余的数组里找到这个数
            return true
        }
        const key = num +"&" + arr.toString()
        if (memo[key] !== undefined) {
            // console.log('hit')
            // console.log(num, arr)
            return memo[key]
        }
        let can = false
        // 如果没有直接找到这个数,就在里面找
        for (let i = 0; i < arr.length; i++) {
            const temp = [...arr]
            temp.splice(i, 1)
            can = can || dp(num - arr[i], temp)
        }
        memo[key] = can
        // console.log(can)
        return can
    }

    const res = dp(sum / 2, nums)
    console.log(memo)
    return res;
};

let start = Date.now()
console.log(canPartition([4, 4, 4, 4, 4, 4, 4, 4, 8, 8, 8, 8, 8, 8, 8, 8, 12, 12, 12, 12, 12, 12, 12, 12, 16, 16, 16, 16, 16, 16, 16, 16, 20, 20, 20, 20, 20, 20, 20, 20, 24, 24, 24, 24, 24, 24, 24, 24, 28, 28, 28, 28, 28, 28, 28, 28, 32, 32, 32, 32, 32, 32, 32, 32, 36, 36, 36, 36, 36, 36, 36, 36, 40, 40, 40, 40, 40, 40, 40, 40, 44, 44, 44, 44, 44, 44, 44, 44, 48, 48, 48, 48, 48, 48, 48, 48, 52, 52, 52, 52, 52, 52, 52, 52, 56, 56, 56, 56, 56, 56, 56, 56, 60, 60, 60, 60, 60, 60, 60, 60, 64, 64, 64, 64, 64, 64, 64, 64, 68, 68, 68, 68, 68, 68, 68, 68, 72, 72, 72, 72, 72, 72, 72, 72, 76, 76, 76, 76, 76, 76, 76, 76, 80, 80, 80, 80, 80, 80, 80, 80, 84, 84, 84, 84, 84, 84, 84, 84, 88, 88, 88, 88, 88, 88, 88, 88, 92, 92, 92, 92, 92, 92, 92, 92, 96, 96, 96, 96, 96, 96, 96, 96, 97, 99]))
// console.log(canPartition([1,2,3,4,5,6,7,8, 9, 10, 11]))
console.log(Date.now() - start)