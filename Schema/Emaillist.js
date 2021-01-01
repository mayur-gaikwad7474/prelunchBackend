const mongoose = require('mongoose')
const schema = mongoose.Schema

const Email = new schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    userName: {
        type: String,
        trim: true,
        lowercase: true
    },
    count: { type: Number, default: 0 }
})

module.exports = mongoose.model("Email", Email)