var fourSum = function(nums, target) {
    if(nums.length < 4)return []
    const targetList = new Map()
    let result = []
    let set = new Set()

    for (let index1 = 0 ;index1 < nums.length -1  ; index1++){
        for (let index2 = index1 + 1  ; index2 < nums.length ; index2 ++){
            const value1 = nums[index1]
            const value2 = nums[index2]
            const key = target - ( value1 + value2 ) 
            const temp = targetList.has(key) ? targetList.get(key) : new Array()

            temp.push([index1,index2])
            targetList.set(key, temp) 
        }
    }
    for (let index3 = 0 ;index3 < nums.length -1  ; index3++){
        for (let index4 = index3 + 1  ; index4 < nums.length ; index4 ++){
            const value3 = nums[index3]
            const value4 = nums[index4]

            const key = value3 + value4
            if(targetList.has(key)){
                //遍历和查中
                for (let [index1,index2] of targetList.get(key)){
                    if(index1 !== index3 && index1 !== index4 && index2 !== index3 && index2 !== index4 ){
                        let tuple = [nums[index1],nums[index2],nums[index3],nums[index4]].sort((a, b) => a - b)
                        let tupleStr = JSON.stringify(tuple)
                        if (!set.has(tupleStr)) {
                            result.push(tuple)
                            set.add(tupleStr)
                        }                    
                    }
                }
            }
        }
    }
    return result
};

console.log(fourSum([1,0,-1,0,-2,2],0))