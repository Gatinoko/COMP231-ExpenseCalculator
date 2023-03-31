const next = require('next'),
express = require('express'),
connectMongodb = require('../database/connection'),
bodyParser = require('body-parser'),
initializeRouter = require('./routes/router')

/*
  Server configuration
*/
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()
const port = 3000

app.prepare()
.then(() => {
  
  /*
    Database connection
  */
  connectMongodb('COMP231-Expense-Calculator')

  /*
    Server setup
  */
  const server = express()
  server.use(bodyParser.urlencoded({ extended: false }))
  initializeRouter(server, handle)
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})