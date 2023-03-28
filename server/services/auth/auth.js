const passport = require('passport'),
jwt = require('jsonwebtoken')

// Registration authentication function
exports.registrationAuth = passport.authenticate('registration', { session: false })

// JWT authentication function
exports.jwtAuth = passport.authenticate('jwt', { session: false, failureRedirect: '/login' })