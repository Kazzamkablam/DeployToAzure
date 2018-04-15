const request = require ('request');
const apiURL = require ('./apiURLs');

const showForm = function (req, res) {
    res.render('pelaajat_add');
};

const addData = function (req, res) {
    const path='api/pelaajat';

    const postdata = {
        score: req.body.score,
        player: req.body.player
    };

    const requestOptions = {
        url: apiURL.server + path,
        method: 'POST',
        json: postdata
    };

    request (
        requestOptions,
        function (err, response) {
            if (response.statusCode === 201) {
                res.redirect('/pelaajat');
            } else {
                res.render('error', {message: 'Error adding data: ' + response.statusMessage + ' (' + response.statusCode + ')' });
            }
        }
    );

}
const pelaajalista = function(req, res){
    const path = 'api/pelaajat';
    const requestOptions = {
        url : apiURL.server + path,
        method : 'GET',
        json : {},
        qs : {}
    };

request(
    requestOptions,
        function (err, response, body) {
            if (err) {
                res.render('error', {message: err.message});
            } else if (response.statusCode !== 200) {
                res.render('error', {message: 'Error accessing API ' + response.statusMessage + " (" + response.statusCode+ ")" });
            } else if (!(body instanceof Array)) {
                res.render('error', {message: 'Unexpected response data'});
            } else if (!body.length){
                res.render('error', {message: 'No documents in collection'});
            } else
            {
                res.render ('pelaajat', {winners: body});
            }
        }
);


};

    /*
    res.render('pelaajat',{
        winners:
        [
            {score:'10', player:'The Noob'},
            {score:'20', player:'The Joe'},
            {score:'30', player:'The Master'}

        ]});
};
*/
module.exports = {
    pelaajalista,
    showForm,
    addData
};