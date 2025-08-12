function ListNode(val, next) {
	this.val = val === undefined ? 0 : val
	this.next = next === undefined ? null : next
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 在原本的基础上删除链表, 如果元素有重复就直接删除（包括本身）
// 处理只有 1个/2个 节点的情况
// 处理 3个 以上的节点的情况
// 需要有 3 个指针，p1 用于指向已经验证过的节点
// p2 和 p3 用于判断当前节点是否有重复的
const deleteDuplicates = function (head) {
	let p1 = head
	let p2 = head?.next
	let p3 = head?.next?.next
	// 0 / 1
	if (!p1 || !p2) return p1
	// 2
	if (!p3) return p1.val === p2.val ? null : p1
	// 3
	while (p1 && p1.val === p2?.val) {
		while (p2?.val === p1?.val) {
			p2 = p2?.next
		}
		head = p2
		p1 = p2
		p2 = p1?.next
		p3 = p2?.next
	}
	while (p2) {
		// 找下一个链接
		while (p3 && p2.val === p3.val) {
			p3 = p3.next
		}
		// 说明没重复
		if (p3 === p2.next) {
			// 链接
			p1.next = p2
			p1 = p2
			p2 = p3
			p3 = p3?.next
		} else {
			p2 = p3
			p3 = p3?.next
		}
	}
	if (p1) {
		p1.next = null
	}
	return head
}

const deleteDuplicatesV2 = head => {
	const result = []
	let p = head
	while (p) {
		if (p.val !== p.next?.val) {
			result.push(p)
			p = p.next
		}
		if (p && p.val === p.next?.val) {
			while (p && p.val === p.next?.val) {
				p = p?.next
			}
			p = p?.next
		}
	}
	if (result.length !== 0) {
		for (let i = 0; i < result.length; i++) {
			if (i == result.length - 1) {
				result[i].next = null
				continue
			}
			result[i].next = result[i + 1]
			result[i + 1].next = null
		}
	}
	return result[0]
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
list1.next.next = new ListNode(2)

// 4. Consecutive duplicates
const list2 = new ListNode(1)
list2.next = new ListNode(1)
list2.next.next = new ListNode(2)
list2.next.next.next = new ListNode(2)
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

// test(deleteDuplicates(emptyList))
// test(deleteDuplicates(singleNode))
// test(deleteDuplicates(list1))
// test(deleteDuplicates(list2))
// test(deleteDuplicates(list3))
// test(deleteDuplicates(list4))

// test(deleteDuplicatesV2(emptyList))
// test(deleteDuplicatesV2(singleNode))
test(deleteDuplicatesV2(list1))
// test(deleteDuplicatesV2(list2))
// test(deleteDuplicatesV2(list3))
// test(deleteDuplicatesV2(list4))
