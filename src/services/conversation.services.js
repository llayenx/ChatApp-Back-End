const Conversation = require("../models/conversation.models")

class conversationServices{
    static async create(newUser){
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

}
module.exports = conversationServices