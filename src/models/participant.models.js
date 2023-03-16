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
        allownul: false,
        field: "conversationparticipante_id"
     },

     userparticipanteId: {
        type: DataTypes.INTEGER,
        allownul: false,
        field: "userparticipante_id"
     },



})

module.exports = Participant