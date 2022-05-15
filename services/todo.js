const repo = require("../repository/todo")
const listTodoAll = async () => {
    try {
        const todos = await repo.listTodoAll()
        return new Promise((resolve, reject) => {
            resolve(todos)
        })
    } catch (error) {
        return new Promise((resolve, reject) => {
            reject(error)
        })
    }

}
const listTodo = async (id) => {
    try {
        const todo = await repo.listTodo(id)
        return new Promise((resolve, reject) => {
            resolve(todo)
        })
    } catch (error) {
        return new Promise((resolve, reject) => {
            reject(error)
        })
    }
}

const newTodo = async (data) => {
    try {
        const todo = await repo.newTodo(data)
        return new Promise((resolve, reject) => {
            resolve(todo)
        })
    } catch (error) {
        return new Promise((resolve, reject) => {
            reject(error)
        })
    }
}
module.exports = {
    listTodoAll,
    newTodo,
    listTodo
}