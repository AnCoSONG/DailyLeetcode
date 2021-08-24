/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var reverseStr = function(s, k) {
    const arr = s.split('')
    const len = s.length
    const reverseMain = (l, r) => {
        while(l < r) {
            const temp = arr[l]
            arr[l] = arr[r]
            arr[r] = temp
            r --
            l ++
        }
    }
    const dfs = (start) => {
        // 边界情况
        if((len - start) < k) {
            reverseMain(start, len - 1) // 剩余所有
            return 
        }
        if ((len - start) >= k && (len - start) < 2*k) {
            reverseMain(start, start + k - 1)
            return
        }
        
        // 正常情况
        reverseMain(start, start + k - 1)
        dfs(start+2 * k)
        return 
    }

    dfs(0)
    return arr.join('')
};

console.log(reverseStr("abcdefghijk", 3))