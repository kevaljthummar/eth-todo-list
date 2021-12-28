const { assert } = require("chai")

const ToDoList = artifacts.require('./ToDoList.sol')

contract('ToDoList', (accounts) => {
    before(async () => {
        this.todoList = await ToDoList.deployed()
    })

    it('deploys successfully', async () => {
        const address = await this.todoList.address
        assert.notEqual(address, 0x0)
        assert.notEqual(address, '')
        assert.notEqual(address, null)
        assert.notEqual(address, undefined)
    })

    it('list tasks', async () => {
        const taskCount = await this.todoList.taskCount()
        const task = await this.todoList.tasks(taskCount)
        assert.equal(task.id.toNumber(), taskCount.toNumber())
        assert.equal(task.content,"First Task")
        assert.equal(task.completed, false)
        assert.equal(taskCount.toNumber(), 1)
    })

})