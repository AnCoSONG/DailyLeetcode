/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {

    // res返回结果
    const res = []
    const dfs = (nLeft, nRight, curStr, stack) => {
        // console.log(nLeft, nRight, curStr, stack)
        if (nLeft == 0 && nRight ==0) {
            res.push(curStr)
            return;
        }
        if (stack.length == 0) { // stack里面没有左括号了
            // 只能加入左括号
            dfs(nLeft - 1, nRight, curStr + '(', ['('])
            return;
        }
        if(nLeft > 0) {
            const leftTemp = [...stack] // 加入左括号的情况
            leftTemp.push('(')
            dfs(nLeft - 1, nRight, curStr + '(', leftTemp)
        }
        if (nRight > 0) {
            const rightTemp = [...stack] // 加入右括号的情况
            rightTemp.pop()
            dfs(nLeft, nRight - 1, curStr + ')', rightTemp)
        }
        // stack里面没有左括号不能加右括号
        // stack里面有左括号，可以加左括号或者右括号
        // stack里面只能有左括号，加入右括号就把最后一个左括号弹出来
        // 当nLeft == 0 && nRight == 0时，说明该路径找完了，返回当前的
        return;
    }

    dfs(n, n, '', [])
    return res
};
const start = Date.now()
console.log(generateParenthesis(13))
console.log(Date.now() - start)