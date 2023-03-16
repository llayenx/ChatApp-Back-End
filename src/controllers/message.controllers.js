const messageServices = require("../services/message.service")


const createMessage = async(req, res) =>{
    try {
        const newMessage = req.body
        const result = await messageServices.create(newMessage)
        res.status(200).json(result)
        
    } catch (error) {
       res.status(400).json(error) 
    }
}



module.exports = {
    createMessage,
    
}