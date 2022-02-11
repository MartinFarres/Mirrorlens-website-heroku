const userService = require("../services/users");
function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;

    let emailCookie = req.cookies.userEmail;
    let userCookie = userService.findByField("email", emailCookie);
    if (userCookie) {
        req.session.userLogged = userCookie;
    }

    if (req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.isLogged = req.session.userLogged;
    }

    next();
}
module.exports = userLoggedMiddleware;
