const largeNumberMultiple = (A,B)=>{
    if(A < 10 || B < 10) return A * B
    //计算位数
    const half =Math.floor(A.toString().length / 2 ) 
    const full = half * 2

    const a = Math.floor(A / 10**half)
    const b = A % 10**half
    const c = Math.floor(B / 10 ** half)
    const d = B % 10**half
    console.log(a,b,c,d) 
    const z1 = largeNumberMultiple(a,c) * 10**full
    const z2 = largeNumberMultiple(a,d) * 10**half
    const z3 = largeNumberMultiple(b,c) * 10**half
    const z4 = largeNumberMultiple(b,d) 
    return z1 + z2 + z3 + z4
}

console.log(largeNumberMultiple(1234,5678)) // 7006652