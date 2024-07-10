function schedule(table, n, k) {
    for (let i = 1; i <= n; i++) {
        table[1][i] = i; // 初始化表格第一行
    }

    let m = 1;
    for (let s = 1; s <= k; s++) {
        n /= 2;
        for (let t = 1; t <= n; t++) {
            for (let i = 1 + m; i <= 2 * m; i++) { // 控制行
                for (let j = 1 + m; j <= 2 * m; j++) { // 控制列
                    table[i][j + (t - 1) * m * 2] = table[i - m][j + (t - 1) * m * 2 - m]; // 右下角的值等于左上角的值
                    table[i][j + (t - 1) * m * 2 - m] = table[i - m][j + (t - 1) * m * 2]; // 左下角的值等于右上角的值
                }
            }
        }
        m *= 2;
    }
}

// 示例用法
const n = 8;
const k = Math.log2(n);
const table = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
schedule(table, n, k);
for ( let i of table){
    console.log(i)
}

