const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5001); // port code you want to server to connect to locally

const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "yinghuazhouu@gmail.com",
        pass: "mgbatbocqcygjyfv",
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(
            "Contact form Email server is now running, ready to send emails."
        );
    }
});

router.post("/contact", async (req, res) => {
    const name = req.body.firstName + " " + req.body.lastName;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;

    const mail = {
        from: name,
        to: "yinghuazhouu@gmail.com",
        subject: "From Personal Web: " + subject,
        text: message,
        html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json(error);
        } else {
            res.json({ code: 200, status: "Email Message Sent" });
        }
    });
});
