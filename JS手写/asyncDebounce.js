// 防抖： 单一重复动作的最后执行
// 使用闭包保存 timer
// 需要返回一个 Promise，如果在timer中落定，clear timer 则永远不落定
// 重复执行 clear timer
// 没有timer则 timer 为 delay 后执行回调
function debounce(fn, delay) {
	let timer
	return function (...arg) {
		if (timer) clearTimeout(timer)
		return new Promise((resolve, reject) => {
			timer = setTimeout(() => {
				// resolve如果接受一个promise则状态跟随promise
				resolve(fn(...arg))
			}, delay)
		})
	}
}

// 示例用法
const fetchData = () => new Promise(resolve => setTimeout(() => resolve('Data'), 500))
const debouncedFetch = debounce(fetchData, 1000)

const now = Date.now()
debouncedFetch().then(res => console.log(res, Date.now() - now)) // 只有最后一次调用会执行
