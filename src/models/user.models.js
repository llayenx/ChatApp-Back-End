const {DataTypes} = require ("sequelize")
const bcrypt = require ("bcrypt")
const db = require("../utils/database")

const User = db.define("users", {
    id :{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING(30),
        unique: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
        validate:{
            isEmail:true
        }
    },
    password: {
        type: DataTypes.STRING(200),
        unique: true,
        allownul: false
     },
  
    firstname: {
    type: DataTypes.STRING(30),
    allowNull: false,
     },

    lastname: {
        type: DataTypes.STRING(30),
        allowNull: false,
        }
    

},{
    hooks:{
        beforeCreate :async(user)=>{
            try {
                const salt = await bcrypt.genSalt(10)
                const passwordHash= await bcrypt.hash(user.password, salt)
                user.password = passwordHash
            } catch (error) {
                throw error
                
            }
        }
    }

}
)

module.exports = User