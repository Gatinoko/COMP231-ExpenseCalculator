const cookieHelper = require("../utils/cookieHelper"),
{ userRoles, userRolesKeys } = require("../../database/resources/userRoles"),
jwt = require("jsonwebtoken");

/*
    Middleware
*/
exports.loginMiddleware = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await Users.findOne({ email })
    if (user === null) {
        req.valid = false;
        req.alertMessage = "Email not registered";
        req.messageType = "warning";
        next();
    }
    else if (!user.isValidPassword(password)) {
        req.valid = false;
        req.alertMessage = "Wrong password";
        req.messageType = "danger";
        next();
    }
    else {
        req.valid = true;
        req.user = user;
        req.alertMessage = "Successfully logged in";
        req.messageType = "success";
        next();
    }
}

exports.registrationMidleware = async (req, res, next) => {

    // Searches for users with the provided email and username
    const email = req.body.email;
    const username = req.body.username;
    const userEmail = await Users.findOne({ email });
    const userUsername = await Users.findOne({ username });

    // If an email or username already exists, show error, otherwise proceed with registration
    if (userEmail !== null) {
        req.valid = false;
        req.alertMessage = "Email already registered";
        req.messageType = "danger";
        next();
    } 
    else if (userUsername !== null){
        req.valid = false;
        req.alertMessage = "Username already exists";
        req.messageType = "warning";
        next();
    }
    else {
        req.valid = true;
        req.alertMessage = "Successfully registered";
        req.messageType = "success";
        next();
    }
}

exports.verifyUserMiddleware = async (req, res, next) => {
    const allowedRoles = [ userRoles.Admin ];
    verifyRolesMiddleware(req, res, next, allowedRoles);
}

/*
    Helper functions
*/
verifyRolesMiddleware = async (req, res, next, allowedRoles) => {
    const token = cookieHelper.geReqCookieValueByName(req, "token");
    const { roles } = jwt.decode(token);
    const containsRoles = roles.every(role => {
        return allowedRoles.includes(role);
    })
    if (containsRoles === true) {
        req.validRoles = true;
        next();
    }
    else {
        req.validRoles = false;
        req.alertMessage = "Not enough roles";
        next();
    }
}