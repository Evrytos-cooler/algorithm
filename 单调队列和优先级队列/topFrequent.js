// //实现堆
// class SmallHeap {
//     heap
//     constructor(){
//         this.heap = []
//     }

//     push(value){
//         //添加元素到数组末尾
//         this.heap.push(value);
//         //从最后一个元素开始堆化
//         let index = this.heap.length - 1;
//         let parent = Math.floor((index - 1) / 2);
//         while(index > 0 && this.heap[parent][1] > this.heap[index][1]){
//             [this.heap[parent],this.heap[index]] = [this.heap[index],this.heap[parent]]
//             index = parent;
//             parent = Math.floor((index - 1) / 2);
//         }
//     }

//     pop(){
//         //删除元素
//         const target = this.heap[0]
//         this.heap[0] = this.heap[this.heap.length - 1]
//         this.heap.pop()
//         this.heapify(this.heap,0)
//         //堆化
//         return target
//     }

//     /**
//      *
//      * @param {*} heap 堆队列
//      * @param {*} index 改变的节点（分支节点）
//      */
//     heapify(heap,index){
//         let smalllist = index
//         let left  = smalllist * 2 + 1
//         let right = smalllist * 2 + 2

//         if ( left < heap.length && heap[left][1] < heap[smalllist][1]){
//             smalllist = left
//         }
//         if ( right < heap.length && heap[right][1] < heap[smalllist][1]){
//             smalllist = right
//         }

//         if (smalllist !== index){
//             [heap[smalllist],heap[index]] = [heap[index],heap[smalllist]]
//             //对交换后的节点进行堆化（左右子节点中最小的一个）
//             this.heapify(heap,smalllist)
//         }
//     }

//     size(){
//         return this.heap.length
//     }
// }
// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */
// var topKFrequent = function(nums, k) {
//     const map = new Map()
//     const heap = new SmallHeap()
//     const result = []
//     //遍历统计
//     for (let num of nums) {
//         map.set(num,map.has(num) ? map.get(num) + 1 : 1 )
//     }

//     //构建优先级队列
//     for (let num of map.entries()){
//         if(heap.size() < k){
//             heap.push(num)
//         }

//         else {
//             if( heap.heap[0] && num[1] > heap.heap[0][1]){
//                 heap.push(num)
//                 heap.pop()
//             }
//         }
//     }

//     //倒序输出result
//     for (let i = k - 1; i >= 0 ; i--){
//         result[i] = heap.pop()[0]
//     }
//     return result
// };

// console.log(topKFrequent([3,0,1,0],1))

class topFrequentHeap {
	heap
	n
	constructor(n) {
		this.n = n
		this.heap = new Array(this.n)
	}
	init(arr) {
		this.heap = arr.slice()
		for (let i = Math.floor(this.n / 2) - 1; i >= 0; i--) {
			this.heapify(i)
		}
	}

	heapify(target) {
		const left = target * 2 + 1
		const right = target * 2 + 2
		let min = target
		if (left < this.heap.length && this.heap[left][1] < this.heap[min][1]) min = left
		if (right < this.heap.length && this.heap[right][1] < this.heap[min][1])
			min = right
		if (min !== target) {
			;[this.heap[min], this.heap[target]] = [this.heap[target], this.heap[min]]
			this.heapify(min)
		}
	}

	push(value) {
		//如果小于堆顶就不做动作
		if (value[1] > this.heap[0][1]) {
			this.heap[0] = value
			this.heapify(this.heap, 0)
		}
	}
}

const topKFrequent = (arr, k) => {
	//统计频率
	const map = new Map()
	arr.forEach(item => {
		map.set(item, (map.get(item) || 0) + 1)
	})
	const mapArray = Array.from(map)
	const heap = new topFrequentHeap(k)
	heap.init(mapArray.slice(0, k))
	for (let i = k; i < mapArray.length; i++) {
		heap.push(mapArray[i])
	}

	return heap.heap.map(item => item[0]).reverse()
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))
