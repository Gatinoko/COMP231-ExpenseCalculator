exports.loginMiddleware = async (req, res, next) => {
    const email = req.body.email
    const password = req.body.password

    const user = await Users.findOne({ email })
    if (user === null) {
        req.valid = false
        req.message = 'Email not registered'
        next() 
    }
    else if (!user.isValidPassword(password)) {
        req.valid = false
        req.message = 'Wrong password'
        next()
    }
    else {
        req.valid = true
        req.user = user
        req.message = 'Successfully logged in'
        next()
    }
}