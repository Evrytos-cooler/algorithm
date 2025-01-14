function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val
	this.left = left === undefined ? null : left
	this.right = right === undefined ? null : right
}

const tree = new TreeNode(
	1,
	new TreeNode(2, new TreeNode(4), new TreeNode(5)),
	new TreeNode(3, new TreeNode(6), new TreeNode(7))
)

//递归遍历
const traversal = root => {
	const frontResult = []
	const middleResult = []
	const backResult = []
	//中左右
	const front = node => {
		if (!node) return
		frontResult.push(node.val)
		node.left && front(node.left)
		node.right && front(node.right)
	}
	//左中右
	const middle = node => {
		if (!node) return
		node.left && middle(node.left)
		middleResult.push(node.val)
		node.right && middle(node.right)
	}
	//左右中
	const back = node => {
		if (!node) return
		node.left && back(node.left)
		node.right && back(node.right)
		backResult.push(node.val)
	}
	front(root)
	middle(root)
	back(root)
	return [frontResult, middleResult, backResult]
}

//非递归遍历（栈+标记）
const traversalV2 = root => {
	const frontResult = []
	const frontStack = [root]
	const middleResult = []
	const middleStack = [root]
	const backResult = []
	const backStack = [root]
	//中左右 - 栈顺序：右左中
	while (frontStack.length) {
		let left = frontStack.pop()
		if (left) {
			left.right && frontStack.push(left.right)
			left.left && frontStack.push(left.left)
			frontStack.push(left, null)
		} else {
			frontResult.push(frontStack.pop().val)
		}
	}
	//左中右 - 栈顺序 右中左
	while (middleStack.length) {
		let middle = middleStack.pop()
		if (middle) {
			middle.right && middleStack.push(middle.right)
			middleStack.push(middle, null)
			middle.left && middleStack.push(middle.left)
		} else {
			middleResult.push(middleStack.pop().val)
		}
	}

	//左右中 - 栈顺序 中右左
	while (backStack.length) {
		let back = backStack.pop()
		if (back) {
			backStack.push(back, null)
			back.right && backStack.push(back.right)
			back.left && backStack.push(back.left)
		} else {
			backResult.push(backStack.pop().val)
		}
	}
	return [frontResult, middleResult, backResult]
}

traversal(tree)
traversalV2(tree)
