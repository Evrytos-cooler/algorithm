const invertDevideByK = (head, n) => {
	let temp = []
	let node = head
	for (let i = 0; i < n; i++) {
		if (node) {
			temp.push(node)
			node = node.next
		}
	}

	const nodeToLink = []
	while (temp.length === n) {
		nodeToLink.push(...temp.reverse())
		temp = []
		for (let i = 0; i < n; i++) {
			if (node) {
				temp.push(node)
				node = node.next
			}
		}
	}
	if (temp.length !== 0) {
		nodeToLink.push(...temp)
	}

	nodeToLink.reduce((prev, cur) => {
		prev.next = cur
		return cur
	})

	return nodeToLink[0]
}

const node1 = { value: 1, next: null }
const node2 = { value: 2, next: null }
const node3 = { value: 3, next: null }
const node4 = { value: 4, next: null }
const node5 = { value: 5, next: null }
const node6 = { value: 6, next: null }
const node7 = { value: 7, next: null }
const node8 = { value: 8, next: null }

// 链接节点
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6
node6.next = node7
node7.next = node8

invertDevideByK(node1, 5)
