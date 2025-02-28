const linkCycle = head => {
	let slow = head
	let fast = head
	let result = head

	do {
		fast = fast.next?.next
		slow = slow.next
		// 没有环
		if (!fast || !slow) return null
	} while (fast !== slow)

	while (result !== fast) {
		result = result.next
		fast = fast.next
	}
	return result
}
const node1 = { val: 1, next: null }
const node2 = { val: 2, next: null }
const node3 = { val: 3, next: null }
const node4 = { val: 4, next: null }
const node5 = { val: 5, next: null }
const node6 = { val: 6, next: null }

// 链接节点
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

linkCycle(node6)
