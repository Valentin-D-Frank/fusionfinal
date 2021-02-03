const mongoose = require('mongoose')
const {schema, model, Schema } = require('mongoose')

const userSchema = new Schema({
    name:  {type: String},
    email: {type: String},
    password: {type: String},
    create_at: {type: Date, default: Date.now }
})
module.exports = model('Usuario', userSchema);