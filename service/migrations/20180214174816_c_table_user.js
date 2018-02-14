
exports.up = knex => knex.schema
.createTable("usuario", tb => {
  tb.increments("usuarioid")
  tb.string("usuariologin")
  tb.string("usuarionome")
  tb.string("usuariotelefone")
  tb.timestamp("usuariodtnasc").notNullable()

})

exports.down = knex => knex.schema.dropTable("usuario")
