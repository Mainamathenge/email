const nodemailer = require('nodemailer');
 
 
let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mathenge.joseph18@students.dkut.ac.ke',
        pass: 'wakaHATOLI001#'
    }
});
 
let mailDetails = {
    from: 'mathenge.joseph18@students.dkut.ac.ke',
    to: 'mainamathengej@gmail.com',
    subject: 'Test mail',
    text: 'Node.js testing mail for GeeksforGeeks'
};
 
mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log('Error Occurs');
    } else {
        console.log('Email sent successfully');
    }
});