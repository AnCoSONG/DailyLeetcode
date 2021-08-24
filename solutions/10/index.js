/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    /**
     * 递归法
     * 有三种匹配情况
     * p . 匹配后移
     * p a..z 匹配后移
     * p * 两种情况 .*匹配0个 和 匹配多个
     */
    console.log(s, p)
    if ( p.length <= 0 ) return s.length <= 0
    const curMatch = (s.length > 0 && (s[0] == p[0] || p[0] == '.')) // 字符严格匹配
    if (p.length > 0 && p[1] == '*') {
        //! 后续有* 有两种情况 匹配0个和匹配多个 
        // 匹配0个时，直接移动pattern到下一个字符处
        // 匹配多个时，s往后，p不动 (curMatch必须先true,匹配多个你当前的这个必须得能匹配才行)
        return isMatch(s, p.substr(2)) || (curMatch && isMatch(s.substr(1), p))
    } else { 
        // 没有*，那么就必须严格匹配 
        return curMatch && isMatch(s.substr(1), p.substr(1))
    }
}

console.log(isMatch("mississippi", "mis*is*p*."))




