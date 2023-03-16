const participantServices = require("../services/participant.service") 

const createParticipants = async(req, res, next) =>{
    try {
        const data = req. body
        const result = await participantServices.createPairConversation(data)
        res.status(200).json(result)
    } catch (error) {
        next(error)
        
    }
}

const getParticipants = async( req, res, next)=>{
    try {
        
        const result = await participantServices.getAll();
        res.json(result)
        
    } catch (error) {
        next(error)
    }
}


module.exports = {
  createParticipants,
  getParticipants,
};