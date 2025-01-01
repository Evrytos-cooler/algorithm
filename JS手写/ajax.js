//使用原生xhr封装ajax
const ajax = (url, method = 'GET', data) => {
	//初始化xhr对象
	const xhr = new XMLHttpRequest()
	//绑定onreadystatechange事件
	xhr.onreadystatechange = function () {
		//判断链接状态
		if (xhr.readyState === 4) {
			if (xhr.status >= 200 && xhr.status < 300) {
				console.log('success')
				return xhr.response
			} else {
				console.log('error')
				return xhr.response
			}
		}
	}
	//打开链接
	xhr.open(method, url, true)
	//发送请求
	xhr.send(data)
}
