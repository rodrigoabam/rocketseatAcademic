const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set("view engine", "html")

nunjucks.configure("views", {
    express: server
})

server.get("/", (req, res) => {
    return res.render("about")
})

server.get("/instructor", (req, res) => {
    return res.render("instructor")
})

server.get("/courses", (req, res) => {
    return res.render("courses")
})

server.get("/profile", (req, res) => {
    return res.render("profile")
})

server.listen(5000, () => {
    console.log("server is running")
})