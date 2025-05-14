// Definition for a _Node.
function _Node(val, neighbors) {
	this.val = val === undefined ? 0 : val
	this.neighbors = neighbors === undefined ? [] : neighbors
}

/**
 * @param {_Node} node
 * @return {_Node}
 */

// 这道题和 链表/copyRadomList.js 这道题很像
// 其实图就是个多向的链表
// 通过 map 保存新旧数据的映射
// 不过和链表不同，这里没有能够先 copy 所有节点的路径（next）
// 我们可以采用深度优先遍历或者广度优先遍历来获取到所有节点，然后就和链表那题一样了

var cloneGraphV1 = function (node) {
	if (!node) return
	const map = new Map()
	const DPS = node => {
		if (map.has(node)) return
		map.set(node, null)
		for (let n of node.neighbors) {
			DPS(n)
		}
	}
	DPS(node)

	for (let [key] of map) {
		map.set(key, new _Node(key.val)) // 先创建所有的节点
	}

	for (let [oldNode, newNode] of map) {
		for (let n of oldNode.neighbors) {
			newNode.neighbors = [...(newNode.neighbors || []), map.get(n)]
		}
	}

	return map.get(node)
}

// 使用递归优化
var cloneGraph = function (node) {
	if (!node) return null
	const map = new Map()
	const copy = node => {
		if (map.has(node)) {
			return map.get(node)
		} else {
			const newNode = new _Node(node.val, [])
			map.set(node, newNode)
			for (let n of node.neighbors) {
				newNode.neighbors.push(copy(n))
			}
			return newNode
		}
	}
	copy(node)
	return map.get(node)
}
// Test Case 1: Empty graph
const testCase1 = null

// Test Case 2: Single node graph
const testCase2 = new _Node(1)

// Test Case 3: Two-node cyclic graph
const node3a = new _Node(1)
const node3b = new _Node(2)
node3a.neighbors.push(node3b)
node3b.neighbors.push(node3a)

// Test Case 4: Four-node fully connected graph
const node4a = new _Node(1)
const node4b = new _Node(2)
const node4c = new _Node(3)
const node4d = new _Node(4)
node4a.neighbors.push(node4b, node4c, node4d)
node4b.neighbors.push(node4a, node4c, node4d)
node4c.neighbors.push(node4a, node4b, node4d)
node4d.neighbors.push(node4a, node4b, node4c)

// Test Case 5: Star-shaped graph
const node5a = new _Node(1)
const node5b = new _Node(2)
const node5c = new _Node(3)
const node5d = new _Node(4)
node5a.neighbors.push(node5b, node5c, node5d)
node5b.neighbors.push(node5a)
node5c.neighbors.push(node5a)
node5d.neighbors.push(node5a)

// cloneGraph(testCase1)
// cloneGraph(testCase2)
cloneGraph(node3a)
cloneGraph(node4a)
cloneGraph(node5a)
