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

/**
 * List Scrapy List
 * @param {*} token 
 */
module.exports.getVideoScrapyList = (token) => {
    return axios({
        method: "GET", 
        url: `${API_URL}/scrapy/videos`,
        headers: {
            "Authorization" : token
        }
    }).then(response => response.data);
};

module.exports.acceptScrapyVideo = (token, id) => {

    return axios({
        method: "POST",
        url: `${API_URL}/scrapy/videos/${id}/accept`,
        headers: {
            "Authorization" : token
        }
    }).then(response => response.data);

};

module.exports.denyScrapyVideo = (token, id) => {

    return axios({
        method: "DELETE",
        url: `${API_URL}/scrapy/videos/${id}/deny`,
        headers: {
            "Authorization" : token
        }
    }).then(response => response.data);

};