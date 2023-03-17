const {DataTypes}= require ("sequelize")
const db = require ("../utils/database")

const Participant = db.define ("participants", {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    conversationparticipanteId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "conversationparticipante_id"
     },

     userparticipanteId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "userparticipante_id"
     },



})

module.exports = Participant