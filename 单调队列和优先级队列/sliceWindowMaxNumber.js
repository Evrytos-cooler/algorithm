class myList { 
    myList
    constructor(){
        this.myList = [] 
    }

    push(value){
        //如果前面有更小的直接推出
        while(this.myList.length >  0 && this.myList[this.myList.length - 1] < value){
            this.myList.pop()
        }
        this.myList.push(value)
    }

    shift(value){
        //只有当要推出的元素和队首元素相同的时候才执行
        if(this.myList[0] === value) {
            this.myList.shift()
        }
    }
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const res = []
    const list = new myList() 

    //初始化
    for (let i =0 ; i< k ; i ++ ){ 
        list.push(nums[i]) 
    }
    res.push(list.myList[0])
    for ( let j = k ; j < nums.length ; j++){
        list.shift(nums[j-k])
        list.push(nums[j])
        res.push(list.myList[0])
    }
    return res
};

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))
