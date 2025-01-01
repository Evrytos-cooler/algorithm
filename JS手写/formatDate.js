const formateDate = dateEl => {
	if (!(dateEl instanceof Date)) {
		console.log('error type')
		return dateEl
	}
	const year = dateEl.getFullYear()
	const month = dateEl.getMonth() + 1
	const date = dateEl.getDate()
	const hour = dateEl.getHours()
	const minute = dateEl.getMinutes()
	const second = dateEl.getSeconds()

	const pad = (string, length = 2, padString = '0') => {
		return string.toString().padStart(length, padString)
	}

	return `${year}-${pad(month)}-${pad(date)} ${pad(hour)}:${pad(minute)}:${pad(second)}`
}

console.log(formateDate(new Date()))
