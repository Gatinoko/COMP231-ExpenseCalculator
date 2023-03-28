const Users = require('../../../database/models/user'),
passport = require('passport'),
localStrategy = require('passport-local').Strategy,
jwtStratery = require('passport-jwt').Strategy,
cookieHelper = require('../../utils/cookieHelper')

// Registration auth strategy definition
const localRegistration = new localStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    async (req, email, password, done) => {
        try {
            const formData = {
                email: req.query.email,
                username: req.query.username,
                password: req.query.password
            }
            const user = await Users.create(formData);
            return done(null, user);
        } catch (error) {
            done(error);
        }
    }
)

// Jwt auth strategy definition
const jwtLogin = new jwtStratery(
    {
        secretOrKey: 'TOP_SECRET',
        jwtFromRequest: (req) => {
            return cookieHelper.geReqCookieValueByName(req, 'token')
        }
    },
    async (jwtPayload, done) => {
        try {
            return done(null, jwtPayload.user)
        } catch (error) {
            done(error)
        }
    }
)


passport.use('registration', localRegistration)
passport.use('jwt', jwtLogin)