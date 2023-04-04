const Users = require("../../../database/models/user"),
passport = require("passport"),
localStrategy = require("passport-local").Strategy,
jwtStratery = require("passport-jwt").Strategy,
cookieHelper = require("../../utils/cookieHelper");

// Jwt auth strategy definition
const jwtLogin = new jwtStratery(
    {
        secretOrKey: "TOP_SECRET",
        jwtFromRequest: (req) => {
            return cookieHelper.geReqCookieValueByName(req, "token");
        }
    },
    async (jwtPayload, done) => {
        try {
            return done(null, jwtPayload.user);
        } catch (error) {
            done(error);
        }
    }
)

passport.use("jwt", jwtLogin);