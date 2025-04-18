function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val
	this.left = left === undefined ? null : left
	this.right = right === undefined ? null : right
}
// var levelOrder = function (root) {
// 	if (!root) return []
// 	const result = []
// 	let stack = []
// 	stack.push(root)
// 	while (stack.length) {
// 		//将当前层的副本传入result
// 		result.push(stack.map(item => item.val))
// 		const temp = stack.slice()
// 		stack = []
// 		//将遍历stack获取下一层
// 		for (let item of temp) {
// 			item.left && stack.push(item.left)
// 			item.right && stack.push(item.right)
// 		}
// 	}
// 	return result
// }

const tree = new TreeNode(
	1,
	new TreeNode(2, new TreeNode(4), new TreeNode(5)),
	new TreeNode(3, new TreeNode(6), new TreeNode(7))
)

const levetOrder = root => {
	let temp = [root]
	const result = []
	while (1) {
		const newTemp = []
		result.push(temp.slice().map(i => i.val))
		for (let node of temp) {
			node.left && newTemp.push(node.left)
			node.right && newTemp.push(node.right)
			if (!node.left || !node.right) {
				return result
			}
		}
		temp = newTemp
	}
}
levetOrder(tree)
