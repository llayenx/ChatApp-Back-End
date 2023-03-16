const User = require("../models/user.models")

class userServices{
    static async create(newUser){
        try {
            const userCreated = await User.create(newUser)
            return userCreated
        } catch (error) {
            throw error
            
        }
    }

    static async getAll(){
    try {
        const result = await User.findAll()
        return result
    } catch (error) {
        throw (error)
    }}
}
module.exports = userServices