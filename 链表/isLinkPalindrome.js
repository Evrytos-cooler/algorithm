function ListNode(val, next) {
	this.val = val === undefined ? 0 : val
	this.next = next === undefined ? null : next
}
// 使用数组 O(n) O(n)
var isPalindrome = function (head) {
	if (!head) return true
	if (!head.next) return true
	const array = []
	let node = head
	while (node) {
		array.push(node.val)
		node = node.next
	}

	let i = 0
	let j = array.length - 1
	while (i <= j) {
		if (array[i] !== array[j]) return false
		i++
		j--
	}

	return true
}

//递归法，递归能够让我们访问到最后一个元素，通过闭包的方式我们可以按序访问元素
// O(n) O(n)
const isPalindromeV2 = function (head) {
	if (!head) return true
	if (!head.next) return true
	let flag = true
	let root = head
	const traversal = node => {
		if (flag === false) return
		if (!node) return
		traversal(node.next)
		if (node.val !== root.val) {
			flag = false
		}
		root = root.next
	}

	traversal(head)
	return flag
}
const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(2)
const node4 = new ListNode(1)
node1.next = node2
node2.next = node3
node3.next = node4

console.log(isPalindrome(node1))
console.log(isPalindromeV2(node1))
