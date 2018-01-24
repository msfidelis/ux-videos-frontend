'use strict';

const auth      = require('../middlewares/auth');
const api       = require('../lib/api');

module.exports = (app) => {

    /**
     * 
     */
    app.get('/login', (req, res) => {
        res.render('login', {layout: 'login'});
    });

    /**
     * 
     */
    app.post('/login', (req, res) => {

        api.login(req.body).then(success => {
            req.session.user = success.data;
            res.redirect('/dashboard');
        }).catch(err =>  {
            console.log(err);
            res.redirect('/login');
        });

    });


    /**
     * 
     */
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/login');
    });

    /**
     * 
     */
    app.get('/dashboard', auth.isLoggedIn, (req, res) => {
        res.render('dashboard', {layout: 'admin'});
    });

}