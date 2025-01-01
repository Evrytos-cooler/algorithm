// Definition for singly-linked list.
function ListNode(val, next) {
	this.val = val === undefined ? 0 : val
	this.next = next === undefined ? null : next
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var addTwoNumbers = function (l1, l2) {
// 	let flag = 0
// 	let prev = new ListNode()
// 	let result = new ListNode()
// 	//保存头指针，和慢指针
// 	prev.next = result
// 	let resultHead = result
// 	while (l1 || l2) {
// 		//获取加数，注意判断是否为空
// 		const val1 = l1?.val ?? 0
// 		const val2 = l2?.val ?? 0
// 		//计算余数和进位数,维护结果,先用flag再维护
// 		result.val = (val1 + val2 + flag) % 10
// 		flag = Math.floor((val1 + val2 + flag) / 10)
// 		result.next = new ListNode()
// 		prev = prev.next
// 		result = result.next
// 		//移动指针
// 		l1 = l1?.next
// 		l2 = l2?.next
// 	}
// 	//处理最后一位数
// 	if (flag) {
// 		result.val = flag
// 	} else {
// 		prev.next = null
// 	}
// 	result = null
// 	return resultHead
// }

const addTwoNumbers = (l1, l2) => {
	//维护一个result 一个resulthead，和一个prev,flag
	let flag = 0
	let result = new ListNode()
	let prev = new ListNode()
	let resultHead = result
	prev.next = result
	//遍历l1，l2
	while (l1 || l2) {
		//计算value
		const val1 = l1?.val ?? 0
		const val2 = l2?.val ?? 0
		const value = val1 + val2 + flag
		result.val = value % 10
		//维护flag
		flag = Math.floor(value / 10)
		//移动指针 result ,l1 ,l1 ,prev
		result.next = new ListNode()
		result = result.next
		l1 = l1?.next
		l2 = l2?.next
		prev = prev.next
	}
	//处理最后一个数的特殊情况
	if (flag) {
		result.val = flag
	} else {
		prev.next = null
	}
	//返回resultHead
	return resultHead
}
var l1 = new ListNode(2)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)

var l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)
l2.next.next.next = new ListNode(1)

addTwoNumbers(l1, l2) // 7 -> 0 -> 8 -> 1
