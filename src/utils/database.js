const {Sequelize} = require("sequelize")

const db = new Sequelize({
    database : "chat", 
    host : "localhost",
    port : "5433",
    username : "postgres",
    password : "931105",
    dialect : "postgres"
})

module.exports = db