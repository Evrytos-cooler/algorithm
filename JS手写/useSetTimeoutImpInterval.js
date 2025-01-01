//为什么要这样做？ setInterval必须等待上一个任务执行完毕才执行，会导致任务的开始时间不准确，而setTimeout则不会
//返回一个对象，通过这个对象删除定时器，利用了闭包，闭包传递的是引用
function implementInterval(fn, delay) {
	let timer = null
	function interval() {
		fn()
		timer = setTimeout(interval, delay)
	}
	interval()
	return () => {
		clearTimeout(timer)
	}
}

const clearTimer = implementInterval(() => console.log(123), 100)
setTimeout(() => {
	clearTimer()
}, 1000)
