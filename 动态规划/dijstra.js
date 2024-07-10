const graph = [
    [2, 1, 3, 9999, 9999],
    [1, 3, 3, 6, 9999],
    [3, 3, 3, 4, 2],
    [9999, 6, 4, 3, 5],
    [9999, 9999, 2, 5, 3]
]


function dijkstra(graph, start) {
    let n = graph.length
    let visited = Array(n).fill(false);
    let dist = Array(n).fill(Infinity);
    //添加一个回溯数组
    let prev = Array(n).fill(-1);
    dist[start] = 0;

    //遍历所有节点
    for (let i = 0; i < n; i++) {
        
        //选择权重最小的节点
        let minDist = Infinity;
        let u = -1;
        for (let j = 0; j < n; j++) {
            if (!visited[j] && dist[j] < minDist) {
                u = j;
                minDist = dist[j];
            }
        }
        visited[u] = true;

        //更新最短路径
        for (let v = 0; v < n; v++) {
            //不是已经访问的 ： 已经访问的意思是从源节点到这个节点的最短路径已经找到了
            //不是自己到自己： graph[u][v] !== 0
            //不是不可达的节点： dist[u] !== Infinity
            //通过这个节点能够使得最短路径更短
            if (!visited[v] && graph[u][v] !== 0 && dist[u] !== Infinity && dist[u] + graph[u][v] < dist[v]) {
                dist[v] = dist[u] + graph[u][v];
                //如果更新则添加到prev中
                prev[v] = u;
            }
        }
    }

    console.log(getPath(prev,4))
    return [ dist,prev ];
}

const getPath = (prev,end)=>{
    let path = [end]
    while(prev[end] !== -1){
        path.unshift(prev[end])
        end = prev[end]
    }
    return path
}
dijkstra(graph, 0)