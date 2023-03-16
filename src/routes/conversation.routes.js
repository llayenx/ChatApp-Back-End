const {Router} = require ("express")
const Conversation = require("../models/conversation.models")
const {createConversation} = require ("../controllers/conversation.controllers")
const {getAllConversation} = require ("../controllers/conversation.controllers")
const {deleteConversation} = require ("../controllers/conversation.controllers")
const router = Router()

router.post("/api/v1/conversations", createConversation)
router.get("/api/v1/conversations", getAllConversation)
router.delete("/api/v1/conversations/:id", deleteConversation)





module.exports = router