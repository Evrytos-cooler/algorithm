const canFinish = (numCourses, prerequisites) => {
	const courseList = new Array(numCourses).fill(0) //度数数组
	const map = {} //临接表
	let canFinishList = [] //执行队列
	let count = 0
	for (let [cur, pre] of prerequisites) {
		courseList[cur]++
		if (!map[pre]) {
			map[pre] = [cur] // 后置课程
		} else {
			map[pre].push(cur)
		}
	}
	for (let i = 0; i < courseList.length; i++) {
		if (courseList[i] === 0) canFinishList.push(i)
	}

	while (canFinishList.length) {
		const course = canFinishList.pop()
		count++
		if (map[course])
			for (let c of map[course]) {
				courseList[c]-- // 课程号就是度数数组的下标
				if (courseList[c] === 0) canFinishList.push(c)
			}
	}
	return count === numCourses
}

console.log(canFinish(2, [[0, 1]]))
