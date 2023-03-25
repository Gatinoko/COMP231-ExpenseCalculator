const Users = require('../../../database/models/user'),
passport = require('passport'),
localStrategy = require('passport-local').Strategy,
jwtStratery = require('passport-jwt').Strategy,
extractJwt = require('passport-jwt').ExtractJwt

// Registration auth strategy
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

// Login auth strategy
const localLogin = new localStrategy(
    {
        usernameField: 'email',
        passwordField: 'password'
    },
    async (email, password, done) => {
        try {
            const user = await Users.findOne({ email });
            if (!user) {
                return done('Email not registered', false);
            }

            const validate = user.isValidPassword(password);
            if (!validate) {
                return done('Wrong password', false);
            }
        
            return done(null, user, { message: 'Logged in successfully.' });
        } catch (error) {
            done(error);
        }
    }
)


// Jwt auth strategy

const jwtLogin = new jwtStratery(
    {
        secretOrKey: 'TOP_SECRET',
        jwtFromRequest: extractJwt.fromUrlQueryParameter('secret_token')
    },
    async (token, done) => {
        try {
            return done(null, token.user)
        } catch (error) {
            done(error)
        }
    }
)


passport.use('registration', localRegistration)
passport.use('login', localLogin)
passport.use('jwt', jwtLogin)