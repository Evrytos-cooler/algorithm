//实现堆
class SmallHeap {
    heap
    constructor(){
        this.heap = []
    }

    push(value){
        //添加元素到数组末尾
        this.heap.push(value);
        //从最后一个元素开始堆化
        let index = this.heap.length - 1;
        let parent = Math.floor((index - 1) / 2);
        while(index > 0 && this.heap[parent][1] > this.heap[index][1]){
            [this.heap[parent],this.heap[index]] = [this.heap[index],this.heap[parent]]
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
    }

    pop(){
        //删除元素
        const target = this.heap[0]
        this.heap[0] = this.heap[this.heap.length - 1]
        this.heap.pop()
        this.heapify(this.heap,0)
        //堆化
        return target 
    }

    /**
     * 
     * @param {*} heap 堆队列
     * @param {*} index 改变的节点（分支节点） 
     */
    heapify(heap,index){    
        let smalllist = index 
        let left  = smalllist * 2 + 1
        let right = smalllist * 2 + 2 

        if ( left < heap.length && heap[left][1] < heap[smalllist][1]){
            smalllist = left
        }
        if ( right < heap.length && heap[right][1] < heap[smalllist][1]){
            smalllist = right
        }

        if (smalllist !== index){
            [heap[smalllist],heap[index]] = [heap[index],heap[smalllist]]
            //对交换后的节点进行堆化（左右子节点中最小的一个） 
            this.heapify(heap,smalllist)
        }
    }

    size(){
        return this.heap.length
    }
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map()
    const heap = new SmallHeap()
    const result = []
    //遍历统计
    for (let num of nums) { 
        map.set(num,map.has(num) ? map.get(num) + 1 : 1 )
    }

    //构建优先级队列
    for (let num of map.entries()){
        if(heap.size() < k){
            heap.push(num)
        }
        
        else {
            if( heap.heap[0] && num[1] > heap.heap[0][1]){
                heap.push(num)
                heap.pop()
            }
        }
    }
    
    
    //倒序输出result
    for (let i = k - 1; i >= 0 ; i--){
        result[i] = heap.pop()[0]
    }
    return result
};

console.log(topKFrequent([3,0,1,0],1))