const express = require("express")
const controller = require("../controllers/todo")
const router = express.Router()

const todo = router
todo.route("/todo/all").get(controller.showTodoAll)
todo.route("/todo").get(controller.showTodo)
todo.route("/todo").post(controller.newTodo)
todo.route("/todo").post(controller.newTodo)
module.exports = router