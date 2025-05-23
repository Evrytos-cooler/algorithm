function ListNode(val, next) {
	this.val = val === undefined ? 0 : val
	this.next = next === undefined ? null : next
}

// 由于单向链表只能单向移动，所以我们只能选择插入排序或者归并排序，我们这里使用归并排序
// 归并排序：
// 1：分为左右 //注意判断边界，结束递归条件
// 2：和起来排序返回
const linkSort = root => {
	if (!root || !root.next) return root

	// 原地合并,不是直接讲原本的节点拆出来用
	const simpleMerge = (root1, root2) => {
		let virtual = new ListNode(0)
		let head = virtual
		while (root1 && root2) {
			if (root1.val < root2.val) {
				virtual.next = root1
				root1 = root1.next
			} else {
				virtual.next = root2
				root2 = root2.next
			}
			virtual = virtual.next
		}
		if (root1) {
			virtual.next = root1
		} else {
			virtual.next = root2
		}
		return head.next
	}

	// 快慢指针找中间分割
	// 一定不能返回原本的内容，否则就会死循环，所以要特殊处理一个和两个节点的情况
	const divideMid = root => {
		if (!root.next) return null
		if (!root.next.next) {
			const temp = root.next
			root.next = null
			return [root, temp]
		}

		let p1 = root,
			p2 = root
		while (p2?.next) {
			// 当快指针到达末尾的时候停止
			p2 = p2.next?.next
			p1 = p1.next
		}
		const secondHead = p1.next
		p1.next = null
		return [root, secondHead]
	}

	const partition = root => {
		if (!root.next) return root // 递归的结束条件
		const [left, right] = divideMid(root)
		return simpleMerge(partition(left), partition(right))
	}

	const result = partition(root)
	return result
}

const linkSortV2 = root => {
	const merge = (root1, root2) => {
		let virtual = new ListNode(null)
		let head = virtual
		while (root1 && root2) {
			if (root1.val < root2.val) {
				virtual.next = root1
				root1 = root1.next
			} else {
				virtual.next = root2
				root2 = root2.next
			}
			virtual = virtual.next
		}
		if (root1) virtual.next = root1
		else virtual.next = root2

		return head.next
	}

	const partition = root => {
		// 特殊处理只有2个节点的情况
		if (!root.next.next) {
			const secondHead = root.next
			root.next = null
			return [root, secondHead]
		}
		let p1 = root
		let p2 = root
		while (p2?.next) {
			// p2到达最后一个节点我为止
			p1 = p1.next
			p2 = p2.next?.next
		}

		const secondHead = p1.next
		p1.next = null
		return [root, secondHead]
	}

	const sorting = root => {
		if (!root || !root.next) return root //只有一个节点的情况不需要分了
		const [left, right] = partition(root)
		return merge(sorting(left), sorting(right))
	}

	const result = sorting(root)
	return result
}

const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)
const node4 = new ListNode(4)
const node5 = new ListNode(5)
node1.next = node5
node5.next = node3
node3.next = node4
node4.next = node2
//15342

console.log(linkSort(node1))
console.log(linkSortV2(node1))
