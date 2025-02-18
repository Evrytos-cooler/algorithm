const minCostTickets = function (days, costs) {
	const dp = Array.from(366).fill(0)
	dp[0] = 0
	for (let i = 1; i < 366; i++) {
		if (!days.includes(i)) {
			dp[i] = dp[i - 1]
		} else {
			const day1Cost = dp[i - 1] + costs[0]
			const day7Cost = dp[Math.max(0, i - 7)] + costs[1]
			const day30Cost = dp[Math.max(0, i - 30)] + costs[2]
			dp[i] = Math.min(day1Cost, day7Cost, day30Cost)
		}
	}
	return dp[365]
}

// eg
console.log(minCostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15])) // return 11
