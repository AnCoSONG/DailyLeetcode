/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  const checkAvailable = (i, j, k) => {
    return i + j > k && i + k > j && j + k > i;
  };
  // 暴力 START
  let res = []
  for(let i = 0; i < nums.length; i ++) {
      for(let j = i+1; j < nums.length; j ++) {
          for(let k = j+1; k < nums.length; k ++) {
              if(checkAvailable(nums[i], nums[j], nums[k])) {
                  const temp = [i, j, k].sort((a, b) => a - b).toString()
                  if (!res.includes(temp)) res.push(temp)
              }
          }
      }
  }
  return res.length
  // 暴力 END
};
