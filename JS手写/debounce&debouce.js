//防抖就是推迟函数执行
//再次触发的时候则取消原本的函数执行,防抖的函数在定时器中，而节流的在定时器外
function debounce(func, delay) {
	let timer = null
	return (...args) => {
		if (timer) clearTimeout(timer)
		timer = setTimeout(() => {
			func.apply(this, args)
		}, delay)
	}
}

const testingDebounce = () => {
	const testing = debounce(() => console.log('running'), 30)
	const testingv2 = () => console.log('running2 ')
	const interval = setInterval(() => {
		testing()
		testingv2()
	}, 10)
	setTimeout(() => {
		if (interval) clearInterval(interval)
	}, 1000)
}

//节流就是控制上限
//给传入的函数添加一个定时器
function throttle(func, delay) {
	let timer = null
	return (...args) => {
		if (!timer) {
			func.apply(this, args)
			timer = setTimeout(() => {
				timer = null
			}, delay)
		}
	}
}
const testtingThrottle = () => {
	//每30ms只允许执行一次
	const testing = throttle(() => {
		console.log('throttleTesting')
	}, 100)
	const timer = setInterval(() => {
		testing()
	}, 10)
	setTimeout(() => {
		clearInterval(timer)
	}, 1000)
}

// testtingThrottle()
testingDebounce()
