const db = require("../utils/database")
const Users = require("../models/user.models")
const initModels = require("../models/initmodels")

initModels();

const users = [
  {
    username: "Iannacus",
    email: "ian.rosas@academlo.com",
    isVerified: true,
    password: "12345672",
  },
  {
    username: "Harvey",
    email: "harvey@academlo.com",
    isVerified: true,
    password: "12345671",
  },
  {
    username: "Noe4271",
    email: "noe@academlo.com",
    isVerified: true,
    password: "12345673",
  },
  {
    username: "Robert",
    email: "jose.roberto@academlo.com",
    isVerified: true,
    password: "12345674",
  },
  {
    username: "Diana",
    email: "diana@academlo.com",
    islVerified: true,
    password: "12345675",
  },
  {
    username: "Cesarin",
    email: "cesar@academlo.com",
    isVerified: true,
    password: "12345676",
  },
];

db.sync({force: true})
.then(async()=>{
    const result = await Users.bulkCreate(users)
    if(result) console.log("usuarios creados exitosamente")
})

/* const categories = [
  { name: "Java Script" },
  { name: "React" },
  { name: "Node" },
  { name: "HTML" },
  { name: "CSS" },
  { name: "Python" },
  { name: "Bases de Datos" },
]; */