const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    jobTitle: {
        type: String
    },
    gender: {
        type: String
    },
},
    { timestamps: true }
);

const Users = mongoose.model("user", userSchema)
module.exports = Users;                     