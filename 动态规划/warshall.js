const warshall = (graph) => {
    //初始化矩阵
    let dp = graph.map(row => [...row])

    for (let i = 1 ; i < graph.length; i++){
        for (let j = 0 ; j < graph[0].length ; j++){
            dp[i][j] = graph[i][j] || graph[i-1][j]
        }
    }
    for(let d of dp){
        console.log(d)
    }
    return dp
}
warshall([
    [0,1,0,1],
    [1,0,1,0],
    [0,1,0,1],
    [1,0,1,0]
])