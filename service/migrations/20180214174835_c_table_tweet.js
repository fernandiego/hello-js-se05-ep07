
exports.up = knex => knex.schema
.createTable("tweet", tb=>{
    tb.increments("tweetid")
    tb.timestamp("tweetdtcriation").notNullable().defaultTo(knex.fn.now())
    tb.string("tweettext", 140)
    tb.integer("usuarioid").notNullable().references("usuario.usuarioid").onDelete("cascade")
})

exports.down = knex => knex.schema.dropTable("tweet")
