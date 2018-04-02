const mongoose = require ('mongoose');

const pelaajaSchema = new mongoose.Schema({score:String, player: String});
const statsSchema = new mongoose.Schema({arvo:String, kuvaus: String, player:String});

mongoose.model ('pelaaja', pelaajaSchema, 'pelaajat');
mongoose.model ('statsi', statsSchema, 'statsit');