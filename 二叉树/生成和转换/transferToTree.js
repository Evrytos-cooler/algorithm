//接受一个数组和一个根节点id，返回一个树形结构的数组
const transferToTree = (list, pid) => {
	//定一个结果集合
	const result = []
	//遍历数组
	for (let item of list) {
		//对pid生成的list执行递归，传入当前的id作为pid，返回一个children
		if (item.pid === pid) {
			const children = transferToTree(list, item.id)
			//将children放入对应的item中
			if (children.length > 0) {
				item.children = children
			}
			//将filter出来的节点推入result中
			result.push(item)
		}
	}
	//执行递归，传入根节点
	return result
}
const arr = [
	{ id: '01', name: '张大大', pid: '', job: '项目经理' },
	{ id: '02', name: '小亮', pid: '01', job: '产品leader' },
	{ id: '03', name: '小美', pid: '01', job: 'UIleader' },
	{ id: '04', name: '老马', pid: '01', job: '技术leader' },
	{ id: '05', name: '老王', pid: '01', job: '测试leader' },
	{ id: '06', name: '老李', pid: '01', job: '运维leader' },
	{ id: '07', name: '小丽', pid: '02', job: '产品经理' },
	{ id: '08', name: '大光', pid: '02', job: '产品经理' },
	{ id: '09', name: '小高', pid: '03', job: 'UI设计师' },
	{ id: '10', name: '小刘', pid: '04', job: '前端工程师' },
	{ id: '11', name: '小华', pid: '04', job: '后端工程师' },
	{ id: '12', name: '小李', pid: '04', job: '后端工程师' },
	{ id: '13', name: '小赵', pid: '05', job: '测试工程师' },
	{ id: '14', name: '小强', pid: '05', job: '测试工程师' },
	{ id: '15', name: '小涛', pid: '06', job: '运维工程师' },
]

console.dir(transferToTree(arr, '')) // => [ { id: '01', name: '张大大', pid: '', job: '项目经理', children: [ [Object], [Object], [Object], [Object], [Object], [Object] ] } ]
