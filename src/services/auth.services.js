
const jwt = require("jsonwebtoken")

class AuthServices {
    static genToken(payload){
        try {
            const token = jwt.sign(payload, "LayenxLaventure", {
                algorithm: "HS512",
                expiresIn: "10m"

            })
            return token
        } catch (error) {
            throw (error)
        }
    }
}

module.exports = AuthServices