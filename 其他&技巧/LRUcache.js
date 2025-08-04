class Node {
	constructor(key, value) {
		this.key = key
		this.value = value
		this.prev = null
		this.next = null
	}
}

class LRUCache {
	constructor(capacity) {
		this.capacity = capacity || 1
		this.map = new Map()
		this.head = null // 头部，最近使用的元素
		this.tail = null // 尾部，最久未使用的元素
	}

	// **获取值**
	get(key) {
		if (!this.map.has(key)) return -1
		const node = this.map.get(key)
		this.moveToHead(node)
		return node.value
	}

	// **插入或更新**
	put(key, value) {
		if (this.map.has(key)) {
			const node = this.map.get(key)
			node.value = value // ✅ 更新值
			this.moveToHead(node)
		} else {
			const newNode = new Node(key, value)
			this.map.set(key, newNode)
			this.addToHead(newNode)

			if (this.map.size > this.capacity) {
				this.map.delete(this.tail.key)
				this.removeTail()
			}
		}
	}

	// **将节点移到头部**
	moveToHead(node) {
		if (node === this.head) return // 如果已经是头部，不需要移动
		this.removeNode(node)
		this.addToHead(node)
	}

	// **添加到头部**
	addToHead(node) {
		node.next = this.head
		node.prev = null
		if (this.head) this.head.prev = node
		this.head = node
		if (!this.tail) this.tail = node //✅ 第一个节点，设置 tail
	}

	// **删除链表中的某个节点**
	removeNode(node) {
		if (node.prev) node.prev.next = node.next
		if (node.next) node.next.prev = node.prev
		// ✅特殊处理头尾部
		if (node === this.tail) this.tail = node.prev // 如果是尾部，更新 tail
		if (node === this.head) this.head = node.next // 如果是头部，更新 head
	}

	// **删除尾部**
	removeTail() {
		if (!this.tail) return
		if (this.tail.prev) {
			this.tail.prev.next = null
		} else {
			this.head = null // 说明只有一个节点
		}
		this.tail = this.tail.prev
	}
}

// **测试**
const cache = new LRU(2)
cache.put(1, 100)
cache.put(2, 200)
console.log(cache.get(1)) // 100
cache.put(3, 300) // 淘汰 2
console.log(cache.get(2)) // -1
console.log(cache.get(3)) // 300
cache.put(4, 400) // 淘汰 1
console.log(cache.get(1)) // -1
console.log(cache.get(4)) // 400

// 需要实现 O(1) 的算法复杂度，就不能用遍历方法，比如 includes， 一般的解法是用链表，实现直接访问
// 在 map 里保存的是链表 node，node 之间用链表相连，维护双向链表和head，tail
// put 注意处理没有任何节点的情况，同时添加 head & tail
// get 移动节点的时候需要先断开再链接，维护好所有的链接关系

const Node = function (key, value) {
	this.key = key
	this.value = value
	this.prev = null
	this.next = null
}

var LRUCache = function (capacity) {
	this.capacity = capacity
	this.map = new Map()
	this.head = null
	this.tail = null
}

LRUCache.prototype.get = function (key) {
	if (!this.map.has(key)) return -1
	const node = this.map.get(key)
	// 如果已经是头部，无需移动
	if (node !== this.head) {
		// 先断开 node
		if (node.prev) node.prev.next = node.next
		if (node.next) node.next.prev = node.prev
		// 如果是尾部，更新 tail
		if (node === this.tail) this.tail = node.prev
		// 插入到头部
		node.prev = null
		node.next = this.head
		if (this.head) this.head.prev = node
		this.head = node
	}
	return node.value
}

LRUCache.prototype.put = function (key, value) {
	if (this.map.has(key)) {
		// 已存在，更新 value 并移动到头部
		const node = this.map.get(key)
		node.value = value
		this.get(key) // 复用 get 逻辑移动到头部
		return
	}
	// 新节点
	const node = new Node(key, value)
	// 超出容量，删除尾部
	if (this.map.size === this.capacity) {
		if (this.tail) {
			this.map.delete(this.tail.key)
			if (this.tail.prev) {
				this.tail = this.tail.prev
				this.tail.next = null
			} else {
				// 只有一个节点
				this.head = null
				this.tail = null
			}
		}
	}
	// 插入到头部
	node.next = this.head
	if (this.head) this.head.prev = node
	this.head = node
	if (!this.tail) this.tail = node
	this.map.set(key, node)
}
