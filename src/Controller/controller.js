import MongoClient from '../DB/MongoClient.js';
import nodemailer from 'nodemailer';

const db = await MongoClient();
const Controller = {
    EmailAndIdea: async (req, res) => {
        const {name, email , subject, idea} = req.body;

        const obj = {
            "email": email,
            "idea": idea,
            "name" : name,
            "subject" : subject
        }
        const collection = db.collection("smit");
        const result = collection.insertOne(obj);
        console.log("handle");
        res.status(200).send("Data saved!");
    },
    EmailSub: async (req, res) => {
        const { email } = req.body;
     
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'polarasmit2504@gmail.com',
                pass: 'vgkzyfdyzwlonoqn' // your valid Gmail App Password
            }
        });
    
        const info = await transporter.sendMail({
            from: '"sam pol 👻" <polarasmit2504@gmail.com>', // MANDATORY
            to: email, // dynamic user input from frontend
            subject: "🎉 Welcome to Our Newsletter!",
            text: "Thanks for subscribing to our newsletter!",
            html: `<b>Welcome!</b><br>We're excited to have you with us.`
        });
    
        console.log("Email sent: ", info.messageId);
        res.send({ success: true, message: "Email sent!" });
    }    
    
}

export { Controller };