function TreeNode(val) {
	this.val = val
	this.left = this.right = null
}
TreeNode.prototype.addLeft = function (node) {
	this.left = node
}
TreeNode.prototype.addRight = function (node) {
	this.right = node
}

function Tree(root) {
	this.root = root
}

let treeA
let treeB
let treeC
;(() => {
	/**
	 * 构造A树
	 */
	const root = new TreeNode(8)
	const node7 = new TreeNode(7)
	const node5 = new TreeNode(5)
	const node2 = new TreeNode(2)
	const node9 = new TreeNode(9)
	const node6 = new TreeNode(6)
	root.addLeft(node7)
	root.addRight(node5)
	node7.addLeft(node2)
	node7.addRight(node9)
	node5.addRight(node6)
	treeA = new Tree(root)
})()
;(() => {
	/**
	 * 构造B树
	 */
	const root = new TreeNode(7)
	const node2 = new TreeNode(2)
	const node9 = new TreeNode(9)

	// 用于测试不匹配
	// const node7 = new TreeNode(7);
	// node9.addLeft(node7);

	root.addLeft(node2)
	root.addRight(node9)
	treeB = new Tree(root)
})()
;(() => {
	/**     
       构造C树

          7   
         / \   
        2   10
  
        用于测试不匹配
    */
	const root = new TreeNode(7)
	const node2 = new TreeNode(2)
	const node10 = new TreeNode(10)

	root.addLeft(node2)
	root.addRight(node10)
	treeC = new Tree(root)
})()

/**
 * 根据测试数据判断子结构的意思是数值一致
 */
function isSubStructure(rootA, rootB) {
	//思路： DFS 遍历母树，找到和子树根节点同值的 ； 开始同步遍历，有不同则返回第一步 ； 否则返回true
	//找到子树的根节点在母树中的位置
	function findFirst(motherTree, childTree) {
		const target = childTree.val
		//使用递归
		function trace(motherTree, target) {
			if (!motherTree) return false
			if (motherTree.val === target && isSub(motherTree, childTree)) {
				return true
			} else {
				return trace(motherTree.right, target) || trace(motherTree.left, target)
			}
		}
		return trace(motherTree, target)
	}
	//判断从这个根开始的母树是否存在一个子树，传入两个根节点
	function isSub(node1, node2) {
		if (!node1 && !node2) return true
		if (!node1 || !node2) return false
		if (node1.val === node2.val) {
			return isSub(node1.left, node2.left) && isSub(node1.right, node2.right)
		} else return false
	}
	return findFirst(rootA, rootB)
}
//以上方法递归调用层级太深？

//方法2 ，使用DFS + 使用层级遍历
function isSubStructureV2(rootA, rootB) {
	//思路： DFS 遍历母树，找到和子树根节点同值的 ； 开始同步遍历，有不同则返回第一步 ； 否则返回true
	//找到子树的根节点在母树中的位置
	function findFirst(motherTree, childTree) {
		const target = childTree.val
		//使用递归
		function trace(motherTree, target) {
			if (!motherTree) return false
			if (motherTree.val === target && isSub(motherTree, childTree)) {
				return true
			} else {
				return trace(motherTree.right, target) || trace(motherTree.left, target)
			}
		}
		return trace(motherTree, target)
	}
	//判断从这个根开始的母树是否存在一个子树，传入两个根节点
	function isSub(motherNode, childNode) {
		//层级遍历childNode，得到一个数组，层级遍历motherNode，得到一个数组，判断childNode是否再MotherNode中
		function level(node) {
			if (!node) return false
			const stack = []
			const result = []
			stack.push(node)
			while (stack.length) {
				const node = stack.pop()
				result.push(node?.val || 'null')
				if (node) {
					stack.push(node.left)
					stack.push(node.right)
				}
			}
			return result
		}
		let level1 = level(motherNode)
		let level2 = level(childNode)
		// if (level2.toString() === level1.slice(0, level2.length).toString()) return true // 用哪个版本取决于这个子树是要求找得到即可，还是要求叶子节点必须一样
		if (level2.toString() === level1.toString()) return true
		else return false
	}
	return findFirst(rootA, rootB)
}

//方法3 ，使用迭代和使用层级遍历
function isSubStructureV3(rootA, rootB) {
	//思路： DFS 遍历母树，找到和子树根节点同值的 ； 开始同步遍历，有不同则返回第一步 ； 否则返回true
	//找到子树的根节点在母树中的位置
	function findFirst(motherTree, childTree) {
		const target = childTree.val
		//使用迭代，遍历树，找到和子树根节点同值的
		function trace(motherTree, target) {
			const stack = []
			stack.push(motherTree)
			while (stack.length) {
				const node = stack.pop()
				if (node.val === target && isSub(node, childTree)) return true
				node.right && stack.push(node.right)
				node.left && stack.push(node.left)
			}
			return false
		}
		return trace(motherTree, target)
	}
	//判断从这个根开始的母树是否存在一个子树，传入两个根节点
	function isSub(motherNode, childNode) {
		//层级遍历childNode，得到一个数组，层级遍历motherNode，得到一个数组，判断childNode是否再MotherNode中
		function level(node) {
			if (!node) return false
			const stack = []
			const result = []
			stack.push(node)
			while (stack.length) {
				const node = stack.pop()
				result.push(node?.val || 'null')
				if (node) {
					stack.push(node.left)
					stack.push(node.right)
				}
			}
			return result
		}
		let level1 = level(motherNode)
		let level2 = level(childNode)
		// if (level2.toString() === level1.slice(0, level2.length).toString()) return true // 用哪个版本取决于这个子树是要求找得到即可，还是要求叶子节点必须一样
		if (level2.toString() === level1.toString()) return true
		else return false
	}
	return findFirst(rootA, rootB)
}

console.log(isSubStructure(treeA.root, treeB.root))
// console.log(isSubStructureV2(treeA.root, treeB.root))
// console.log(isSubStructureV3(treeA.root, treeC.root))
