import TreeNode from './generateTree.js'
//跟据前序遍历和后序遍历序列构建树 : 不变量为左闭右开
const generateTreeFromList = (middleList, backList) => {
	//结束逻辑
	if (middleList.length === 0) return null
	//当前逻辑（递归逻辑）
	const breakPoint = backList.pop()
	const node = new TreeNode(breakPoint)
	//分割middleList和backList
	let index
	for (index = 0; index < middleList.length; index++) {
		if (middleList[index] === breakPoint) break
	}
	const middleLeft = middleList.slice(0, index)
	const middleRight = middleList.slice(index + 1, middleList.length)
	const backLeft = backList.slice(0, middleLeft.length)
	const backRight = backList.slice(middleLeft.length, backList.length)
	node.left = generateTreeFromList(middleLeft, backLeft)
	node.right = generateTreeFromList(middleRight, backRight)
	return node
}

const node = generateTreeFromList([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])
const generateTreeFromListV2 = (frontList, middleList) => {
	//结束逻辑
	if (middleList.length === 0) return null
	//当前逻辑（递归逻辑）
	const breakPoint = frontList.shift()
	const node = new TreeNode(breakPoint)
	//分割middleList和frontList
	let index
	for (index = 0; index < middleList.length; index++) {
		if (middleList[index] === breakPoint) break
	}
	const middleLeft = middleList.slice(0, index)
	const middleRight = middleList.slice(index + 1, middleList.length)
	const frontLeft = frontList.slice(0, middleLeft.length)
	const frontRight = frontList.slice(middleLeft.length, frontList.length)
	node.left = generateTreeFromListV2(frontLeft, middleLeft)
	node.right = generateTreeFromListV2(frontRight, middleRight)
	return node
}
const node2 = generateTreeFromListV2([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])
