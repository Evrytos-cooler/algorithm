var minCostClimbingStairs = function(cost) {
    let dp0 = 0,dp1 = 0 ,dpi
    for ( let i = 2 ; i < cost.length + 1 ; i ++){
         dpi = Math.min(dp1 + cost[i-1],dp0+cost[i-2])
        dp0 = dp1
        dp1 = dpi
        console.log(i,dpi)
    }
    return dpi
};
minCostClimbingStairs([10, 15, 20])