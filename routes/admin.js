'use strict';

const auth      = require('../middlewares/auth');
const api       = require('../lib/api');

module.exports = (app) => {

    /**
     * Render Login Page
     */
    app.get('/login', (req, res) => {
        res.render('login', {layout: 'login'});
    });

    /**
     * Login Post - Comunicate with Backend API 
     * to validate user credentials
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
     * Logout action
     */
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/login');
    });

    /**
     * Render Dashboard
     */
    app.get('/dashboard', auth.isLoggedIn, (req, res) => {
        res.render('dashboard', {layout: 'admin'});
    });

    /**
     * Dasboard Videos
     */
    app.get('/dashboard/scrapy/videos', auth.isLoggedIn, (req, res) => {

        api.getVideoScrapyList(req.session.user.token)
            .then(videos => {
                const data = {};
                data.videos = videos;
                res.render('videos-scrapy-list', {layout: 'admin', data: data});
            }); 

    });

    /**
     * Dasboard Videos
     */
    app.get('/dashboard/videos', auth.isLoggedIn, (req, res) => {
        res.render('videos-list', {layout: 'admin'});
    });

}