const express = require('express')
const app = express()


app.use(express.static("public"))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    console.log("Request Sent!")
    res.render("index")

}) 

app.listen(3000)