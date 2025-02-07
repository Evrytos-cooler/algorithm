import TreeNode from './generateTree.js'

const generateBalanceSearchTree = list => {
	//退出条件
	if (list.length === 0) return null
	//当前逻辑
	const MIndex = Math.floor(list.length / 2)
	const middle = list[MIndex]
	const node = new TreeNode(middle)
	const left = list.slice(0, MIndex)
	const right = list.slice(MIndex + 1, list.length)
	node.left = generateBalanceSearchTree(left)
	node.right = generateBalanceSearchTree(right)
	//返回值
	return node
}

const node = generateBalanceSearchTree([-10, -3, 0, 5, 9])
