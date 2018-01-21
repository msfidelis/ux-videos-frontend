'use strict';

module.exports = (app) => {

    app.get('/login', (req, res) => {
        res.render('login', {layout: 'login'});
    });

    app.get('/dashboard', (req, res) => {
        res.render('dashboard', {layout: 'admin'});
    });

}