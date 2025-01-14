const linkInterSection = (head1, head2) => {
	function getLength(head) {
		let nums = 0
		while (head) {
			nums++
			head = head.next
		}
		return nums
	}
	let length1 = getLength(head1)
	let length2 = getLength(head2)

	//保证head1是更小的那一个
	if (length1 > length2) {
		;[head1, head2] = [head2, head1]
		;[length1, length2] = [length2, length1]
	}

	//先移动head2
	let node1 = head1
	let node2 = head2
	for (let i = 0; i < length2 - length1; i++) {
		node2 = node2.next
	}
	while (node1.value != node2.value) {
		node1 = node1.next
		node2 = node2.next
		if (!node1 || !node2) return 'no such node'
	}
	return node1
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

const _node1 = { value: 0, next: null }
const _node2 = { value: 0, next: null }
const _node3 = { value: 0, next: null }
const _node4 = { value: 0, next: null }

// 链接节点
_node1.next = _node2
_node2.next = _node3
_node3.next = _node4

linkInterSection(node1, _node1)
