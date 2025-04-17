/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
	const result = []
	const queue = []
	if (!root) return []
	queue.push(root)
	while (queue.length) {
		const temp = []
		while (queue.length) {
			temp.push(queue.shift())
		}
		result.push(temp.map(item => item.val))
		while (temp.length) {
			const node = temp.shift()
			if (node.left) queue.push(node.left)
			if (node.right) queue.push(node.right)
		}
	}
	return result
}

var levelOrderV2 = function (root) {
	const result = []
	const queue = []
	if (!root) return result
	queue.push(root)
	while (queue.length) {
		const size = queue.length
		const temp = []
		for (let i = 0; i < size; i++) {
			const node = queue.shift()
			node.left && queue.push(node.left)
			node.right && queue.push(node.right)
			temp.push(node.val)
		}
		result.push(temp)
	}
	return result
}

var levelRight = function (root) {
	const result = []
	const queue = []
	if (!root) return result
	queue.push(root)
	while (queue.length) {
		const size = queue.length
		for (let i = 0; i < size; i++) {
			const node = queue.shift()
			node.left && queue.push(node.left)
			node.right && queue.push(node.right)
			if (i === size - 1) result.push(node.val)
		}
	}
	return result
}

var levelAvg = function (root) {
	const result = []
	const queue = []
	if (!root) return result
	queue.push(root)
	while (queue.length) {
		const size = queue.length
		const temp = []
		for (let i = 0; i < size; i++) {
			const node = queue.shift()
			node.left && queue.push(node.left)
			node.right && queue.push(node.right)
			temp.push(node.val)
		}
		result.push(temp.reduce((a, b) => a + b) / temp.length)
	}
	return result
}

var levelOrderN = function (root) {
	const result = []
	const queue = []
	if (!root) return result
	queue.push(root)
	while (queue.length) {
		const size = queue.length
		const temp = []
		for (let i = 0; i < size; i++) {
			const node = queue.shift()
			for (let childNode of node.children) {
				if (childNode) queue.push(childNode)
			}
			temp.push(node.val)
		}
		result.push(temp)
	}
	return result
}

var levelMax = function (root) {
	const result = []
	const queue = []
	if (!root) return result
	queue.push(root)
	while (queue.length) {
		const size = queue.length
		const temp = []
		for (let i = 0; i < size; i++) {
			const node = queue.shift()
			node.left && queue.push(node.left)
			node.right && queue.push(node.right)
			temp.push(node.val)
		}
		result.push(Math.max(...temp))
	}
	return result
}

var connect = function (root) {
	const queue = []
	if (!root) return root
	queue.push(root)
	while (queue.length) {
		const size = queue.length
		let node = null
		for (let i = 0; i < size; i++) {
			node = queue.shift()
			if (i < size - 1) node.next = queue[0]
			node.left && queue.push(node.left)
			node.right && queue.push(node.right)
		}
		node.next = null
	}
	return root
}
