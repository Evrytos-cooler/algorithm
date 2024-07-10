/**
 * @param {Array} list 系数列表
 * @param {Number} x 幂
 * @returns Number
 */
const horner = (list,x)=>{
    let result = list[0];
    //第一项不用
    for(let i=1;i<list.length;i++){
        result = result*x + list[i];
    }
    return result;
}
console.log(horner([2,-3,5,1,-7],4))