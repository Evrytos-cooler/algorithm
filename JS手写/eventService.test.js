class eventService {
	constructor() {
		this.runningArr = []
		this.timer = null
		this.waitingTask = null
	}

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

	stopPrev(time) {
		console.log(time, this.waitingTask.id, '缓冲器未到期退出')
		clearTimeout(this.timer)
		this.timer = null
		this.waitingTask = null
	}

	runningTask({ time, id }) {
		if (this.runningArr.length >= 3) {
			this.stopRunningTask()
		}
		this.runningArr.push({ time, id })
		setTimeout(() => {
			if (this.runningArr.find(item => item.id === id)) {
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

// 测试工具函数
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}

// 测试类
class EventServiceTester {
	constructor() {
		this.service = new eventService()
		this.logs = []
		this.originalLog = console.log

		// 捕获console.log用于验证
		console.log = (...args) => {
			this.logs.push(args.join(' '))
			this.originalLog(...args)
		}
	}

	// 清理
	cleanup() {
		console.log = this.originalLog
		if (this.service.timer) {
			clearTimeout(this.service.timer)
		}
	}

	// 断言工具
	assert(condition, message) {
		if (!condition) {
			throw new Error(`测试失败: ${message}`)
		}
	}

	// 测试1: 基本功能测试
	async testBasicFunctionality() {
		console.log('=== 测试1: 基本功能测试 ===')

		this.service.push({ time: Date.now(), id: 'task1' })
		this.assert(this.service.waitingTask.id === 'task1', '任务应进入等待队列')

		await sleep(250)
		this.assert(this.service.runningArr.length === 1, '任务应进入运行队列')
		this.assert(this.service.runningArr[0].id === 'task1', '运行队列应包含task1')

		await sleep(2100)
		this.assert(this.service.runningArr.length === 0, '任务应在2秒后完成')

		console.log('✅ 基本功能测试通过')
	}

	// 测试2: 缓冲器重置测试
	async testBufferReset() {
		console.log('=== 测试2: 缓冲器重置测试 ===')

		this.service.push({ time: Date.now(), id: 'task1' })
		await sleep(100) // 在缓冲期内

		this.service.push({ time: Date.now(), id: 'task2' })
		this.assert(this.service.waitingTask.id === 'task2', '新任务应替换旧任务')
		this.assert(
			this.logs.some(log => log.includes('缓冲器未到期退出')),
			'应记录缓冲器重置'
		)

		await sleep(250)
		this.assert(this.service.runningArr.length === 1, '只应有1个任务运行')
		this.assert(this.service.runningArr[0].id === 'task2', '应运行task2')

		console.log('✅ 缓冲器重置测试通过')
	}

	// 测试3: 队列满测试
	async testQueueFull() {
		console.log('=== 测试3: 队列满测试 ===')

		// 先填满队列
		this.service.runningArr = [
			{ id: 'running1', time: Date.now() },
			{ id: 'running2', time: Date.now() },
			{ id: 'running3', time: Date.now() },
		]

		this.service.push({ time: Date.now(), id: 'newTask' })
		await sleep(250)

		this.assert(this.service.runningArr.length === 3, '队列应保持3个任务')
		this.assert(this.service.runningArr[0].id === 'running2', '最老的任务应被移除')
		this.assert(this.service.runningArr[2].id === 'newTask', '新任务应加入')

		console.log('✅ 队列满测试通过')
	}

	// 测试4: 并发测试
	async testConcurrentTasks() {
		console.log('=== 测试4: 并发测试 ===')

		// 快速连续添加多个任务
		for (let i = 1; i <= 5; i++) {
			this.service.push({ time: Date.now(), id: `task${i}` })
			await sleep(50) // 间隔小于缓冲期
		}

		await sleep(250)
		this.assert(this.service.runningArr.length === 1, '最终只应运行最后一个任务')
		this.assert(this.service.runningArr[0].id === 'task5', '应运行task5')

		console.log('✅ 并发测试通过')
	}

	// 测试5: 任务取消测试
	async testTaskCancellation() {
		console.log('=== 测试5: 任务取消测试 ===')

		// 添加任务到运行队列
		this.service.runningTask({ time: Date.now(), id: 'cancelTask' })

		// 模拟在发送成功前移除任务
		setTimeout(() => {
			this.service.runningArr = this.service.runningArr.filter(
				item => item.id !== 'cancelTask'
			)
		}, 1000)

		await sleep(2100)
		this.assert(
			!this.logs.some(log => log.includes('cancelTask 发送成功')),
			'被取消的任务不应发送成功'
		)

		console.log('✅ 任务取消测试通过')
	}

	// 测试6: 边界条件测试
	async testEdgeCases() {
		console.log('=== 测试6: 边界条件测试 ===')

		// 测试空队列
		this.assert(this.service.runningArr.length === 0, '初始队列为空')
		this.assert(this.service.waitingTask === null, '初始无等待任务')

		// 测试空对象
		this.service.push({})
		await sleep(250)
		this.assert(this.service.runningArr.length === 1, '空对象也应被处理')

		console.log('✅ 边界条件测试通过')
	}

	// 运行所有测试
	async runAllTests() {
		try {
			await this.testBasicFunctionality()
			await this.testBufferReset()
			await this.testQueueFull()
			await this.testConcurrentTasks()
			await this.testTaskCancellation()
			await this.testEdgeCases()

			console.log('\n🎉 所有测试通过！')
			return true
		} catch (error) {
			console.error('\n❌ 测试失败:', error.message)
			return false
		} finally {
			this.cleanup()
		}
	}
}

// 使用示例
async function runTests() {
	const tester = new EventServiceTester()
	await tester.runAllTests()
}

// 运行测试
runTests()
