const {Router} = require ("express")
const User = require("../models/user.models")
const {createUser} = require("../controllers/user.controllers")
const{getAllUsers} = require("../controllers/user.controllers")
const {createUserValidator} = require("../validator/user.validator")

const router = Router()

router.post("/api/v1/users",createUserValidator, createUser)

router.get("/api/v1/users", getAllUsers)




module.exports = router