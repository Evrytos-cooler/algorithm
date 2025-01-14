const deleteNode = (head, value) => {
	if (!head) return
	function deleteAtom(prev, node) {
		//删除首个
		if (!prev) return (head = node.next)
		//删除中间
		//删除尾巴
		else {
			prev.next = node.next
		}
	}
	let prev = null
	let node = head
	while (node) {
		if (node.value === value) {
			deleteAtom(prev, node)
		}
		prev = node
		node = node.next
	}
	return head
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

const node = deleteNode(node1, 1)
