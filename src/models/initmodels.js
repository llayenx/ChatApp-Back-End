const User = require("./user.models")
const Conversation = require("./conversation.models")
const Message = require("./message.models")
const Participant = require("./participant.models")


const initModels = ()=>{
  

    User.hasMany(Message,{foreignKey:"usermessageId"})
    Message.belongsTo(User, {foreignKey: "usermessageId"})

    Conversation.hasMany(Message, {foreignKey: "conversationmessageId"})
    Message.belongsTo(User,{foreignKey: "conversationmessageId"})

    

    Conversation.hasMany(Participant, {foreignKey: "conversationparticipanteId"})
    Participant.belongsTo(Conversation,{foreignKey: "conversationparticipanteId"})

    User.hasMany(Participant, {foreignKey: "userparticipanteId"})
    Participant.belongsTo(User, {foreignKey: "userparticipanteId"})


 
}

module.exports =initModels