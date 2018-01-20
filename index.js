'use strict';

const api = require('./lib/api');

const exphbs = require('express-handlebars');
const express = require('express');
const path = require('path');
const app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.use(express.static(path.join(__dirname, 'static')));
//app.enable('view cache');

app.set('view engine', 'handlebars');

app.get('/', (req, res) => {

    api.paginate().then(data => {
        console.log(data);
        res.render('home', data);
    });

});

app.listen(process.env.PORT || 4000);