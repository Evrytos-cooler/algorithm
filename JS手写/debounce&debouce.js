//防抖实现，防抖的思想把频繁执行的函数减少频次
//执行过一个函数之后开启一个定时器，在定时器存在期间执行函数会导致定时器重置

function debounce(func, delay) {
	let timer = null
	return (...args) => {
		//有定时器的时候重置定时器,没有定时器的时候开启定时器,定时器执行完之后才执行callback
		if (timer) clearTimeout(timer)
		timer = setTimeout(() => func.apply(this, args), delay)
	}
}

function debounceV2(func, delay) {
	let timer = null
	return (...args) => {
		//取消上一个动作
		if (timer) clearTimeout(timer)
		timer = setTimeout(() => {
			func.apply(this, args)
		}, delay)
	}
}
const testingDebounce = () => {
	const testing = debounceV2(() => console.log('running'), 30)
	const testingv2 = () => console.log('running2 ')
	const interval = setInterval(() => {
		testing()
		testingv2()
	}, 10)
	setTimeout(() => {
		if (interval) clearInterval(interval)
	}, 1000)
}
//节流实现，节流的思想是每隔一段时间只允许触发一次函数 , 在定时器存在期间不允许执行，定时器结束后才能执行，执行的时候启动定时器
//节流函数返回一个新的函数
function throttle(func, delay) {
	let timer = null
	return (...args) => {
		if (!timer) {
			func.apply(this, args)
			timer = setTimeout(() => {
				timer = null
			}, delay)
		}
		console.log('throttle')
	}
}

function throttle(callback, delay) {
	let timer = null
	return (...args) => {
		//只有没有定时器的时候才执行
		if (!timer) {
			callback.apply(this.args)
			timer = setTimeout(() => {
				timer = null
			}, delay)
		}
		//有定时的时候啥都不做
	}
}
const testtingThrottle = () => {
	//每30ms只允许执行一次
	const testing = throttle(() => {
		console.log('throttleTesting')
	}, 30)
	const timer = setInterval(() => {
		testing()
	}, 10)
	setTimeout(() => {
		clearInterval(timer)
	}, 1000)
}

// testtingThrottle()
testingDebounce()
