const cookieHelper = require('../utils/cookieHelper'),
{ userRoles, userRolesKeys } = require('../../database/resources/userRoles'),
jwt = require('jsonwebtoken')

/*
    Middleware
*/
exports.loginMiddleware = async (req, res, next) => {
    const email = req.body.email
    const password = req.body.password

    const user = await Users.findOne({ email })
    if (user === null) {
        req.valid = false
        req.loginMessage = 'Email not registered'
        next() 
    }
    else if (!user.isValidPassword(password)) {
        req.valid = false
        req.loginMessage = 'Wrong password'
        next()
    }
    else {
        req.valid = true
        req.user = user
        req.loginMessage = 'Successfully logged in'
        next()
    }
}

exports.verifyUserMiddleware = async (req, res, next) => {
    const allowedRoles = [ userRoles.Admin ]
    verifyRolesMiddleware(req, res, next, allowedRoles)
}

/*
    Helper functions
*/
verifyRolesMiddleware = async (req, res, next, allowedRoles) => {
    const token = cookieHelper.geReqCookieValueByName(req, 'token')
    const { roles } = jwt.decode(token)
    const containsRoles = roles.every(role => {
        return allowedRoles.includes(role)
    })
    if (containsRoles === true) {
        req.validRoles = true
        next()
    }
    else {
        req.validRoles = false
        req.verifyRolesMessage = 'Not enough roles'
        next()
    }
    
}