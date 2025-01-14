const reverNodeTwin = head => {
	if (!head || !head.next) return head
	const toLinkNode = []
	let cur = head
	let next = cur.next

	while (cur && next) {
		const next1 = next?.next
		const next2 = next1?.next
		toLinkNode.push(next, cur)
		cur = next1
		next = next2
	}
	while (cur) {
		toLinkNode.push(cur)
		cur = cur.next
	}
	//链接
	toLinkNode.reduce((prev, cur) => {
		prev.next = cur
		return cur
	})
	return toLinkNode[0]
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

const node = reverNodeTwin(node1)
