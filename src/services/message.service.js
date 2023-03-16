const Message = require("../models/message.models")

class messageServices{
    static async create(newMessage){
        try {
            const messageCreated = await Message.create(newMessage)
            return messageCreated
        } catch (error) {
            throw error
            
        }
    }

  
}
module.exports = messageServices