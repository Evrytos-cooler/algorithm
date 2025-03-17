const candy = child => {
	const candy = new Array(child.length).fill(1)
	// 从右往左，更新右侧
	for (let i = 1; i < candy.length; i++) {
		if (child[i] > child[i - 1]) {
			candy[i] = candy[i - 1] + 1
		}
	}

	// 看每个元素的左侧
	for (let i = candy.length - 2; i >= 0; i--) {
		if (child[i] > child[i + 1]) {
			candy[i] = Math.max(candy[i + 1] + 1, candy[i])
		}
	}
	return candy.reduce((prev, cur) => prev + cur, 0)
}
console.log(candy([1, 2, 87, 87, 87, 2, 1]))
