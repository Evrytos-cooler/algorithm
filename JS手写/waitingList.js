// 队列最长为 3
// 新增任务要 200ms 后执行
// 缓冲区有任务，推入会被取消
// 发送队列满，头部会被取消
class eventService {
	constructor() {
		this.runningArr = []
		this.timer = null
		this.waitingTask = null
	}

	// 新增任务
	push({ time, id }) {
		if (this.timer) {
			this.stopPrev(time)
		}
		this.waitingTask = { time, id }
		this.timer = setTimeout(() => {
			this.timer = null
			this.runningTask(this.waitingTask)
		}, 200)
	}

	// 缓冲器未到时，重置缓冲区
	stopPrev(time) {
		console.log(time, this.waitingTask.id, '缓冲器未到期退出')
		clearTimeout(this.timer)
		this.timer = null
		this.waitingTask = null
	}

	// 进入发送队列
	runningTask({ time, id }) {
		if (this.runningArr.length >= 3) {
			this.stopRunningTask()
		}
		this.runningArr.push({ time, id })

		const taskTimeout = setTimeout(() => {
			const index = this.runningArr.findIndex(item => item.id === id)
			if (index !== -1) {
				this.runningArr.splice(index, 1) // 完成后移除
				console.log(Date.now(), id, '发送成功')
			}
		}, 2000)

		console.log(Date.now(), id, '开始发送')
	}

	stopRunningTask() {
		const { id } = this.runningArr.shift()
		console.log(Date.now(), id, '队列超出取消')
	}
}
