const sender = require('../config/email-config');

const sendEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
    try {
        const response = sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody,
        });
        console.log(response);
    } catch (error) {
        console.log("Error in sending mail", error);
    }
}

module.exports = {
    sendEmail
}