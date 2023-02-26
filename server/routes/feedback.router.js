const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// GET the feedback from database on Admin page
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

router.put('/:id', (req, res) => {
   const queryText= (`UPDATE "feedback" SET "flagged"= $1 WHERE "id" = $2`)
    let queryParams = [req.body.flagged, req.params.id]
    pool.query(queryText, queryParams)
    .then((dbRes) => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log(`Error GET /feedback`, error);
        res.sendStatus(500);
    });
})

//POST feedback after review page submit
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
        res.sendStatus(500);
    })
})

//POST flag
router.post('/', (req, res) => {
    console.log(req.body)
    const feedback = [req.body.flagged]
    console.log(feedback)
    pool.query(`INSERT INTO "feedback" ("flagged")
    VALUES ($1);`, feedback)
    .then(() => {
        res.sendStatus(201)
    })
    .catch((error)=> {
        console.log(error)
        res.sendStatus(500);
    })
})

module.exports = router;