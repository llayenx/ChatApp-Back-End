const nodemailer = require ("nodemailer")

const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port: 465, 
    secure: true,
    auth:{
        user:"llayenx@gmail.com",
        pass: "afatxejnaurcmefj"
    }

})

module.exports= transporter