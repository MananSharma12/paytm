const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://admin:*****5@cluster0.lka11u3.mongodb.net/")

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
})

const User = mongoose.model('User', userSchema)

module.exports = {
    User
}
