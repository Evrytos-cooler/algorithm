var fib = function (n) {
    const fb = [0,1]
    for ( let i = 2 ; i <= n ; i ++){
        //i最小为2
        fb[i] = fb[i-1] + fb[i-2]
        console.log(i,fb[i])
    }
    return fb[n]
};
fib(6)
var climbStairs = function(n) {
    const stairs = [0,1,2]
    for (let i = 3; i <= n ; i++){
        stairs[i] = stairs[i-1] + stairs[i-2]
    }
    return stairs[n]
};