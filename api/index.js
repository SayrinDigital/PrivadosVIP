const express = require('express')
const app = express()

const bodyParser = require('body-parser');
app.use( bodyParser.json() );

var nodemailer = require('nodemailer');

app.get('/', (req, res, next) => {
  res.send('API root')
})

app.all('/notifyregister', (req, res, next) => {

  var transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
          user: 'joscri2698@gmail.com',
          pass: 'joscri2698'
      }
  });

  const mailOptions = {
  from: 'PrivadosVIP <joscri2698@gmail.com>', // sender address
  to: req.body.email, // list of receivers
  subject: 'Solicitud de Registro Recibida', // Subject line
  html: '<h1>PrivadosVIP</h1><p>Estimada, acabamos de recibir su solicitud en nuestro portal. Nos estaremos comunicando con usted una vez esté activa su cuenta.</p>'
};

transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     res.send(err)
   else
     res.send(info)
});


})

// export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
