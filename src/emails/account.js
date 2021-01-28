const sgMail = require('@sendgrid/mail')
 
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from: 'shubhamkumar70426@gmail.com',
        subject: 'Thanks for joining in',
        text: `Welcome to the app, ${name}, Let me know how are you`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'shubhamkumar70426@gmail.com',
        subject:'Cancelation email',
        text: `Are you sure ${name} you want to delete your account what else we can do`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}