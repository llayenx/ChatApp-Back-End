const userServices = require("../services/user.services")
const bcrypt = require("bcrypt")

const userLogin = async(req, res, next) =>{
    try {
        const{email, password} = req.body
         const user = await userServices.getUser(email)
          if(!user){
            return next({
                status: 400,
                message: "email not found",
                errorName: "User not found"
            })
          }
          const isValidPassword = await bcrypt.compare(password, user.password)
          if(!isValidPassword){
            return next({
                status: 400,
                message: "Email does not match with that password",
                errorName: "Invalid password"
            })
          }
          const{id, username, firstname, lastname,} = user
          res.json ({id, username, email, firstname, lastname})
    } catch (error) {
           next (error)
    }

}

module.exports = {
    userLogin,
}