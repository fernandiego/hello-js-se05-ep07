const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const app = express()
const cors = require("cors")
const knex = require("./config").knex

app.use(cors())
app.use(morgan("dev"))
app.use(bodyParser.json()) // what's this? what's this?

app.use("/tweet", require("./tweet").router)
app.use("/usuario", require("./usuario").router)

knex.migrate.latest().then(_ =>
    app.listen(3000, _ =>
        console.log("server online!")))