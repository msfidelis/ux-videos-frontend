'use strict';

const PORT = process.env.PORT || 4000;

const api = require('./lib/api');
const app = require('./config/server')();

app.listen(PORT, (err) => {
    console.log(`UXVideos Front is running on port: ${PORT}`);
});