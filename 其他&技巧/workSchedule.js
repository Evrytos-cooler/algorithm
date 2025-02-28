// // 基于动态规划的尝试
// function minTotalTime(jobs) {
//     const n = jobs.length;
//     const dp = Array.from({ length: n + 1 }, () => [0, 0]);
//     //记录前驱
//     const prevJob = Array.from({ length: n + 1 }, () => -1)

//     for (let i = 1; i <= n; i++) {
//         const [ai, bi] = jobs[i - 1];
//         dp[i][0] = dp[i - 1][0] + ai;
//         dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][1]) + bi;
//         prevJob[i] = dp[i - 1][0] <= dp[i - 1][1] ? i - 1  : prevJob[i-1];
//     }

//     console.log('最短时间： ', dp[n][0], dp[n][1]);
//     console.log('最优顺序：', prevJob.join(','));
//     return Math.min(dp[n][0], dp[n][1]);
// }

// // 示例用法
// const jobs = [
//     [2, 3], // 第一个作业，a1=2, b1=3
//     [1, 4], // 第二个作业，a2=1, b2=4
//     [3, 2], // 第三个作业，a3=3, b3=2
//     [5, 1], // 第四个作业，a4=5, b4=1
//     [2, 2]  // 第五个作业，a5=2, b5=2
// ];

// const result = minTotalTime(jobs);
// console.log(`最少总时间：${result}`);

//基于johnson不等式的尝试
function johnsonAlgorithm(a, b) {
    const n = a.length;
    const tasks = [];
    for (let i = 0; i < n; i++) {
        tasks.push({ a: a[i], b: b[i], c: i + 1 });
    }

    //根据johnson算法排序
    tasks.sort((x, y) => Math.min(y.b, x.a) - Math.min(x.b, y.a));

    let ta = 0;
    let tb = 0;
    const order = [];

    for (const task of tasks) {
        ta += task.a;
        tb = Math.max(ta, tb) + task.b;
        order.push(task.c);
    }

    return { totalProcessingTime: tb, order };
}

// Example usage
const a = [2, 3, 1, 4];
const b = [3, 2, 4, 1];
const result = johnsonAlgorithm(a, b);

console.log("Total processing time:", result.totalProcessingTime);
console.log("Task order:", result.order);
