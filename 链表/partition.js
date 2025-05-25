// Definition for singly-linked list.
function ListNode(val, next) {
	this.val = val === undefined ? 0 : val
	this.next = next === undefined ? null : next
}
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

// https://leetcode.cn/problems/partition-list/?envType=study-plan-v2&envId=top-interview-150
// 如果是新建一个链表难度比较低，这里不考虑
// 两次遍历,保存到数组中，然后连接起来
var partition = function (head, x) {
	if (!head) return head
	// 遍历比val小的
	let p1 = head
	let listNode = [[], []]
	while (p1) {
		if (p1.val < x) {
			listNode[0].push(p1)
		} else {
			listNode[1].push(p1)
		}
		p1 = p1.next
	}

	// 链接
	listNode = listNode[0].concat(listNode[1])
	for (let i = 0; i < listNode.length - 1; i++) {
		listNode[i].next = listNode[i + 1]
	}
	listNode[listNode.length - 1].next = null

	return listNode[0]
}

// Test function for partition list
function testPartition() {
	printList(partition(null, 0))
	// Test case 1: Normal case with mixed values
	const node1 = new ListNode(1)
	const node2 = new ListNode(4)
	const node3 = new ListNode(3)
	const node4 = new ListNode(2)
	const node5 = new ListNode(5)
	const node6 = new ListNode(2)
	node1.next = node2
	node2.next = node3
	node3.next = node4
	node4.next = node5
	node5.next = node6

	const result1 = partition(node1, 3)
	console.log('Test case 1:')
	printList(result1) // Expected: 1->2->2->4->3->5

	// Test case 2: All values less than x
	const node7 = new ListNode(1)
	const node8 = new ListNode(2)
	const node9 = new ListNode(1)
	node7.next = node8
	node8.next = node9

	const result2 = partition(node7, 3)
	console.log('Test case 2:')
	printList(result2) // Expected: 1->2->1

	// Test case 3: All values greater than or equal to x
	const node10 = new ListNode(4)
	const node11 = new ListNode(3)
	const node12 = new ListNode(5)
	node10.next = node11
	node11.next = node12

	const result3 = partition(node10, 3)
	console.log('Test case 3:')
	printList(result3) // Expected: 4->3->5

	// Test case 4: Empty list
	const result4 = partition(null, 3)
	console.log('Test case 4:')
	printList(result4) // Expected: null

	// Test case 5: Single node less than x
	const node13 = new ListNode(2)
	const result5 = partition(node13, 3)
	console.log('Test case 5:')
	printList(result5) // Expected: 2

	// Test case 6: Single node greater than x
	const node14 = new ListNode(4)
	const result6 = partition(node14, 3)
	console.log('Test case 6:')
	printList(result6) // Expected: 4
}

// Helper function to print linked list
function printList(head) {
	let current = head
	const values = []
	while (current) {
		values.push(current.val)
		current = current?.next
	}
	console.log(values.join('->') || 'null')
}

// Run all test cases
testPartition()
