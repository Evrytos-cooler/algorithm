function ListNode(val, next) {
	this.val = val === undefined ? 0 : val
	this.next = next === undefined ? null : next
}
// 最暴力最直接的思路就是一个一个移动，但是其实我们可以一步到位
// 计算出新的头节点，断开，将原本的头尾节点相连即可
const rotateRight = function (head, k) {
	if (!head || !head.next) return head
	let oldHead = head
	let oldTail = head
	let cur = head
	// 计算链表长度
	let length = 0
	while (cur) {
		length++
		cur = cur.next
		if (cur) oldTail = cur
	}

	// 这里需要获取到新头节点的前一个把它断开 (注意这里指需要对k取余)
	let targetIndex = length - (k % length) - 1

	let newHead = null
	cur = head
	while (targetIndex--) {
		cur = cur.next
	}
	// oldTail可能就是cur，所以要先连接再断开
	oldTail.next = oldHead
	newHead = cur.next
	cur.next = null
	return newHead
}

const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)
const node4 = new ListNode(4)
const node5 = new ListNode(5)
node1.next = node2
// node2.next = node3
// node3.next = node4
// node4.next = node5
console.log(rotateRight(node1, 0))
