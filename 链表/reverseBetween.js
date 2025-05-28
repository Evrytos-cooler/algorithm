function ListNode(val, next) {
	this.val = val === undefined ? 0 : val
	this.next = next === undefined ? null : next
}
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
	if (!head) return head
	let p1 = head
	let headList = []
	let reverseList = []
	let tailList = []
	let count = 1

	while (p1) {
		if (count < left) {
			headList.push(p1)
		} else if (count >= left && count <= right) {
			reverseList.push(p1)
		} else {
			tailList.push(p1)
		}
		p1 = p1.next
		count++
	}

	for (let i = reverseList.length - 1; i > 0; i--) {
		reverseList[i].next = reverseList[i - 1]
	}
	if (headList.length > 0)
		headList[headList.length - 1].next = reverseList[reverseList.length - 1]
	if (reverseList.length > 0) reverseList[0].next = tailList[0] || null
	return headList[0] || reverseList[reverseList.length - 1] || tailList[0]
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
	if (!arr || arr.length === 0) {
		return null
	}
	let head = new ListNode(arr[0])
	let current = head
	for (let i = 1; i < arr.length; i++) {
		current.next = new ListNode(arr[i])
		current = current.next
	}
	return head
}

// Helper function to convert a linked list to an array
function linkedListToArray(head) {
	const arr = []
	let current = head
	while (current) {
		arr.push(current.val)
		current = current = current.next
	}
	return arr
}

// Test Cases
const testCases = [
	{
		input: [5],
		left: 1,
		right: 1,
		expected: [5],
		description: 'single',
	},
	{
		input: [1, 2, 3, 4, 5],
		left: 2,
		right: 4,
		expected: [1, 4, 3, 2, 5],
		description: 'Basic case: reverse middle section',
	},
	{
		input: [1, 2, 3],
		left: 1,
		right: 3,
		expected: [3, 2, 1],
		description: 'Reverse entire list',
	},
	{
		input: [1, 2, 3, 4],
		left: 1,
		right: 2,
		expected: [2, 1, 3, 4],
		description: 'Reverse first two nodes',
	},
	{
		input: [1, 2, 3, 4],
		left: 3,
		right: 4,
		expected: [1, 2, 4, 3],
		description: 'Reverse last two nodes',
	},
	{
		input: [1, 2, 3, 4, 5],
		left: 1,
		right: 5,
		expected: [5, 4, 3, 2, 1],
		description: 'Reverse entire list (different length)',
	},
	{
		input: [1, 2],
		left: 1,
		right: 2,
		expected: [2, 1],
		description: 'Reverse a two-node list',
	},
	{
		input: [1, 2],
		left: 1,
		right: 1,
		expected: [1, 2],
		description: 'Reverse single node at start',
	},
	{
		input: [1, 2],
		left: 2,
		right: 2,
		expected: [1, 2],
		description: 'Reverse single node at end',
	},
	{
		input: [1],
		left: 1,
		right: 1,
		expected: [1],
		description: 'Single node list',
	},
	{
		input: [],
		left: 0,
		right: 0,
		expected: [],
		description: 'Empty list',
	},
]

// Run tests
testCases.forEach(test => {
	const head = createLinkedList(test.input)
	const resultHead = reverseBetween(head, test.left, test.right)
	const resultArray = linkedListToArray(resultHead)

	const isPassed = JSON.stringify(resultArray) === JSON.stringify(test.expected)

	console.log(`Test: ${test.description}`)
	console.log(`Input: [${test.input}], left: ${test.left}, right: ${test.right}`)
	console.log(`Expected: [${test.expected}], Got: [${resultArray}]`)
	console.log(`Result: ${isPassed ? 'PASSED' : 'FAILED'}\n`)
})
