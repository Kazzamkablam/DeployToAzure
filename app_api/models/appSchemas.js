const mongoose = require ('mongoose');

const pelaajaSchema = new mongoose.Schema({score:String, player: String});
const statsSchema = new mongoose.Schema({arvo:String, kuvaus: String, player:String});

mongoose.model ('pelaajat', pelaajaSchema, 'pelaajat');
mongoose.model ('statsit', statsSchema, 'statsit');