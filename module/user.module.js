const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String,
})

const user = mongoose.model("usseerr", userSchema);

module.exports = {user};