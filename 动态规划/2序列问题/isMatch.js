// 使用动态规划，动态规划的核心是将当前结果由上一个字问题推理
// 在这里 dp[i][j] 表示 s[0...i+1] 是否匹配 p[0...j+1]
// 如果 dp[i-1][j-1] 为 true，那么需要让新增的内容能匹配上
// TODO: 如果 dp[i-1][j-1] 为 false，可能是因为字符串不匹配，或者是p[j-1]是*，需要判断
// s是匹配串，p是待匹配串
const isMatch = function (s, p) {}

// 使用递归，没有遇到 * 则每个递归之需要判断当前字符是否匹配，然后递归下一个字符即可，相当于dp的 i++ j++
// 如果遇到了 *，要分为两种情况，一种是 * 匹配了0个字符，一种是 * 匹配了一个或者多个字符
// 匹配0个字符则直接把p的？*去掉，递归下一个字符，匹配多个字符则递归下一个s的字符,保留当前s
