'use strict';

const axios = require('axios');

const API_URL = process.env.API_URL || 'http://localhost:3000/api/v1';

module.exports.paginate = (query) => {
    return axios(`${API_URL}/videos`, {params: query}).then(response => response.data);
};

module.exports.listTags = () => {
    return axios(`${API_URL}/tags`).then(response => response.data);
};

/**
 * Login on Backend
 * @param {*} credentials 
 */
module.exports.login = (credentials) => {
    return axios({
        method: "POST",
        url: `${API_URL}/users/auth`,
        headers: {
            "Content-type" : "application/json",
        },
        data: credentials
    });
};