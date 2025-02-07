// 1 初始化
// 2 绑定事件 判断返回 readyStatus & status
// 3 开启通道
// 4 发送请求
const ajax = (url, method = 'GET', data) => {
	const xhr = new XMLHttpRequest()
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			if (xhr.status >= 200 && xhr.status < 300) {
				//success
				return xhr.response
			} else {
				//failed
				return xhr.response
			}
		}
	}
	xhr.open(method, url, true) //异步
	xhr.send(data)
}
