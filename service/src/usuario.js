const express = require("express")
const knex = require("./config").knex

const router = express.Router()

router.get("/list", (req, res) => {
    knex("usuario").select().then(ret => {
        res.send(ret)
    }).catch(err => {
        res.status(500).send(err)
        console.log(err)
    })
})

router.post("/save", (req, res) => {
    const usuario = req.body
    knex("usuario").insert(usuario, "usuarioid").then(ret => {
        res.send(ret)
    }).cath(err => {
        res.status(500).send(err)
        console.log(err)
    })
})

router.put("/save", (req, res) => {
    const usuario = req.body
    const usuarioid = req.body.usuarioid
    knex("usuario").update(usuario).where({ usuarioid })
        .then(ret => res.send(ret)).catch(err => {
            res.status(500).send(err)
            console.log(err)
        })
})

router.delete("/:usuarioid", (req, res) => {
    const usuarioid = req.params.usuarioid
    knex("usuarios").del().where({ usuarioid })
        .then(ret => res.send("usuario destruido")).catch(err => {
            res.status(500).send(err)
            console.log(err)
        })
})

module.exports = { router }

