class Person {
	constructor() {
		this.list = []
		this.freeze = false
	}
	eat() {
		if (this.freeze === false) {
			console.log('eat')
		} else {
			this.list.push(() => {
				console.log('eat')
				return this
			})
		}
		return this
	}
	walk() {
		if (this.freeze === false) {
			console.log('walk')
		} else {
			this.list.push(() => {
				console.log('walk')
				return this
			})
		}
		return this
	}
	sleep() {
		this.freeze = true
		console.log('sleep')
		setTimeout(() => {
			this.freeze = false
			while (this.list.length) {
				this.list.shift()()
			}
		}, 1000)
		return this
	}
}

const person = new Person()
person.walk().eat().sleep().eat()
