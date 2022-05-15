const Todo = require("../model/Todo")

const listTodoAll = async () => {
    try {
        const todos = await Todo.find()
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
        const todo = await Todo.findOne({ _id: id })
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
        const todo = await Todo.create({
            title: data.title
        })
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