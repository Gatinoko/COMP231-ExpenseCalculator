
const controller = require("./routerController"),
auth = require("../services/auth/auth"),
middleware = require("./middleware");

function initializeRouter(server, handle) {

    require("../services/auth/passport");

    /* 
        API routes 
    */
    server.get("/api/get/users", 
        (req, res) => { return controller.getAllUsers(req, res) });
    server.get("/api/get/users/:_id", 
        (req, res) => { return controller.getUser(req, res) });
    server.post("/api/post/userExpenses/:_id",
        (req, res) => { return controller.postUserExpense(req, res) });
    server.post("/api/post/userExpenseGroups/:_id",
        (req, res) => { return controller.postUserExpenseGroup(req, res) });

    /*
        Authentication routes for registration, login, and logout
    */
    server.post("/register",
        middleware.registrationMidleware, 
        (req, res) => { return controller.postUserRegistration(req, res) });
    server.post("/login",
        middleware.loginMiddleware,
        (req, res) => { return controller.postUserLogin(req, res) });
    server.get("/logout", 
        (req, res) => { return controller.getUserLogout(req, res) });

    /*
        Secured routes
    */
    server.get("/dashboard/:_id",
        auth.jwtAuth, 
        (req, res) => { return handle(req, res) });

    // Route for all static HTML pages
    server.get("*", (req, res) => { return handle(req, res) });
}

module.exports = initializeRouter;