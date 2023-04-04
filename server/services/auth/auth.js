const passport = require("passport");

// JWT authentication function
exports.jwtAuth = passport.authenticate("jwt", { session: false, failureRedirect: "/login" });