// 搜索二维矩阵2 ，从左到右，从上到下递增
// 对每一行使用二分法 时间复杂度为O(mlogn)
// 从左上角开始搜索，时间复杂度为O(m+n) 这里讲这个矩阵看作一个二叉搜索树，非常有技巧
// 小则走左边，大则走右边，通过ij边界判断是否完成遍历
const searchMatrix = (matrix, target) => {
	let j = matrix[0].length - 1
	let i = 0
	while (j >= 0 && i < matrix.length) {
		if (matrix[i][j] === target) return true
		else if (matrix[i][j] > target) j--
		else i++
	}
	return false
}
