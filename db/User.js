const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define movie schema
const userSchema = new Schema({
    email: {
    type: String,
    default: ''
    },
    userName: {
    type: String,
    default: ''
    },
    password: {
        type: String,
        default: ''
    },
    isDeleted: {
    type: Boolean,
    default: false
    },

 });

// Export Mongoose model
const User = mongoose.model("User", userSchema);

module.exports = User;