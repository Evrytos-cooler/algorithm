//链表的东西使用虚拟节点就简单多
const reverseLink = head => {
	if (!head || !head.next) return -1
	let prev = null
	//将第一个节点难以处理的问题交给prev虚拟节点 ,虚拟节点应该是null
	let current = head
	while (current) {
		const next = current.next
		current.next = prev
		prev = current
		current = next
	}
	//此时prev是尾部节点
	const result = []
	let p = prev
	while (p.next) {
		result.push(p.value)
		if (p.next) p = p.next
	}
	return result
}

const link = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null,
			},
		},
	},
}

console.log(reverseLink(link))
