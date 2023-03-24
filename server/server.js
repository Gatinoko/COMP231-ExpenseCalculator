const next = require('next'),
express = require('express'),
bodyParser = require('body-parser'),
connectMongodb = require('../database/connection'),
controller = require('../server/controller'),
auth = require('./auth/auth')

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
    Server setup
  */
  const server = express()
  connectMongodb('COMP231-Expense-Calculator')
  require('./auth/authStrategies')
  server.use(bodyParser.urlencoded({ extended: false }))

  /* 
    API routes 
  */
  server.get('/api/users', (req, res) => { return controller.getAllUsers(req, res) }) // GET users
  server.get('/api/users/:_id', (req, res) => { return controller.getUser(req, res) }) // GET user

  /*
    Authentication routes for registration and login
  */
  server.post('/register',
    auth.registrationAuth, 
    (req, res) => { return controller.postUserRegistration(req, res) })
  server.post('/login',
    auth.loginAuth)

  // Route for all static HTML pages
  server.get('*', (req, res) => { return handle(req, res) })

  // Server's listen function that gets called on initialization
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})