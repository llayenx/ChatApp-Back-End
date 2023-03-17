const Conversation = require("../models/conversation.models")
const Message = require("../models/message.models")
const Participant = require("../models/participant.models")
const User = require("../models/user.models")

class conversationServices{
    static async create(newConversation){
        try {
    
            const conversationCreated = await Conversation.create(newConversation)
            return conversationCreated
        } catch (error) {
            throw error
        
        }
    }
    static async getAll(){
        try {
            const result = await Conversation.findAll()
            return result
        } catch (error) {
            throw (error)
        }}

        
    static async delete(id){
        try {
            const result = await Conversation.destroy({
                where :{id}
            })
        } catch (error) {
            throw error
            
        }
    } 
    static async getOneConversationMessage(id) {
        try {
            const result = await Conversation.findByPk(id, {
                attributes: ["id", "title", "type"],
                include: [{
                   
                    model: Participant,
                    attributes: { exclude: ["createdAt", "updatedAt"] },
                    include: {
                        model: User,
                        attributes: { exclude: ["createdAt", "updatedAt"] },
                        include: {
                            model: Message,
                            attributes: { exclude: ["createdAt", "updatedAt"] },
                        },
                    }
                }]

            })
            return result
        } catch (error) {
           throw error
        }
    } 

}
module.exports = conversationServices