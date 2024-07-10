/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []
    for ( let key of tokens ) { 
        if (key === '+') {
            let a = Number(stack.pop())
            let b = Number(stack.pop())
            stack.push(a + b)
        }
        else if ( key === '-') {
            let a = Number(stack.pop())
            let b = Number(stack.pop())
            stack.push(b-a)
        }
        else if (key === '*') {
            let a = Number(stack.pop())
            let b = Number(stack.pop())
            stack.push(a*b)
        }
        else if ( key === '/') {
            let a = Number(stack.pop())
            let b = Number(stack.pop())
            stack.push(parseInt(b/a))
        }
        else {
            stack.push(key)
        } 
    }
    console.log(Number('123*456'))
    return stack[0]
};
evalRPN(["2","1","+","3","*"])