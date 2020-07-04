const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")

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

server.use(function(req, res) {
    res.status(404).render("not-found");
  });

server.listen(5000, () => {
    console.log("server is running")
})