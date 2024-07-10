//从左到右
const pow = (x,n)=>{
    const bn = n.toString(2)
    let result = bn[0] * x 
    for (let i = 1 ; i < bn.length;i++){
        const delta = bn[i] === '1'? x : 1
        result = result * result * delta 
    }
    return result
}
console.log(pow(2,10))

//从右到左
const powRight = (x,n)=>{
    const bn = n.toString(2)
    let result = parseInt(bn[bn.length - 1]) === 1 ? x : 1
    for (let i = bn.length - 2 ; i >= 0; i--){
        const delta = bn[i] === '1' ? x**(2**bn.length-1-i) : 1
        result *= delta
    }
    return result
}
console.log(powRight(2,10))
