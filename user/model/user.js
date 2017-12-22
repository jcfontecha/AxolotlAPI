const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: "Enter your name"
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    creation_date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Users', UserSchema)