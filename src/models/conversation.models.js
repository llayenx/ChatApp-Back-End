const {DataTypes} = require ("sequelize")

const db = require ("../utils/database")

const Conversation = db.define("conversation", {
    id :{
        type: DataTypes.INTEGER,
        primaryKey : true, 
        autoIncrement: true,
        allowNull : false
    },

    title: {
        type: DataTypes.STRING(30),
        unique: true,
        allowNull: false
    },
    
    type :{
        type:DataTypes.STRING(15),
        allowNul : false,
        defaultValue: "pareja"
    },
    userconversationId: {
        type: DataTypes.INTEGER,
        allownul: false,
        field: "userconversation_id"
     },

})

module.exports = Conversation