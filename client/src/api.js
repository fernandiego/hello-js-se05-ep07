const axios = require("axios")
const api = axios.create({
    baseURL: "http://localhost:3000"
})

// axios
// .get("http://localhost:3000/usuario/list")
// .then(ret => (this.usuarios = ret.data));

const usuarioapi = {
    list: _ => api.get("/usuario/list"),
    // save: u => u.usuarioid ? api.put("/usuario/save", u) : api.post("/usuario/save", u)
    save: u => api[u.usuarioid?"put":"post"]("/usuario/save", u),
    delet: usuarioid => api.delete(`/usuario/${usuarioid}`)

}

module.exports = {
    usuarioapi
}