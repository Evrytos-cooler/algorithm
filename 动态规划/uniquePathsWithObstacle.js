var uniquePathsWithObstacles = function(obstacleGrid) {
    let dp =  Array(obstacleGrid.length).fill().map(item =>  Array(obstacleGrid[0].length).fill(0))
    let m = obstacleGrid.length//行
    let n = obstacleGrid[0].length //列
    //初始化
    // 如果遇到障碍物了就退出
    for ( let i = 0 ; i < m && obstacleGrid[i][0] !== 1 ; i++){
        dp[i][0] = 1 
    }
    for ( let i = 0 ; i < n && obstacleGrid[0][i] !== 1 ; i++){
        dp[0][i] = 1 
    }

    //按需遍历,先行再列
    for (let i = 1 ; i < m ; i++){
        for ( let j = 1; j < n ; j++){
            if(obstacleGrid[i][j] == 0){
                //只有没有障碍物的情况才计算，否则保持为0
                dp[i][j] = dp[i-1][j] + dp[i][j-1]
            }
            console.log(i,j,':',dp[i][j])
        }
    }
    //返回
    return dp[m-1][n-1]
};

uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]])