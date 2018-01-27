const api       = require('../lib/api');
const auth      = require('../middlewares/auth');

module.exports = (app) => {
    
    app.get('/proxy/scrapy/video/:id/accept', auth.isLoggedIn, (req, res) => {

        api.acceptScrapyVideo(req.session.user.token, req.params.id)
        .then(newVideo => {
            res.redirect('/dashboard/scrapy/videos/');
        })
        .catch(err => {
            console.log(err);
            res.redirect('/dashboard/scrapy/videos/');
        })


    });

    app.get('/proxy/scrapy/video/:id/deny', auth.isLoggedIn, (req, res) => {

        res.redirect('/dashboard/scrapy/videos/');

    });

};