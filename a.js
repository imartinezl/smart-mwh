
const sgMail = require('@sendgrid/mail');

const SENDGRID_API_KEY='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'
// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
sgMail.setApiKey(SENDGRID_API_KEY);
const msg = {
  to: 'inigomlap@gmail.com',
  from: 'imartinez@nemsolutions.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);
console.log(sgMail);
