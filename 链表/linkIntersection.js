const linkInterSection = (head1, head2) => {
	if (!head1 || !head2) return null
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

	// 这里有的题目要求看值有的要求看引用
	while (node1.value != node2.value) {
		node1 = node1.next
		node2 = node2.next
		if (!node1 || !node2) return null
	}
	return node1
}

const node1 = { value: 5, next: null }
const node2 = { value: 6, next: null }
const node3 = { value: 1, next: null }
const node4 = { value: 8, next: null }
const node5 = { value: 4, next: null }
const node6 = { value: 5, next: null }
// [5,6,1,8,4,5]
// [4,1,8,4,5]
// 链接节点
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6

const _node1 = { value: 4, next: null }
const _node2 = { value: 1, next: null }
const _node3 = { value: 8, next: null }
const _node4 = { value: 4, next: null }
const _node5 = { value: 5, next: null }

// 链接节点
_node1.next = _node2
_node2.next = _node3
_node3.next = _node4
_node4.next = _node5

console.log(linkInterSection(node1, _node1))
