const User = require("../models/user.models")

class userServices {
    static async getUser(email) {
        try {
            const user = await User.findOne({
                where: { email }
            })
            return user
        } catch (error) {
            throw error

        }
    }
    static async getOneUser(id) {
        try {
            const result = await User.findByPk(id, {
                attributes: ["id", "username", "email"],
                include: [{
                    model: Participant,
                    attributes: { exclude: ["createdAt", "updatedAt"] },
                    include: {
                        model: Conversation
                    }
                }]

            })
            return result
        } catch (error) {
           throw error
        }
    }
    static async create(newUser) {
        try {
            const userCreated = await User.create(newUser)
            return userCreated
        } catch (error) {
            throw error

        }
    }

    static async getAll() {
        try {
            const result = await User.findAll()
            return result
        } catch (error) {
            throw (error)
        }
    }
}
module.exports = userServices