// 和删除的区别就在于word1不等于word2的时候，可以删除，替换，和增加
// 这里要注意，删除和添加其实是一个互逆的操作，a的删除等于b的添加
const minDistance = (word1, word2) => {
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
			// --------------------------- 上面和最小的删除数量都是一样的 --------------------------------//
			//不需要删
			if (word1[i - 1] === word2[j - 1]) dp[i][j] = dp[i - 1][j - 1]
			// 删那个选一个最小的，其中dp[i-1][j-1]其实是冗余的，但写上比较好理解
			else
				dp[i][j] = Math.min(
					dp[i - 1][j - 1] + 1, // 这个就是更改一个字符的意思
					dp[i - 1][j] + 1,
					dp[i][j - 1] + 1
				)
		}
	}
	return dp[word1.length][word2.length]
}

console.log(minDistance('sea', 'eat'))
