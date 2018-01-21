
const api = require('../lib/api');

module.exports = (app) => {

    /**
     * Homepage {Index} Route
     */
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

};