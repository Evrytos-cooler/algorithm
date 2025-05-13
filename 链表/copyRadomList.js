// Definition for a _Node.
function _Node(val, next, random) {
	this.val = val
	this.next = next
	this.random = random
}

/**
 * @param {_Node} head
 * @return {_Node}
 */

// 深拷贝一个链表，有 random 指针
// 单向遍历链表，先构建 next 链表,用一个 map 维护 旧 - 新 的映射
// 同步遍历新旧链表，构建 random 指针
var copyRandomList = function (head) {
	if (!head) return null
	let pOld = head
	let virtual = new _Node(null, null, null)
	let pNew = virtual // pNew 初始化为一个虚拟节点，其实就是让 pOld 先遍历
	const map = new WeakMap()
	// 这里顺手处理一下循环引用问题
	while (pOld || map.has(pOld)) {
		pNew.next = new _Node(pOld.val, pOld.next, pOld.random)
		pNew = pNew.next
		map.set(pOld, pNew)
		pOld = pOld.next
	}

	pNew = virtual.next
	pOld = head
	// 如果有环，这里也要用 map 处理
	while (pNew) {
		pNew.random = map.get(pOld.random)
		pNew = pNew.next
		pOld = pOld.next
	}

	return virtual.next
}
// Test Case 1: Empty list
const test1 = null

// Test Case 2: Single node with self-pointing random
const node2 = new _Node(1, null, null)
node2.random = node2

// Test Case 3: Two nodes with cross pointers
const node3_1 = new _Node(1, null, null)
const node3_2 = new _Node(2, null, null)
node3_1.next = node3_2
node3_1.random = node3_2
node3_2.random = node3_1

// Test Case 4: Three nodes with cycle
const node4_1 = new _Node(3, null, null)
const node4_2 = new _Node(4, null, null)
const node4_3 = new _Node(5, null, null)
node4_1.next = node4_2
node4_2.next = node4_3
node4_3.next = node4_1
node4_1.random = node4_3
node4_2.random = node4_2 // Self reference
node4_3.random = node4_1

// Test Case 5: Four nodes with mixed pointers
const node5_1 = new _Node(7, null, null)
const node5_2 = new _Node(13, null, null)
const node5_3 = new _Node(11, null, null)
const node5_4 = new _Node(10, null, null)
node5_1.next = node5_2
node5_2.next = node5_3
node5_3.next = node5_4
node5_1.random = null
node5_2.random = node5_1
node5_3.random = node5_4
node5_4.random = node5_2

// copyRandomList(test1)
// copyRandomList(node3_1)
// copyRandomList(node4_1)
copyRandomList(node5_1)
const circle = new _Node(-1)
circle.random = circle
copyRandomList(circle)
