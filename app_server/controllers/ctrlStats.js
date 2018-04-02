const request = require ('request');
const apiURL = require ('./apiURLs');

const statslista = function(req, res){
    const path = 'api/stats';
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
                res.render ('stats', {winners: body});
            }
        }
    );


    /*
    res.render('stats',{
        winners:
            [
                {arvo:'30 min', kuvaus:'Pisin peliaika', player:'The Noob'},
                {arvo:'15',kuvaus:'Korkein pistemäärä', player:'The Joe'},
                {arvo:'8',kuvaus:'Vuoroja pelattu', player:'The Master'}

            ]});
*/
};
module.exports = {
    statslista
};