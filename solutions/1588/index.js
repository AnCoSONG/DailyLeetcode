/**
 * @param {number[]} arr
 * @return {number}
 */
 var sumOddLengthSubarrays = function(arr) {
    let len = 1
    let res = 0
    while(len <= arr.length) {
        let idx = 0
        while(arr.length - idx >= len) {
            const temp = arr.slice(idx, idx + len)
            res += temp.reduce((total, cur) => total + cur)
            idx += 1
        }
        len += 2
    }
    
    return res;
};

console.log(sumOddLengthSubarrays([10,11,12]))