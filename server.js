const sgMail = require('@sendgrid/mail') ;
const Email_api = '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';
sgMail.setApiKey(Email_api);

const message = {
    to : 'mainamathengej@gmail.com',
    from : 'mathenge.joseph18@students.dkut.ac.ke',
    subject : 'hello Wrold',
    text : 'Happy Birthday broo',
    html : '<p>Helllo , world </p>',
};

sgMail
.send(message)
.then(() => console.log('Email sent '))
.catch((error) => console.log(error.message));

//SG.4JHsbIBoR3qi_XdkhBG3Gw.0kclzIsCQHNRiS7hJpTh2isw5_jPSdhBUsCjz7Gb0kAPress Ctrl - C to copy