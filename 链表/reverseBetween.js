function ListNode(val, next) {
	this.val = val === undefined ? 0 : val
	this.next = next === undefined ? null : next
}

// left 和 right 并非下标
// 关注边界情况: 顶头，顶尾，只有一个, 链表为空
// 用虚拟节点解决顶头问题，顶尾
const reverseBetween = function (head, left, right) {
	if (!head) return head
	if (!head.next) return head.next
	const virtual = new ListNode(null, head)
	let p = virtual
	let cur = virtual.next
	let start = 1
	while (start <= right) {
		if (start <= left) {
			p = p.next
			cur = cur.next
		} else if (start <= right) {
			let curNext = cur.next
			cur.next = p
			p = cur
			cur = curNext
		}
		start++
	}
	return head
}
const node5 = new ListNode(5)
const node4 = new ListNode(4, node5)
const node3 = new ListNode(3, node4)
const node2 = new ListNode(2, node3)
const node1 = new ListNode(1, node2)
reverseBetween(node1, 2, 5)
