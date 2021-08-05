/**
 * @param {number[][]} graph
 * @return {number[]}
 */
 var eventualSafeNodes = function(graph) {
    const memo = new Array(graph.length)
    memo.fill(0)
    const dfs = (index, used) => {
        // console.log('当前节点', index)
        if (used.includes(index)) {
            // console.log('\t\t', index, '包含在数组', used, '内')
            return false;
        }
        if (memo[index] != 0) { // 备忘录
            return memo[index];
        }
        let ifSafe = true;
        used.push(index)
        // console.log('\t当前已走过的节点', used)
        // console.log('\t可以走的节点', graph[index])
        for(const nextIdx of graph[index]) {
            // console.log('\t即将进入节点', nextIdx)
            ifSafe = ifSafe && dfs(nextIdx, used) // 左侧是false时直接就不会执行 && 后面的

            // if (!ifSafe) { // 当然也可以直接break
            //     console.log('已发现该节点不安全')
            //     break;
            // }
        }
        used.pop()
        // console.log('离开节点', index, '当前走过的节点', used, '当前安全状态', ifSafe)
        memo[index] = ifSafe;
        return ifSafe;
    }
    const result = []
    graph.forEach((item, index) => {
        // console.log('正在检测', index)
        if(dfs(index, [])) {
            // console.log('\t安全')
            result.push(index)
        }
        // console.log('检测完成')
    })
    return result;
};