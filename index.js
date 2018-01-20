'use strict';

const api = require('./lib/api');
const helpers = require('./lib/helpers');

const exphbs = require('express-handlebars');
const express = require('express');
const path = require('path');
const app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main', helpers: helpers }));
app.use(express.static(path.join(__dirname, 'static')));
//app.enable('view cache');

app.set('view engine', 'handlebars');

app.get('/', (req, res) => {

    const query = {
        page : req.query.page || 1
    };

    api.paginate(query).then(data => {
        console.log(query);
        console.log(data);
        res.render('home', data);
    });

});

app.listen(process.env.PORT || 4000);