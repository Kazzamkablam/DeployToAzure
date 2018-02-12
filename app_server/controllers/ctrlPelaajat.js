
const pelaajalista = function(req, res){
    res.render('pelaajat',{
        winners:
        [
            {score:'10', player:'The Noob'},
            {score:'20', player:'The Joe'},
            {score:'30', player:'The Master'}

        ]});
};
module.exports = {
    pelaajalista
};