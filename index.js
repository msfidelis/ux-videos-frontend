'use strict';

const api = require('./lib/api');
const helpers = require('./lib/helpers');

const exphbs = require('express-handlebars');
const express = require('express');
const path = require('path');
const Promise = require('bluebird');
const app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main', helpers: helpers }));
app.use(express.static(path.join(__dirname, 'static')));
//app.enable('view cache');

app.set('view engine', 'handlebars');

app.get('/', (req, res) => {

    const query = {
        page : req.query.page || 1
    };

    if (req.query.tag) {
        query.tags = req.query.tag;
    }

    Promise.all([
        api.paginate(query),
        api.listTags()
    ]).then(results => {
        const data = results[0];
        data.tags = results[1];
        res.render('home', data);
    });

});

app.listen(process.env.PORT || 4000);