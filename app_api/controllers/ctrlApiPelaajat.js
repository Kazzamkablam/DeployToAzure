
const mongoose = require ('mongoose');
const pelaajaModel = mongoose.model ('pelaaja');

const pelaajalista = function (req, res) {


    pelaajaModel.find({}, function(err, winners){
        if (err){
            res
                .status(404).json(err);
        }
        else{
            res
                .status(200).json(winners);
        }
    });};


const addWinner = function (req, res) {

    pelaajaModel.create(req.body, function(err, newWinner){
            if (err){
                res.status(400).json(err);
            }
            else{
                res.status(201).json(newWinner);

            }
        }
    );
};

module.exports = {
    pelaajalista,
    addWinner
};
