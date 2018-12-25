const express = require('express');

const app = express();

app.set('port', (process.env.PORT || 3333))
app.use(express.static('./dist'))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index_2.html`)
}).listen(app.get('port'), () => {
  console.log('App live...')
})
