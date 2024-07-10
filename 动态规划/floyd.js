const floyd = (graph)=>{
    //初始化
    let dp = Array(graph.length).fill().map(item=>Array(graph.length))
    const n = graph.length
    let path = Array(graph.length).fill().map(item=>Array(graph.length))//保存当前路径的前一个点
    for (let i = 0 ; i < n ; i++){
        for (let j = 0; j < n ; j ++){
            if(i === j ) path[i][j] = -1 
            else{
            path[i][j] = graph[i][j] !== 9999 ? i : -1
        }}
    }
    //按序遍历数组
    for ( let k = 0 ; k < n ; k++){
        for ( let i = 0 ; i < n ; i++){
            for ( let j = 0 ; j < n ; j++){
            //从哪个节点中继
                //状态转移方程
                dp[i][j] = Math.min(graph[i][j],graph[i][k]+graph[k][j])
                path[i][j] = graph[i][j] > graph[i][k]+graph[k][j] ? k : path[i][j]
            }
        }
    }
    for( let item of dp) {
        console.log(item)
    }
    return dp
}
floyd([ [0, 3, 9999, 7], [8, 0, 2, 9999], [5, 9999, 0, 1], [2, 9999, 9999, 0] ])