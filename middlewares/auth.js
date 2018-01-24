'use strict';

/**
 * Validate session
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
module.exports.isLoggedIn = (req, res, next) => {

    if (req.session.user && req.session.user._id && req.session.user.email) {
        return next();
    } else {
        res.redirect('/login');
    }

}