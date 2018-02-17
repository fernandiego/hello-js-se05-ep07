const axios = require("axios")
const api = axios.create({
    baseURL: "http://localhost:3000"
})


const usuarioapi = {
    list: _ => api.get("/usuario/list"),
    save: u => api[u.usuarioid?"put":"post"]("/usuario/save", u),
    delet: usuarioid => api.delete(`/usuario/${usuarioid}`)

}

module.exports = {
    usuarioapi
}