// 防抖： 单一重复动作的最后执行
// 使用闭包保存 timer
// 需要返回一个Promise，如果在timer中落定，clear timer 则永远不落定
function debounce(fn, delay) {
	let timer
	return function (...arg) {
		return new Promise((resolve, reject) => {
				
		})
	}
}

// 示例用法
const fetchData = () => new Promise(resolve => setTimeout(() => resolve('Data'), 500))
const debouncedFetch = debounce(fetchData, 1000)

debouncedFetch().then(console.log)
debouncedFetch().then(console.log) // 只有最后一次调用会执行
