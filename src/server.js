const express = require("express")
const server = express()

// Configurar pasta pública
server.use(express.static("public"))

// Udando uma template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// Configurar caminhos
// Página inicial
// req: Requisição   
// res: Resposta
server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search", (req, res) => {
    return res.render("search-results.html")
})

// Ligar o servidor
server.listen(3000)