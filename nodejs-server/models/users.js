const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    image: String,
    id: Number,
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
