const urlParse = url => {
	url = url ?? window.location.search
	let result = {}
	const params = url.split('?')[1]
	params.split('&').forEach(kv => {
		const [key, value] = kv.split('=')
		result[key] = value
	})
	return result
}
console.log(urlParse('https://myWebsiteTesting?name=chen&password=1123'))
