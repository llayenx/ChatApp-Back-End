const {Router} = require("express");
const {createParticipants} = require("../controllers/participant.controllers")
const {getParticipants} = require("../controllers/participant.controllers")

const router = Router();


router.post("/api/v1/participants", createParticipants);
 router.get("/api/v1/participants", getParticipants);

module.exports= router;