const {DataTypes} = require ("sequelize")
const db = require ("../utils/database")

const Message = db.define ("messages", {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING(30),
        allowNull: false
    },

    usermessageId: {
        type: DataTypes.INTEGER,
        allownul: false,
        field: "usersmessage_id"
     },


    conversationmessageId: {
        type: DataTypes.INTEGER,
        allownul: false,
        field: "conversationmessage_id"
     },



})

module.exports = Message