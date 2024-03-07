const nodemailer = require('nodemailer');

require('dotenv').config();


const enviarEmail = (req, res) =>{
    const {to, subject, html, text} = req.body;

    try {
        const transport = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.USER,
                pass: process.env.PASSWORD,
            }
        });
        
        transport.sendMail({
            from:`${process.env.NAME} <${process.env.FROM}>` ,
            to: to,
            subject: subject,
            html: html,
            text: text,
        }).then(() => {console.log('Email enviado com sucesso');
            res.status(200).json({msg: 'Email enviado com sucesso'});
        })
        .catch((erro) => {
            console.log(erro);
            res.status(500).json({msg: "Erro no servidor"})
        });
    } catch (error) {
        res.status(400).json({msg: 'Falha na conexão'})
    }
}

module.exports = {
    enviarEmail
}
