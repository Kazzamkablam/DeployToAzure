const express = require('express');
const router = express.Router();

// Declaring the controllers
const ctrlMain = require('../controllers/ctrlMain'); // Controller for the Home page
const ctrlPelaajat = require('../controllers/ctrlPelaajat'); // Controller for the players
const ctrlStats = require('../controllers/ctrlStats'); // Controller for the statistics


// Defining the routes and associating the routes to their corresponding controllers
router.get('/', ctrlMain.index);  // Home page
router.get('/pelaajat', ctrlPelaajat.pelaajalista);  // List of players
router.get('/stats', ctrlStats.statslista);  // Statistiikkkaa

router
    .route('/pelaajat/add')
    .get (ctrlPelaajat.showForm)
    .post (ctrlPelaajat.addData);

module.exports = router;
