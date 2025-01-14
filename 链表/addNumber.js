const addNumber = (head1, head2) => {
	let node1 = head1
	let node2 = head2
	let result = []
	if (!head1 || !head2) return 0

	function getLength(head) {
		let nums = 0
		while (head) {
			nums++
			head = head.next
		}
		return nums
	}
	const length1 = getLength(head1)
	const length2 = getLength(head2)
	if (length1 > length2) {
		;[length1, length2] = [length2, length1]
		;[node1, node2] = [node2, node1]
	}

	//length1 < length2
	let flag = 0
	while (node2) {
		const num = (node1?.value || 0) + (node2?.value || 0) + flag
		result.push({ value: num % 10, next: null })
		flag = Math.floor(num / 10)
		if (node1) node1 = node1.next
		node2 = node2.next
	}

	result.reduce((prev, cur) => {
		prev.next = cur
		return cur
	})
	return result[0]
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

const _node1 = { value: 1, next: null }
const _node2 = { value: 2, next: null }
const _node3 = { value: 7, next: null }
const _node4 = { value: 8, next: null }
const _node5 = { value: 9, next: null }
const _node6 = { value: 1, next: null }

// 链接节点
_node1.next = _node2
_node2.next = _node3
_node3.next = _node4
_node4.next = _node5
_node5.next = _node6

const node = addNumber(node1, _node1)
