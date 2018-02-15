const express = require("express")
const knex = require("./config").knex

const router = express.Router()

router.get("/list", (req, res) => {
    knex("tweet").select().then(ret => {
        res.send(ret)
    }).catch(err => {
        res.status(500).send(err)
        console.log(err)
    })
})

router.post("/save", (req, res) => {
    const tweet = req.body
    knex("tweet").insert(tweet, "tweetid").then(ret => {
        res.send(ret)
    }).catch(err => {
        res.status(500).send(err)
        console.log(err)
    })
})

router.put("/save", (req, res) => {
    const tweet = req.body
    const tweetid = req.body.tweetid
    knex("tweet").update(tweet).where({ tweetid })
        .then(ret => res.send(ret)).catch(err => {
            res.status(500).send(err)
            console.log(err)
        })
})

router.delete("/:tweetid", (req, res) => {
    const tweetid = req.params.tweetid
    knex("tweets").del().where({ tweetid })
        .then(ret => res.send("tweet destruido")).catch(err => {
            res.status(500).send(err)
            console.log(err)
        })
})

module.exports = { router }

