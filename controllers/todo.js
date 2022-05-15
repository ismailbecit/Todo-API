const service = require("../services/todo")
const showTodoAll = async (req, res) => {
    try {
        const todos = await service.listTodoAll()
        return res.status(200).json({
            "message": "Kayıtlar Listelendi",
            "data": todos
        })
    } catch (error) {
        return res.status(400).json({
            "message": "Kayıt Listeleme Sırasında Bir Hata Oluştu",
            "data": error
        })
    }
}

const showTodo = async (req, res) => {
    try {
        const todos = await service.listTodo(req.body.id)
        return res.status(200).json({
            "message": "Kayıt Listelendi",
            "data": todos
        })
    } catch (error) {
        return res.status(400).json({
            "message": "Kayıt Listeleme Sırasında Bir Hata Oluştu",
            "data": error
        })
    }
}

const newTodo = async (req, res) => {
    try {
        const request = req.body
        const todo = await service.newTodo(request)
        res.status(201).json({
            "message": "Todo Eklendi",
            "data": todo
        })
    } catch (error) {
        return res.status(400).json({
            "message": "Todo Ekleme İşlemi Sırasında Bir Hata Oluştu",
            "data": error
        })
    }

}
module.exports = {
    newTodo, showTodo, showTodoAll

}