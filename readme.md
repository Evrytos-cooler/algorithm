# 算法与数据结构实现库

## 项目简介

这是一个专注于算法与数据结构实现的 JavaScript 代码库，包含了从基础到高级的各种算法实现，以及常见 JavaScript 功能的模拟实现。仅用于学习和参考，后序会根据对应的模块算法进行总结，力求落实到方法论。提升个人代码能力，提高代码质量。

## 主要模块

### 1. 动态规划 (Dynamic Programming)

-   **背包问题**  
    `01背包`、`完全背包`、`多重背包`等经典问题实现
-   **序列问题**  
    最长公共子序列、编辑距离、回文子序列等
-   **路径问题**  
    最小路径和、不同路径等

### 2. 贪心算法 (Greedy Algorithms)

-   柠檬水找零
-   区间调度
-   跳跃游戏

### 3. 图论算法 (Graph Algorithms)

-   最小生成树(Prim 算法)
-   拓扑排序(课程表问题)
-   最短路径

### 4. 字符串与数组处理

-   子数组和问题
-   最长有效括号
-   下一个排列

### 5. JavaScript 核心实现

-   **Promise 相关**  
    完整 Promise 实现、超时控制、async/await 模拟
-   **数据结构**  
    LRU 缓存、链表、二叉树等
-   **工具函数**  
    防抖、节流、函数链式调用等

## 代码示例

### 子数组和问题

```javascript
// 前缀和优化解法
const subArraySumV2 = (arr, k) => {
	const map = new Map()
	let count = 0
	map.set(0, 1)
	let perfixSum = 0
	for (let num of arr) {
		perfixSum += num
		if (map.has(perfixSum - k)) {
			count += map.get(perfixSum - k)
		}
		map.set(perfixSum, (map.get(perfixSum) || 0) + 1)
	}
	return count
}
```
