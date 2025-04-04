var nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "phong@gmail",
        pass: "gtaz orwz owvr qhgm"
    }
});
module.exports = transporter 