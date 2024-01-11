require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const Routes = require("./routes/route.js")
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
app.use('/', Routes);


mongoose.connect(process.env.MONGO_URL)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log('DataBase Active and Server is running on port',process.env.PORT)
    })
})
.catch((error) => {
    console.log(error)
})