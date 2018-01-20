'use strict';

const axios = require('axios');

const API_URL = process.env.API_URL || 'http://localhost:3000/api/v1';

module.exports.paginate = (query) => {
    return axios(`${API_URL}/videos`, {params: query}).then(response => response.data);
} 