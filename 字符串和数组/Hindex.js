/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = function (citations) {
	const arr = citations.slice().sort((a, b) => b - a)
	// 0,1,3,5,6
	for (let i = arr.length; i >= 1; i--) {
		if (arr[i - 1] >= i) return i
	}
	return 0
}

console.log(hIndex([3, 0, 6, 1, 5]))
