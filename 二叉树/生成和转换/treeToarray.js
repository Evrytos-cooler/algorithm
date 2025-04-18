const data = [
	{
		id: 1,
		text: '节点1',
		parentId: 0,
		children: [
			{
				id: 2,
				text: '节点1_1',
				parentId: 1,
			},
		],
	},
]

function treeToArray(tree) {
	const result = []
	function dfs(tree) {
		for (let item of tree) {
			if (item.children) {
				dfs(item.children)
				delete item.children
			}
			result.push(item)
		}
	}
	dfs(tree)
	return result
}
console.log(treeToArray(data))
