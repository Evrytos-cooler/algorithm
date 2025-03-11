// diff
function diff(oldChildren, newChildren) {
	let oldStartIdx = 0,
		oldEndIdx = oldChildren.length - 1
	let newStartIdx = 0,
		newEndIdx = newChildren.length - 1
	const moves = [] // 记录移动操作的队列

	// 步骤1：双端比对（头-头、尾-尾）
	while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
		if (oldChildren[oldStartIdx].key === newChildren[newStartIdx].key) {
			oldStartIdx++
			newStartIdx++
		} else if (oldChildren[oldEndIdx].key === newChildren[newEndIdx].key) {
			oldEndIdx--
			newEndIdx--
		} else {
			break
		}
	}

	// 步骤2：处理中间剩余节点
	const newRemaining = newChildren.slice(newStartIdx, newEndIdx + 1)
	const oldMap = createKeyMap(oldChildren, oldStartIdx, oldEndIdx)
	const newIndexToOldIndex = new Array(newRemaining.length).fill(-1)

	// 构建新旧索引映射
	for (let i = 0; i < newRemaining.length; i++) {
		const key = newRemaining[i].key
		if (oldMap.has(key)) {
			newIndexToOldIndex[i] = oldMap.get(key)
		}
	}

	// 步骤3：计算最长递增子序列（LIS）
	const lis = findLIS(newIndexToOldIndex)
	let lisPtr = lis.length - 1

	// 步骤4：逆序遍历新节点，生成移动队列
	for (let i = newRemaining.length - 1; i >= 0; i--) {
		const oldIndex = newIndexToOldIndex[i]
		if (oldIndex === -1) {
			// 新增节点
			moves.push({ type: 'INSERT', node: newRemaining[i], pos: newStartIdx + i })
		} else if (!lis.includes(i)) {
			// 需要移动的节点
			const anchor = i < newRemaining.length - 1 ? newRemaining[i + 1] : null
			moves.push({ type: 'MOVE', node: oldChildren[oldIndex], pos: anchor })
		}
	}

	return moves
}

function createKeyMap(children, startIdx, endIdx) {
	const map = new Map()
	// 遍历旧子节点的中间未匹配部分（startIdx到endIdx）
	for (let i = startIdx; i <= endIdx; i++) {
		const child = children[i]
		if (child.key != null) {
			// 仅处理带有key的节点
			map.set(child.key, i) // key -> 旧索引
		}
	}
	return map
}

function findLIS(arr) {
	const dp = Array(arr.length).fill(1) // 存储以arr[i]结尾的LIS长度
	const sequences = arr.map((_, i) => [arr[i]]) // 存储具体子序列
	for (let i = 1; i < arr.length; i++) {
		for (let j = 0; j < i; j++) {
			if (arr[i] > arr[j] && dp[i] < dp[j] + 1) {
				dp[i] = dp[j] + 1
				sequences[i] = [...sequences[j], arr[i]] // 更新子序列
			}
		}
	}
	// 找到最长子序列
	let maxLength = Math.max(...dp)
	return sequences.find(s => s.length === maxLength)
}

const oldChildren = [
	{ key: 'a' },
	{ key: 'b' },
	{ key: 'c' },
	{ key: 'd' },
	{ key: 'e' },
	{ key: 'f' },
	{ key: 'g' },
]
const newChildren = [
	{ key: 'a' },
	{ key: 'b' },
	{ key: 'f' },
	{ key: 'c' },
	{ key: 'd' },
	{ key: 'e' },
	{ key: 'h' },
	{ key: 'g' },
]

diff(oldChildren, newChildren)
