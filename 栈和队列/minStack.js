var MinStack = function () {
	this.minStack = []
	this.stack = []
}

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
	this.stack.push(val)
	if (!this.minStack.length || this.minStack[this.minStack.length - 1] >= val)
		this.minStack.push(val)
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
	const target = this.stack.pop()
	if (target === this.minStack[this.minStack.length - 1]) this.minStack.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
	return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
	return this.minStack[this.minStack.length - 1]
}

const ms = new MinStack()
ms.push(0)
ms.push(1)
ms.push(0)
ms.getMin()
ms.pop()
ms.getMin()
