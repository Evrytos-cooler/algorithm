const wordBreak = function (s, wordDict) {
	const dp = new Array(s.length + 1).fill(false)
	dp[0] = true //空串默认可以由字典中组成

	// 先背包再物品 因为这里的s可以是由wordDict乱序组成的
	for (let i = 1; i <= s.length; i++) {
		//字符串长度
		for (let j = 0; j < wordDict.length; j++) {
			//字典
			if (i >= wordDict[j].length) {
				if (s.slice(i - wordDict[j].length, i) === wordDict[j] && !dp[i]) {
					dp[i] = dp[i - wordDict[j].length]
				}
			}
		}
	}
	return dp[s.length]
}
console.log(wordBreak('dogs', ['dog', 's', 'gs']))
