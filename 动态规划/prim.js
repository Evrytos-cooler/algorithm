const graph = [
	[2, 1, 3, 9999, 9999],
	[1, 3, 3, 6, 9999],
	[3, 3, 3, 4, 2],
	[9999, 6, 4, 3, 5],
	[9999, 9999, 2, 5, 3],
]

const prim = graph => {
	//选择节点并初始化
	const start = 0
	const weight = []
	const vertext = []
	for (let i = 0; i < graph.length; i++) {
		weight[i] = graph[start][i]
		vertext[i] = 0
	}
	//遍历所有节点
	for (let i = 0; i < graph.length; i++) {
		let min
		let minValue = 9999
		//选择最小的节点
		for (let j = 0; j < graph.length; j++) {
			if (weight[j] < minValue && weight[j] !== 0) {
				min = j
				minValue = weight[j]
			}
		}

		//更新weight
		weight[min] = 0
		for (let j = 0; j < graph.length; j++) {
			if (weight[j] > graph[min][j]) {
				weight[j] = graph[min][j]
				vertext[j] = min
			}
		}
	}
	console.log(weight, vertext)
}
prim(graph)
