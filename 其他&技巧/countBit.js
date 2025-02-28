// 二进制转十进制我们通常用位权法
// 十进制转其他进制(<10)我们通常用 /n 取余法

// 暴力解法
const countBit = n => {
	//计算这个十进制的二进制个数
	const perBit = n => {
		let count = 0
		while (1) {
			const rest = n % 2
			n = Math.floor(n / 2)
			count += rest
			if (n === 0) return count
		}
	}

	const result = []
	for (let i = 0; i <= n; i++) {
		result[i] = perBit(i)
	}
	return result
}
console.log(countBit(5))

// 利用二进制的性质，二进制左移一位就是翻倍，也就是说，2n的1数和n的1数是一样的
// 而对于奇数而言n的1数就是n-1的一数+1。
// 上面两句话其实就是动态规划的状态转移方程了
const countBitV2 = n => {
	const dp = new Array(n).fill(0)
	dp[0] = 0
	for (let i = 1; i <= n; i++) {
		if (i % 2 == 0) {
			dp[i] = dp[i / 2]
		} else {
			dp[i] = dp[i - 1] + 1
		}
	}
	return dp
}

console.log(countBitV2(5))
