/**
 * @param {number} n
 * @return {number}
 */
 var getMaximumGenerated = function(n) {
    if(n==0) return 0
    if(n==1) return 1
    if(n==2) return 1
    const arr = new Array(n).fill(0)
    arr[1] = 1
    for(let i = 1; ; i ++) {
        if(2*i <= n) {
            arr[2*i] = arr[i]
        } else {
            break
        }
        if(2*i + 1 <= n ) {
            arr[2*i+1] = arr[i] + arr[i+1]
        } else {
            break
        }
    }
    return Math.max(...arr) // Math.max/min无法处理10^7以上的参数量，会报Maximum call stack size exceeded
};

const start = Date.now()
console.log(getMaximumGenerated(1000000))
console.log(Date.now() - start)