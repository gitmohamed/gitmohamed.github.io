const express = require('express');

const app = express();

app.set('port', (process.env.PORT || 3333))
app.use(express.static('./dist'))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index_2.html`)
}).post('/contact', (req, res) => {
  // let mailOpts, smtpTrans;
  // smtpTrans = nodemailer.createTransport({
  //   host: 'smtp.gmail.com',
  //   port: 465,
  //   secure: true,
  //   auth: {
  //     user: GMAIL_USER,
  //     pass: GMAIL_PASS
  //   }
  // });
  // mailOpts = {
  //   from: req.body.name + ' &lt;' + req.body.email + '&gt;',
  //   to: GMAIL_USER,
  //   subject: 'New message from contact form at tylerkrys.ca',
  //   text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
  // };
  // smtpTrans.sendMail(mailOpts, function (error, response) {
  //   if (error) {
  //     res.send(404);
  //   }
  //   else {
  //     res.send(200);
  //   }
  // });
}).listen(app.get('port'), () => {
  console.log('App live...')
})
