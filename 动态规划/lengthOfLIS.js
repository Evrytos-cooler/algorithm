const lengthOfLIS = nums => {
	const dp = new Array(nums.length).fill(1)
	for (let i = 1; i < nums.length; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[i] > nums[j]) {
				dp[i] = Math.max(dp[i], dp[j] + 1)
			}
		}
	}
	return Math.max(...dp)
}

const maxLength = arr => {
	let dp = Array.from(arr).fill(1)
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < i; j++) {
			if (arr[i] > arr[j]) {
				dp[i] = Math.max(dp[i], dp[j] + 1)
			}
		}
	}
	return Math.max(...dp)
}

console.log(maxLength([10, 9, 2, 5, 3, 7, 101, 18]))
