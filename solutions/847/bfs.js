/**
 * @param {number[][]} graph
 * @return {number}
 */
 var shortestPathLength = function(graph) {
    const n = graph.length
    const visited = new Array(n).fill(0).map(() => new Array(1 << n).fill(false))

    const queue = []
    for(let i = 0; i < n; i ++) { // 所有的节点都可以作为开始，都有自己的状态
        queue.push([i, 1<<i, 0]) // 序号 标记 距离
        visited[i][1<<i] = true // 标记为访问过
    }
    let ans = 0
    let flag = false
    while(queue.length != 0) {
        console.log('当前队列状态', queue)
        // console.log('当前vis', visited)
        const cur = queue.shift()
        
        const [u, mask, dist] = cur
        console.log('弹出', cur)
        // if (mask == (1 << n) - 1) { // 全1 这里判断比较规范，但是会多搜索很多次
        //     console.log('已找到')
        //     ans = dist
        //     break
        // }
        for (const v of graph[u]) {
            console.log('下一个走', v)
            // 将mask的第v位置置为1
            const maskV = mask | (1 << v)
            console.log('maskV', maskV.toString(2).padStart(n, '0'))
            if (maskV == (1 << n) - 1) { // 在这里判断可以更快找到
                console.log('已找到')
                ans = dist + 1
                flag = true
                break
            }
            if (!visited[v][maskV]) { // 如果在这个节点下面没有见过这种状态
                console.log('\t可以走')
                queue.push([v, maskV, dist + 1])
                visited[v][maskV] = true
            } else{
                console.log('\t不可以走')
            }
        }
        if (flag) break
    }
    return ans
};

// shortestPathLength([[1,2,3],[0],[0],[0]])
shortestPathLength([[1],[0,2,4],[1,3,4],[2],[1,2]])