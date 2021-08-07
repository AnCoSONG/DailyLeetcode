/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var circularArrayLoop = function (nums) {
    if (nums.length < 3) { //数组长度为0，1，2 直接false
        return false;
    }
    const getNextIdx = (curIdx, step) => {
        const nextIdx = curIdx + step;
        if(nextIdx < 0) {
            return -(-nextIdx)%nums.length + nums.length;
        } else {
            return nextIdx % nums.length;
        }
    }
    const isNormal = (idx) => {
        if (Math.abs(nums[idx]) % nums.length == 0) return false; // 自己跟自己循环
        const nextIdx = getNextIdx(idx, nums[idx])
        const nextNextIdx = getNextIdx(nextIdx, nums[nextIdx])
        if (nextNextIdx == idx && nums[idx] * nums[nextIdx] < 0) return false; // 负数二人转 
        return true;
    }
    
    // 1. 先选择一个可以正常移动的节点 (不正常移动包括两种：自己loop，只move依次就回到自己)
    // 2. 对这个节点循环
    console.log('数组', nums)
    let normalIdx = 0;
    while(!isNormal(normalIdx)) normalIdx ++; //找到正常节点
    if (normalIdx == nums.length) {
        console.log('没找到正常节点，每个节点都不行')
        return false
    }
    console.log('正常节点是', normalIdx)
    const queue = [{idx: normalIdx, step: nums[normalIdx]}]
    let nextIdx = normalIdx
    while(queue.length <= nums.length + 1) {
        nextIdx = getNextIdx(nextIdx, nums[nextIdx])
        console.log('下一个节点是', nextIdx)
        console.log('队列状态' ,queue)
        const loopIdx = queue.findIndex(i => i.idx == nextIdx)
        if (loopIdx !== -1) { // 找到了
            console.log('已找到')
            const res = queue.slice(loopIdx)
            console.log('状态切片', res)
            if (res.length < 2 ) {
                console.log('循环长度不够')
                return false;
            } 
            const startStep = res[0].step
            if (res.every((item) => item.step * startStep > 0)) {
                console.log('正负检测通过')
                return true;
            } else {
                console.log('正负检测未通过')
                break;
            }
        } else {
            console.log('没找到, 继续找')
            queue.push({idx: nextIdx, step: nums[nextIdx]})
        }
    }
    return false

 }

 const start = Date.now()
 console.log(circularArrayLoop([3,1,2]))
 const end = Date.now()
 console.log((end - start)/1000)