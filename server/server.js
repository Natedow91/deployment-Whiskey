const express = require("express")
const cors = require("cors")
const path = require("path")

const app = express()
app.use(cors())
app.use(express.json())


const port = process.env.PORT || 4050

app.listen(port, () => {
    console.log(`serveris live on ${port}`)
})