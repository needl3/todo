const express = require('express')
const cors = require("cors")

app = express()

app.use(cors({origin: ["http://localhost:3000"]}))

app.use((req, res, next) => {
    console.log("=>  " + req.url)
    next()
})
app.use(express.json())

app.use("/api", require("./api.js"))

server = app.listen(8000, ()=>{
    console.log("Listening on ", server.address().address, server.address().port)
})