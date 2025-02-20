const graph = [
	[2, 1, 3, 9999, 9999],
	[1, 3, 3, 6, 9999],
	[3, 3, 3, 4, 2],
	[9999, 6, 4, 3, 5],
	[9999, 9999, 2, 5, 3],
]
const kruskal = graph => {
	//初始化数据
	let edges = []
	let mst = []
	//这里是由小号到大号的
	for (let i = 0; i < graph.length; i++) {
		for (let j = i + 1; j < graph.length; j++) {
			if (graph[i][j] === 9999) {
				continue
			}
			edges.push({
				start: i,
				end: j,
				weight: graph[i][j],
			})
		}
	}
	let parent = Array(graph.length)
		.fill()
		.map((item, index) => index)

	//排序
	edges.sort((a, b) => a.weight - b.weight)
	for (let edge of edges) {
		const endP = find(edge.end, parent)
		const startP = find(edge.start, parent)
		if (parent[endP] === parent[startP]) {
			continue
		} else {
			parent[startP] = endP
			mst.push(edge)
		}
	}

	for (let item of mst) {
		console.log(item.start, item.end, item.weight)
	}
	return [parent, mst]
}

const find = (p, list) => {
	while (list[p] !== p) {
		p = list[p]
	}
	return p
}

kruskal(graph)
