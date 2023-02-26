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
    console.log(req.body)
    const feedback = [req.body.feeling, req.body.understanding, req.body.support, req.body.comments]
    console.log(feedback)
    pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`, feedback)
    .then(() => {
        res.sendStatus(201)
    })
    .catch((error)=> {
        console.log(error)
        console.error(500);
    })
})

module.exports = router;