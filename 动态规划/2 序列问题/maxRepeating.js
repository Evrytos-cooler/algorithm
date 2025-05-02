// word 在sequence 里面重复多少次
// 这里计算的是可以不连续的
const maxRepeating = (sequence, word) => {
	if (!word.length) return 1
	let startIndex = 0
	let count = 0
	for (let endIndex = word.length; endIndex <= sequence.length; ) {
		if (sequence.slice(startIndex, endIndex).includes(word)) {
			count++
			startIndex = endIndex
			endIndex = startIndex + word.length
		} else {
			endIndex++
		}
	}
	return count
}

console.log(maxRepeating('aaaba aaab aaaba aaaba aaaba aaaba aaaba', 'aaaba'))

// 下面是要求连续的做法
// DP 法，dp[i] 是当前子串为结尾的最大重复数
const maxRepeatingV2 = (sequence, word) => {
	const dp = new Array(sequence.length).fill(0)
	let ans = -Infinity
	for (let i = word.length; i <= sequence.length; i++) {
		if (sequence.slice(i - word.length, i) === word) {
			dp[i] = dp[i - word.length] + 1
			ans = Math.max(ans, dp[i])
		}
	}
	return ans
}

console.log(maxRepeatingV2('aaaba aaab aaabaaaabaaaabaaaabaaaaba', 'aaaba'))
