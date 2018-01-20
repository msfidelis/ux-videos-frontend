'use strict';

const axios = require('axios');

const API_URL = process.env.API_URL || 'http://localhost:3000/api/v1';

module.exports.paginate = () => {
    return axios({
        url : `${API_URL}/videos`,
        method: "GET"
    }).then(response => response.data);
} 