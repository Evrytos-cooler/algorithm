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
			`insertBefore: 将 ${child.key} 插入到 ${parent} 的 ${
				before ? before.key : '末尾'
			}`
		)
		// 模拟插入操作
		const index = before ? parent.children.indexOf(before) : parent.children.length
		parent.children.splice(index, 0, child)
	},
	removeChild: (parent, child) => {
		console.log(`removeChild: 从 ${parent} 移除 ${child.key}`)
		// 模拟移除操作
		parent.children = parent.children.filter(c => c !== child)
	},
	createElement: type => {
		console.log(`createElement: 创建 ${type} 元素`)
		// 返回模拟的DOM元素
		return { type, children: [] }
	},
	// 修改测试用例中的createDOMElement
	createDOMElement: () => {
		console.log('createDOMElement')
		return { children: [] }
	},
}

// ----------------- Vue3 Diff 实现 -----------------
function vue3Diff(parent, oldChildren, newChildren) {
	let i = 0
	const oldLen = oldChildren.length
	const newLen = newChildren.length

	// 1. 处理相同前缀
	while (i < oldLen && i < newLen && sameVNode(oldChildren[i], newChildren[i])) i++

	// 2. 处理相同后缀
	let e1 = oldLen - 1
	let e2 = newLen - 1
	while (e1 >= i && e2 >= i && sameVNode(oldChildren[e1], newChildren[e2])) {
		e1--
		e2--
	}

	// 3. 新节点需要新增
	if (i > e1) {
		for (let j = i; j <= e2; j++) {
			const node = domAPI.createElement(newChildren[j].type)
			const anchor = parent.children[e1 + 1] || null
			domAPI.insertBefore(parent, node, anchor)
		}
		return
	}

	// 4. 旧节点需要删除
	if (i > e2) {
		for (let j = i; j <= e1; j++) {
			domAPI.removeChild(parent, oldChildren[j]._el)
		}
		return
	}

	// 5. 核心diff逻辑
	const keyToNewIndexMap = new Map()
	for (let j = i; j <= e2; j++) {
		keyToNewIndexMap.set(newChildren[j].key, j)
	}
	const source = new Array(e2 - i + 1).fill(-1)
	const oldStart = i
	const newStart = i

	for (let j = oldStart; j <= e1; j++) {
		const oldChild = oldChildren[j]
		const k = keyToNewIndexMap.get(oldChild.key)

		if (k !== undefined) {
			source[k - newStart] = j
			if (k < newStart) {
				domAPI.insertBefore(parent, oldChild._el, parent.children[k] || null)
			}
		} else {
			domAPI.removeChild(parent, oldChild._el)
		}
	}

	const lis = getSequence(source)
	let lisPtr = lis.length - 1
	for (let j = source.length - 1; j >= 0; j--) {
		if (source[j] === -1) {
			const node = domAPI.createElement(newChildren[j + newStart].type)
			domAPI.insertBefore(parent, node, parent.children[j + newStart] || null)
		} else if (j !== lis[lisPtr]) {
			const oldChild = oldChildren[source[j]]
			domAPI.insertBefore(
				parent,
				oldChild._el,
				parent.children[j + newStart + 1] || null
			)
		} else {
			lisPtr--
		}
	}
}

// 判断是否为相同节点
function sameVNode(a, b) {
	return a.key === b.key && a.type === b.type
}

// 最长递增子序列算法（简化版）
function getSequence(arr) {
	const p = arr.slice()
	const result = [0]
	let i, j, u, v, c
	const len = arr.length

	for (i = 0; i < len; i++) {
		const arrI = arr[i]
		if (arrI !== -1) {
			j = result[result.length - 1]
			if (arr[j] < arrI) {
				p[i] = j
				result.push(i)
				continue
			}
			u = 0
			v = result.length - 1
			while (u < v) {
				c = (u + v) >> 1
				if (arr[result[c]] < arrI) {
					u = c + 1
				} else {
					v = c
				}
			}
			if (arrI < arr[result[u]]) {
				if (u > 0) {
					p[i] = result[u - 1]
				}
				result[u] = i
			}
		}
	}

	u = result.length
	v = result[u - 1]
	while (u-- > 0) {
		result[u] = v
		v = p[v]
	}
	return result
}

// ----------------- 测试用例 -----------------

const oldChildren = [
	{ key: 'A', type: 'div', _el: domAPI.createDOMElement() },
	{ key: 'B', type: 'div', _el: domAPI.createDOMElement() },
	{ key: 'C', type: 'div', _el: domAPI.createDOMElement() },
	{ key: 'D', type: 'div', _el: domAPI.createDOMElement() },
]

const newChildren = [
	{ key: 'B', type: 'div' },
	{ key: 'A', type: 'div' },
	{ key: 'D', type: 'div' },
	{ key: 'E', type: 'div' },
]

// 修改setupParent函数
const setupParent = () => {
	const parent = { children: [] }
	oldChildren.forEach(child => {
		parent.children.push(child._el)
		child._el.key = child.key // 为模拟的DOM元素添加key属性
	})
	return parent
}
// 执行Vue3 Diff测试
const vueParent = setupParent()
console.log(
	'Vue3 Before:',
	Array.from(vueParent.children).map(n => n.key)
)
vue3Diff(vueParent, oldChildren, newChildren)
console.log(
	'Vue3 After:',
	Array.from(vueParent.children).map(n => n.key)
)
