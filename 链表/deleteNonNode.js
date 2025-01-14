const deleteNode = (head, position) => {
	if (!head) return
	const virtual = { value: null, next: head }
	let fast = virtual
	let slow = virtual
	for (let i = 0; i < position; i++) {
		fast = fast.next
		if (!fast) return 'invalid position'
	}
	while (fast.next) {
		slow = slow.next
		fast = fast.next
	}
	slow.next = slow.next.next
	return virtual.next
}

const node1 = { value: 1, next: null }
const node2 = { value: 2, next: null }
const node3 = { value: 3, next: null }
const node4 = { value: 4, next: null }
const node5 = { value: 5, next: null }

// 链接节点
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

const node_ = deleteNode(node1, 5)
const node = deleteNode(node1, 2)
const _node_ = deleteNode(node1, 6)
