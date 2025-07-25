// 简单思路是找最长公共子序列，然后计算公共子序列的长度和和传入的字符串长度和的差就是结果
// 上一个问题是模拟删除一个，这个问题中两个都可以删除
// 其区别就在于word1不等于word2的时候， dp[i][j] = min ( dp[i-1][j] , dp[i-1][j] , dp[i][j-1] )
// dp 保存的是删除的次数
var minDistance = (word1, word2) => {
	const dp = new Array(word1.length + 1)
		.fill()
		.map(() => new Array(word2.length + 1).fill(0))
	for (let i = 0; i <= word1.length; i++) {
		dp[i][0] = i // 全删了就对了
	}
	for (let j = 0; j <= word2.length; j++) {
		dp[0][j] = j
	}

	for (let i = 1; i <= word1.length; i++) {
		for (let j = 1; j <= word2.length; j++) {
			//不需要删
			if (word1[i - 1] === word2[j - 1]) dp[i][j] = dp[i - 1][j - 1]
			// 删那个选一个最小的，其中dp[i-1][j-1]其实是冗余的，但写上比较好理解
			else
				dp[i][j] = Math.min(
					dp[i - 1][j - 1] + 2,
					dp[i - 1][j] + 1,
					dp[i][j - 1] + 1
				)
		}
	}

	return dp[word1.length][word2.length]
}

console.log(minDistance('sea', 'eat'))

// https://leetcode.cn/problems/delete-operation-for-two-strings/
// 两个都能够删除，所以我们需要比较删哪个比较好（步数最少 ）
// 需要考虑空串情况 ！ 所以这题必须使用 dp[i][j] 表示便利到 word1[i-1] word2[j-1] 的情况
var minDistance = (word1, word2) => {
	// 定义 dp[i][j] 遍历到 word1[i -1] 和 word[j -1] 的时候所需的最小步数
	const dp = new Array(word1.length + 1)
		.fill()
		.map(() => new Array(word2.length + 1).fill(0))

	// 对于一个空串，其他必须全部删掉
	for (let i = 1; i <= word1.length; i++) {
		dp[i][0] = i
	}
	for (let j = 1; j <= word2.length; j++) {
		dp[0][j] = j
	}

	for (let i = 1; i <= word1.length; i++) {
		for (let j = 1; j <= word2.length; j++) {
			if (word1[i - 1] !== word2[j - 1]) {
				dp[i][j] = Math.min(
					dp[i - 1][j] + 1,
					dp[i][j - 1] + 1,
					dp[i - 1][j - 1] + 2
				)
			} else {
				dp[i][j] = dp[i - 1][j - 1]
			}
		}
	}
	return dp[word1.length][word2.length]
}

console.log(minDistance('sea', 'eat'))
