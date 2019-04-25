const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true }
});

//export our model
module.exports = mongoose.model('User', ProductSchema);