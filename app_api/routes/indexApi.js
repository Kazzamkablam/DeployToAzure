const express = require('express');
const router = express.Router();

const ctrlApiPelaajat = require ('../controllers/ctrlApiPelaajat');
const ctrlApiStats = require ('../controllers/ctrlApiStats');

router
    .route ('/stats')
    .get (ctrlApiStats.statslista)
    .post (ctrlApiStats.addWinner);



router
    .route ('/pelaajat')
    .get (ctrlApiPelaajat.pelaajalista)
    .post (ctrlApiPelaajat.addWinner);

module.exports = router;
