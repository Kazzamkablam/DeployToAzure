
const mongoose = require ('mongoose');
const statsModel = mongoose.model ('statsit');

const statslista = function (req, res) {


    statsModel.find({}, function(err, winners){
        if (err){
            res
                .status(404).json(err);
        }
        else{
            res
                .status(200).json(winners);
        }
    });
};

const addWinner = function (req, res) {
    res.status (201).json({"Add Winner" : "Work in progress"});
}

module.exports = {
    statslista,
    addWinner
};