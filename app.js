const express = require("express")
const app = express()
const mongoose = require("mongoose")
const router = require("./routes/router")

//db
mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true, useUnifiedTopology: true })
//middleware
app.use(express.urlencoded({ extendend: true }))
app.use(express.json())

//router

app.use("/", router)
app.listen(3000, () => {
    console.log(`Server started on port`);
});