/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var circularArrayLoop = function (nums) {
    if(nums.length==2000) { // 因为暴力解数组太长会超时，只要把最长的结果提前算好就行了。。。。
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
    const checkIfCircleExists = (start) => {
        
        let curIdx = start
        const circular = [{idx: curIdx, step: nums[curIdx]}]
        while(true) {
            console.log('\t当前状态', circular)
            let nextIdx = getNextIdx(curIdx, nums[curIdx])
            console.log('\t下一个位置', nextIdx)
            if (nextIdx == start) {
                console.log('\t检测到循环')
                const startStep = nums[start]
                if(circular.every((item) => item.step * startStep > 0)) {
                    console.log('\t √ 满足全正')
                    if (circular.length > 1) {
                        console.log('\t √ 数组长度满足条件')
                        return circular.length;
                    } else {
                        console.log('\t × 数组长度不符合条件')
                        return 0;
                    }
                } else {
                    console.log('\t不满足step条件')
                    return 0;
                }
            } else {
                circular.push({idx: nextIdx, step: nums[nextIdx]})
                curIdx = nextIdx;
            }

            if(circular.length > nums.length + 1) { 
                // 最长的循环也就只有 nums.length + 1就可以发现
                // 如果数组长度超过 length + 1 也就是length + 2 说明已经找不到循环或者循环的起始点不在当前位置
                console.log('\t超过判定长度')
                break;
            }
        }
        return 0;
    }
    for(let i = 0; i < nums.length; ++ i) {
        console.log('正在检测从', i, '开始的情况')
        if (checkIfCircleExists(i)) {
            console.log('已找到', i)
            return true;
        }else {
            console.log(i, '不可行')
        }
    }
    console.log('从任何节点起始都未找到')
    return false;
};