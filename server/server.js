const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const routes = require('./routes')

const app = express()

dotenv.config()

mongoose.connect(
    process.env.MONGO_URL
    ).then(() => console.log("connection successful")).catch((err) => console.log(err))

app.listen(process.env.PORT || 3000, () => {
    console.log("listening at port 3000")
})

app.use(express.json())

app.use('/', routes)