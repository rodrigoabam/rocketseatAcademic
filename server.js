const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const modules = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false
})

server.get("/", (req, res) => {
    return res.render("about")
})

server.get("/instructor", (req, res) => {
    const teacher = {
        url: "https://avatars2.githubusercontent.com/u/6643122?s=400&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        name: "Mayk Brito",
        role: "Instrutor - Rocketseat",
        description: 'Programador full-stack, focado em trazer o melhor ensino para iniciantes em programação. Colaborador da <a href="/" target="_blank">Rocketseat</a>.'
    } 
    return res.render("instructor", { teacher })
})

server.get("/courses", (req, res) => {
    
    return res.render("courses", { modules })
})

server.get("/courses/:id", (req, res) => {
    const id =req.params.id

    const course = modules.find(function(course){
        return course.id == id
    })

    if(!course) {
        return res.send("Modulo não encontrado!")
    }

    return res.render("course", { module: course })
})

server.get("/profile", (req, res) => {
    const avatar = {
        url: "https://avatars2.githubusercontent.com/u/62651527?s=460&u=88f5d7501ea4e07aad56e509bcfe886288dba427&v=4",
        name: "Rodrigo Barbosa",
        role: "Aluno - Rocketseat Launchbase",
        description: "Estudante Front-End, focado em aprender todo o conteúdo ministrado no bootcamp da Rocketseat e se tornar um profissional altamente qualificado."
    }

    return res.render("profile", { avatar })
})

server.use(function(req, res) {
    res.status(404).render("not-found");
});

server.listen(5000, () => {
    console.log("server is running")
})