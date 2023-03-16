const express = require( "express")
const cors = require ("cors")
const morgan = require("morgan")
const db = require("./utils/database")
const initModels = require("./models/initmodels")
const userRoutes = require("./routes/user.routes")
const conversationRoutes = require("./routes/conversation.routes")
const messageRoutes = require("./routes/message.routes")

initModels()


const app = express()
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

const PORT = 8002

db.authenticate()
.then(() => {
    console.log("Base de datos conectada")
})
.catch((error) => console.log(error))


db.sync({alter: true})
.then(() => console.log("base de datos syncronizada"))
.catch((error) => console.log(error))





app.get("/", (req,res)=>{
    res.send("welcome to muy chat")
})

app.use(userRoutes)
app.use(conversationRoutes)
app.use(messageRoutes)

app.listen(PORT, () =>{
    console.log("Servidor corriendo en el puerto 8002")
})