const passport = require('passport'),
jwt = require('jsonwebtoken')

// JWT authentication function
exports.jwtAuth = passport.authenticate('jwt', { session: false, failureRedirect: '/login' })