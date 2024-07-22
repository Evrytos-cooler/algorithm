function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val
	this.left = left === undefined ? null : left
	this.right = right === undefined ? null : right
}
//递归遍历
var inorderTraversal = function (root) {
	if (!root) return []
	const result = []
	//递归参数
	const middleOrder = node => {
		//递归结束条件
		if (!node) return
		//递归过程
		middleOrder(node.left)
		result.push(node.val)
		middleOrder(node.right)
	}
	middleOrder(root)
	return result
}
const tree = new TreeNode(
	1,
	new TreeNode(2, new TreeNode(4), new TreeNode(5)),
	new TreeNode(3, new TreeNode(6), new TreeNode(7))
)

//非递归遍历 标记法，通过一个栈，在需要入结果的元素后面放入一个标记
const inorderTraversalV2 = root => {
	if (!root) return []
	const result = []
	const stack = []
	stack.push(root)
	while (stack.length) {
		let node = stack.pop()
		if (node) {
			//没有标记，则说明要进行遍历操作,遍历顺序是左中右，栈顺序是右中左
			node.right && stack.push(node.right)
			stack.push(node)
			stack.push(null)
			node.left && stack.push(node.left)
		} else {
			//遇到标记，执行入结果
			node = stack.pop()
			result.push(node.val)
		}
	}
	return result
}
console.log(inorderTraversalV2(tree))
