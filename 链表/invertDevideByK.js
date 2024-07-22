var reverseKGroup = function (head, k) {
	if (!head || k === 1) return head
	//翻转函数
	const revert = (node, times) => {
		let t = 0
		let prev = null
		let current = node
		while (t < times) {
			const temp = current.next
			current.next = prev
			prev = current
			current = temp
			t++
		}
		//不必返回
	}

	const config = []
	//切割链表并保存
	let current = head
	let count = 1
	let tempHead = null
	while (current) {
		if (count % k === 1) {
			tempHead = current
		} else if (count % k === 0) {
			config.push({
				head: tempHead,
				tail: current,
			})
		}
		count++
		current = current.next
	}
	//tempHead就是不不动的第一个，也可能是null

	//对每一个链表实现翻转
	for (let item of config) {
		revert(item.head, k)
	}
	//缝合所有的链表
	for (let i = 0; i < config.length - 1; i++) {
		config[i].head.next = config[i + 1].tail
	}
	config[config.length - 1].head.next = (count - 1) % k === 0 ? null : tempHead
	return config[0]?.tail || head
}

const reverseKGroupV2 = (root, k) => {
	const reverse = (preHead, tail) => {
		let current = preHead.next
		let realTail = current
		let prev = null
		while (prev !== tail) {
			const temp = current.next
			current.next = prev
			prev = current
			current = temp
		}
		return [tail, realTail]
	}

	let current = { next: root }
	let realHead = null
	while (current) {
		//记录head tail
		const head = current
		for (let i = 0; i < k; i++) {
			current = current.next
			if (!current) {
				break
			}
		}
		//判断中断 ,是否是第一次?
		if (!current) {
			realHead = realHead ?? root
			break
		}

		const tail = current.next
		//翻转并获取维护点
		const [tempHead, tempTail] = reverse(head, current)
		realHead = realHead ?? tempHead
		//维护连接状态
		head.next = tempHead
		tempTail.next = tail
		current = tempTail
	}
	return realHead
}
const link = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: {
					value: 5,
					next: {
						value: 6,
						next: {
							value: 7,
							next: {
								value: 8,
								next: null,
							},
						},
					},
				},
			},
		},
	},
}

const shortLink = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: null,
		},
	},
}
reverseKGroupV2(link, 3)
