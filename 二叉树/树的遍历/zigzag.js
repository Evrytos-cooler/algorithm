import TreeNode from '../生成和转换/generateTree.js'
// z 型层序遍历
// 最简单的思路就是直接层序遍历，然后对结果进行二次处理
var zigzagLevelOrder = function (root) {
	if (!root) return []
	const stack = [root]
	const result = []
	let count = 0
	while (stack.length) {
		const length = stack.length
		if (count % 2 === 0) {
			result.push(stack.map(i => i.val))
		} else {
			result.push(stack.map(i => i.val).reverse())
		}
		for (let i = 0; i < length; i++) {
			const node = stack.shift()
			node.left && stack.push(node.left)
			node.right && stack.push(node.right)
		}
		count++
	}
	return result
	// 也可以最后统一处理
	// return result.map((value, index) => {
	// 	if (index % 2 !== 0) {
	// 		return value.reverse()
	// 	}
	// 	return value
	// })
}

// Test Case 1: Empty tree
const nullTree = null
// Expected output: []

// Test Case 2: Single node
const singleNode = new TreeNode(5)
// Expected output: [[5]]

// Test Case 3: Three-level complete tree
const tree1 = new TreeNode(
	3,
	new TreeNode(9),
	new TreeNode(20, new TreeNode(15), new TreeNode(7))
)
/* Expected zigzag output:
[
  [3],
  [20,9],  // Reverse this level
  [15,7]   // Keep original order
]
*/

// Test Case 4: Asymmetric tree
const tree2 = new TreeNode(
	1,
	new TreeNode(2, new TreeNode(4, null, new TreeNode(5))),
	new TreeNode(3)
)
/* Expected zigzag output:
[
  [1],
  [3,2],    // Reverse this level
  [4],      // Keep original order
  [5]       // Reverse this level (if exists)
]
*/

// Test Case 5: Full binary tree
const tree3 = new TreeNode(
	1,
	new TreeNode(2, new TreeNode(4), new TreeNode(5)),
	new TreeNode(3, new TreeNode(6), new TreeNode(7))
)
/* Expected zigzag output:
[
  [1],
  [3,2],    // Reverse this level
  [4,5,6,7] // Keep original order
]
*/

// console.log(JSON.stringify(zigzagLevelOrder(singleNode)))
console.log(JSON.stringify(zigzagLevelOrder(tree1)))
console.log(JSON.stringify(zigzagLevelOrder(tree2)))
console.log(JSON.stringify(zigzagLevelOrder(tree3)))

// 用递归也能够做， 我们不一定要一层一层的完成，只是最后返回一层一层的结构而已
// 用一个层级作为 index 的数组就能够实现
const zigzagBFS = root => {
	if (!root) return []
	const result = []
	const bfs = (node, level) => {
		if (!node) return
		if (!result[level]) result.push([])
		if (level % 2 === 0) {
			result[level].push(node.val)
		} else {
			result[level].unshift(node.val)
		}
		bfs(node.left, level + 1)
		bfs(node.right, level + 1)
	}
	return result

	bfs(root, 0)
}
