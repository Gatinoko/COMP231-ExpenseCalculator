
const controller = require('./routerController'),
auth = require('./services/auth/auth')


module.exports =  function router(server, handle) {

    require('./services/auth/passport')

    /* 
        API routes 
    */
    server.get('/api/users', 
        (req, res) => { return controller.getAllUsers(req, res) }) // GET users
    server.get('/api/users/:_id', 
        (req, res) => { return controller.getUser(req, res) }) // GET user

    /*
        Authentication routes for registration and login
    */
    server.post('/register',
        auth.registrationAuth, 
        (req, res) => { return controller.postUserRegistration(req, res) })
    server.post('/login',
        (req, res) => { auth.loginAuth(req, res) })

    /*
        Secured routes
    */
    server.get('/dashboard',
        auth.jwtAuth, 
        (req, res) => { return handle(req, res) })

    // Route for all static HTML pages
    server.get('*', (req, res) => { return handle(req, res) })
}