// 虚拟节点结构定义
const createVNode = (key, type) => ({
	key,
	type,
	// 其他属性...
})

// 模拟DOM操作接口
const domAPI = {
	insertBefore: (parent, child, before) => {
		console.log(
			`insertBefore: 将 ${child.key} 插入到 ${parent.key} 的 ${
				before ? before.key : '末尾'
			}`
		)
		const index = before ? parent.children.indexOf(before) : parent.children.length
		parent.children.splice(index, 0, child)
	},
	removeChild: (parent, child) => {
		console.log(`removeChild: 从 ${parent.key} 移除 ${child.key}`)
		parent.children = parent.children.filter(c => c !== child)
	},
	createElement: type => {
		console.log(`createElement: 创建 ${type} 元素`)
		return { type, key: null, children: [] }
	},
}

// ----------------- React Diff 实现 -----------------
function reactDiff(parent, oldChildren, newChildren) {
	const oldMap = new Map()
	oldChildren.forEach((child, index) => oldMap.set(child.key, index))

	const newMap = new Map()
	newChildren.forEach((child, index) => newMap.set(child.key, index))

	let lastIndex = 0
	const newVNodes = newChildren.map(child => ({ ...child }))

	for (let i = 0; i < newVNodes.length; i++) {
		const newChild = newVNodes[i]
		const oldIndex = oldMap.get(newChild.key)

		if (oldIndex === undefined) {
			const node = domAPI.createElement(newChild.type)
			domAPI.insertBefore(parent, node, parent.children[i] || null)
		} else {
			const oldChild = oldChildren[oldIndex]
			const node = oldChild._el

			if (oldIndex < lastIndex) {
				domAPI.insertBefore(parent, node, parent.children[i] || null)
			}
			lastIndex = Math.max(lastIndex, oldIndex)
		}
	}

	oldChildren.forEach(oldChild => {
		if (!newMap.has(oldChild.key)) {
			domAPI.removeChild(parent, oldChild._el)
		}
	})
}

// ----------------- 测试用例 -----------------
// 修改测试用例中的createDOMElement
const createDOMElement = () => {
	console.log('createDOMElement')
	return { key: null, children: [] }
}

// 修改测试用例
const oldChildren = [
	{ key: 'A', type: 'div', _el: createDOMElement() },
	{ key: 'B', type: 'div', _el: createDOMElement() },
	{ key: 'C', type: 'div', _el: createDOMElement() },
	{ key: 'D', type: 'div', _el: createDOMElement() },
]

const newChildren = [
	{ key: 'B', type: 'div' },
	{ key: 'A', type: 'div' },
	{ key: 'D', type: 'div' },
	{ key: 'E', type: 'div' },
]

// 修改setupParent函数
const setupParent = () => {
	const parent = { key: 'parent', children: [] }
	oldChildren.forEach(child => {
		child._el.key = child.key // 为模拟的DOM元素添加key属性
		parent.children.push(child._el)
	})
	return parent
}

// 执行React Diff测试
const reactParent = setupParent()
console.log(
	'React Before:',
	Array.from(reactParent.children).map(n => n.key)
)
reactDiff(reactParent, oldChildren, newChildren)
console.log(
	'React After:',
	Array.from(reactParent.children).map(n => n.key)
)
