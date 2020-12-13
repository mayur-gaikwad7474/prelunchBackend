const express = require('express')
const cors = require('cors')
const compression = require('compression')
const mongoose = require('mongoose')

//setting the app
const app = express()

//connect to the data base
try {
    mongoose.connect('mongodb://localhost:27017/waitlist', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
} catch (error) {
    console.log(error)
}

//middle ware
app.use(express.json())
app.use(cors())
app.use(compression())

app.use('/joinlist', require('./Router/Emaillist'))

//Run the app on 4000 port
app.listen(4000 || process.env.PORT, () => {
    console.log("listening on 4000")
})


