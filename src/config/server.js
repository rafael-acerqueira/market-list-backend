const port = process.env.PORT ? process.env.PORT : 3003

const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.listen(port, () => console.log(`BACKEND is running at port ${port}`))

module.exports = app