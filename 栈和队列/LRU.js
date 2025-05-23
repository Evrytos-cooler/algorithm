//实现一个LRU算法
const LRU = (callList, length) => {
	const LRUlist = []
	//利用队列实现，未满则推入，已满未出现则推出并推出一个队头，已满已有则调到最上面
	for (let target of callList) {
		if (LRUlist.length < length) {
			LRUlist.push(target)
		} else {
			if (LRUlist.includes(target)) {
				// 存在则移动位置
				LRUlist.splice(LRUlist.indexOf(target), 1)
				LRUlist.push(target)
			} else {
				// 否则直接放到队列顶，淘汰队列尾部
				LRUlist.shift()
				LRUlist.push(target)
			}
		}
	}
	return LRUlist
}
//调用队列

console.log(LRU(['a', 'b', 'c', 'd', 'e', 'f', 'c', 'g', 'c'], 5))
