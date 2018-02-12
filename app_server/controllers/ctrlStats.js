
const statslista = function(req, res){
    res.render('stats',{
        winners:
            [
                {arvo:'30 min', kuvaus:'Pisin peliaika', player:'The Noob'},
                {arvo:'15',kuvaus:'Korkein pistemäärä', player:'The Joe'},
                {arvo:'8',kuvaus:'Vuoroja pelattu', player:'The Master'}

            ]});
};
module.exports = {
    statslista
};