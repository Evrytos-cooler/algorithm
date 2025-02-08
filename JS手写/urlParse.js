const urlParse = url => {
	const str = url.split('?')[1]
	if (str === '') return null
	const params = str.split('&')
	return params.reduce((pre, cur) => {
		const [key, value] = cur.split('=')
		pre[key] = value
		return pre
	}, {})
}

console.log(urlParse('https://myWebsiteTesting?name=chen&password=1123'))
