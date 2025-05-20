function ListNode(val, next) {
	this.val = val === undefined ? 0 : val
	this.next = next === undefined ? null : next
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 在原本的基础上删除链表
// 处理只有 1个/2个 节点的情况
// 处理 3个 以上的节点的情况
// prev 指针为不重复的，next去找下一个不重复的，连接起来
const deleteDuplicates = function (head) {
	let prev = head
	let cur = head?.next
	if (!prev || !cur) return head
	if (prev.val === cur.val) {
		prev.next = null
		return head
	}
	while (cur) {
		if (cur.val !== prev.val) {
			prev.next = cur
			prev = cur
			cur = cur.next
		} else {
			cur = cur.next
		}
	}
	return head
}

const test = function (head) {
	let result = ''
	while (head) {
		result += String(head.val)
		head = head.next
	}
	console.log(result)
}
// 1. Empty list
const emptyList = null

// 2. Single node list
const singleNode = new ListNode(1)

// 3. No duplicates
const list1 = new ListNode(1)
list1.next = new ListNode(2)
list1.next.next = new ListNode(3)

// 4. Consecutive duplicates
const list2 = new ListNode(1)
list2.next = new ListNode(1)
list2.next.next = new ListNode(2)
list2.next.next.next = new ListNode(3)
list2.next.next.next.next = new ListNode(3)

// 5. All same elements
const list3 = new ListNode(7)
list3.next = new ListNode(7)
list3.next.next = new ListNode(7)

// 6. Random duplicates
const list4 = new ListNode(1)
list4.next = new ListNode(2)
list4.next.next = new ListNode(2)
list4.next.next.next = new ListNode(3)
list4.next.next.next.next = new ListNode(4)
list4.next.next.next.next.next = new ListNode(4)
list4.next.next.next.next.next.next = new ListNode(5)

test(deleteDuplicates(emptyList))
test(deleteDuplicates(singleNode))
test(deleteDuplicates(list1))
test(deleteDuplicates(list2))
test(deleteDuplicates(list3))
test(deleteDuplicates(list4))
