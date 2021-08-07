/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var circularArrayLoop = function (nums) {
    if (nums.length < 2) {
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

    // 快慢指针
    let fast = 0;
    let slow = 0;
    const moveFast = (startStep) => {
        const next = getNextIdx(fast, nums[fast])
        if(nums[next] * startStep < 0) return -1; // step同号
        if (next == fast) return -1; // 自循环
        const nextNext = getNextIdx(next, nums[next])
        if(nums[nextNext] * startStep < 0) return -1;
        if (nextNext == next) return -1; // 自循环
        return nextNext;
    }
    const moveSlow = (startStep) => {
        const next = getNextIdx(slow, nums[slow])
        if (startStep * nums[next] < 0) return -1; // step同号
        if (next == slow) return -1; // 自循环（其实只fast判断就可以了）
        return next;
    }
    for(let i = 0; i < nums.length; i ++) {
        const startStep = nums[i]
        fast = i; // 更新指针起始位置
        slow = i;
        while(true){
            fast = moveFast(startStep)
            slow = moveSlow(startStep)
            if (fast == -1 || slow == -1) { // 如果无法搜索，直接进入下一个
                break;
            }
            if(fast == slow) { // fast==slow说明有环，返回就行
                return true;
            }
        }
    }
    return false;
 }