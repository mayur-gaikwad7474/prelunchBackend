const mongoose = require('mongoose')
const schema = mongoose.Schema

const Premium = new schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
    },
    userName: {
        type: String,
        trim: true,
        lowercase: true
    }
})

module.exports = mongoose.model("Premium", Premium)