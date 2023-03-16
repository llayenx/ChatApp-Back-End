const userServices = require("../services/user.services")


const createUser = async(req, res, next) =>{
    try {
        const newUser = req.body
        const result = await userServices.create(newUser)
        res.status(200).json(result)
        
    } catch (error) {
      next (error) 
    }  
}

const getAllUsers= async(req, res)=>{
    try {
        const allUsers= await userServices.getAll()
        res.json(allUsers)
        
    } catch (error) {
        res.status(400).json(error)
        
    }
}

module.exports = {
    createUser,
    getAllUsers
}