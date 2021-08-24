/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    if(x==0) return 0
    let absx = Math.abs(x)
    const sign = x/absx
    const len = Math.floor(Math.log10(absx)) + 1
    let res = 0
    // console.log(absx, sign, len, res)
    for(let i = 0; i < len; i ++) {
        const cur = absx%10
        res += cur * Math.pow(10, len - i - 1)
        absx = Math.floor(absx/10)
    }
    res *= sign
    if (res < -2147483648 || res > 2147483647) return 0
    return res * sign
};

console.log(reverse(1534236469))