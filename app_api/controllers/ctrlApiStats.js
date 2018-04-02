
const mongoose = require ('mongoose');
const statsModel = mongoose.model ('statsi');

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
    statsModel.create(req.body, function(err, newWinner){
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
    statslista,
    addWinner
};