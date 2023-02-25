const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// GET the feedback from database
router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "feedback";`)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error) => {
        console.log(`Error GET /feedback`, error);
        res.sendStatus(500);
    });
})

//POST feedback
router.post('/', (req, res) => {
    
})

module.exports = router;