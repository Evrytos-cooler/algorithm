const reverseLinkV2 = head => {
	if (!head) return null
	const fakeHead = null
	let prev = fakeHead
	let cur = head
	while (cur) {
		const next = cur.next
		cur.next = prev
		prev = cur
		cur = next
	}
	return prev
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

reverseLinkV2(node1)
