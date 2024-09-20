const express = require('express')
const server = express()


server.use(express.static("public"))
server.set("view engine", "ejs")

server.get("/", (req, res) => {
    console.log("Request Sent!")
    res.render("index")

}) 

server.listen(3000)