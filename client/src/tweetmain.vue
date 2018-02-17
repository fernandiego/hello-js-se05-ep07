<template>
<nav class="panel">
  <p class="panel-heading">
    Crudão
  </p>
  <div class="panel-block">

<form @submit.prevent="dosave">
    <div class="field">
  <label class="label">Login:</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input" v-model="usuario.usuariologin">
  </div>
</div> 
          
<div class="field">
  <label class="label">Nome:</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input" v-model="usuario.usuarionome">
  </div>
</div> 
          <div class="field">
  <label class="label">Telefone:</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input" v-model="usuario.usuariotelefone">
  </div>
</div> 
          <div class="field">
  <label class="label">Data de Nascimento:</label>
  <div class="control">
    <input required class="input" type="text" placeholder="Text input" v-model="usuario.usuariodtnasc">
  </div>
</div> 
<div class="field is-grouped">
  <div class="control">
    <button class="button is-link" type="submit">Submit</button>
  </div>
</div>  
  </form>

  </div>

 <div class="panel-block"> 
  <ul>
      <li v-for="u in usuarios" :key="u.usuarioid">
          <div class="columns">
          <div class="column"> {{u.usuarionome}} </div>
          <div class="column">
              <button @click="usuario=u" class="button is-info">Editar</button>
          </div>
          <div class="column">
              <button @click="delet(u)" class="button is-danger">Excluir</button>
          </div>
          </div>
      </li>
   </ul>
 </div>
</nav>
</template>

<script>
const { usuarioapi } = require("./api")
module.exports = {
  name: "usuario",
  created() {
    this.listusuario();
  },
  data() {
    return {
      usuarios: [],
      usuario: {
        usuariologin: "",
        usuarionome: "",
        usuariodtnasc: "",
        usuariotelefone: ""
      }
    };
  },
  methods: {
    dosave() {
      usuarioapi.save(this.usuario).then(ret => {
        alert("Usuário salvo");
        this.listusuario();
        this.usuario = {
          usuariologin: "",
          usuarionome: "",
          usuariodtnasc: "",
          usuariotelefone: ""
        };
      });
    },
    listusuario() {
      usuarioapi.list().then(ret => (this.usuarios = ret.data));
    },
    delet(u) {
      usuarioapi.delet(u.usuarioid).then(ret => {
        alert("Usuário excluído");
        this.listusuario();
      });
    }
  }
};
</script>

<style>

</style>
