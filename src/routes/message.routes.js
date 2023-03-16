const {Router} = require ("express")
const Message = require("../models/message.models")
const {createMessage} = require("../controllers/message.controllers")


const router = Router()

router.post("/api/v1/messages", createMessage)





module.exports = router