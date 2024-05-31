const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://admin:*****5@cluster0.lka11u3.mongodb.net/")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 30,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 30,
    },
})

const User = mongoose.model('User', userSchema)

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        unique: true,
    },
    balance: {
        type: Number,
        required: true,
    },
})

const Account = mongoose.model('Account', accountSchema)

module.exports = {
    User,
    Account,
}
