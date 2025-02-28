function ListNode(val, next) {
	this.val = val === undefined ? 0 : val
	this.next = next === undefined ? null : next
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function (list1, list2) {
	let p1 = list1
	let p2 = list2
	let newNode = new ListNode()
	let head = newNode
	while (p1 && p2) {
		let target = null
		if (p1.val < p2.val) {
			target = new ListNode(p1.val)
			p1 = p1.next
		} else {
			target = new ListNode(p2.val)
			p2 = p2.next
		}
		newNode.next = target
		newNode = newNode.next
	}

	while (p1) {
		const target = new ListNode(p1.val)
		newNode.next = target
		newNode = newNode.next
		p1 = p1.next
	}
	while (p2) {
		const target = new ListNode(p2.val)
		newNode.next = target
		newNode = newNode.next
		p2 = p2.next
	}

	return head.next
}

const node1 = new ListNode(1)
const node2 = new ListNode(4)
const node3 = new ListNode(6)
const node4 = new ListNode(8)
node1.next = node2
node2.next = node3
node3.next = node4

const node11 = new ListNode(2)
const node22 = new ListNode(3)
const node33 = new ListNode(5)
const node44 = new ListNode(7)
node11.next = node22
node22.next = node33
node33.next = node44

const node = mergeTwoLists(node1, node11)
