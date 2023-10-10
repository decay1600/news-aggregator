const mongoose = require("mongoose");
var validator = require("validator");
const bcrypt = require("bcrypt");
const Article = require("./articleModel");

const userSchema = new mongoose.Schema({
  name: { type: String, require: [true, "Please tell your name"] },
  email: {
    type: String,
    require: [true, "Please tell the email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please write a valid Email"],
  },
  password: {
    type: String,
    require: [true, "Please provide a password"],
    minlength: 8,
    select: false, // by default set this false so that it doesnt show on query o/p unless asked
  },
  passwordConfirm: {
    type: String,
    requrie: [true, "Please confirm your password"],
    validate: {
      // This only works with Create and save!!!
      validator: function (incomingPassword) {
        return this.password === incomingPassword;
      },
      message: "Password are not the same",
    },
  },
  category: {
    type: String,
    // default: "technology",
  },
  sources: {
    type: String,
    // default: "bbc-news",
  },
  country: {
    type: String,
  },
});

// On the schema create a method of comparing password
//! when using compareSyn it will block the main thread
userSchema.methods.correctPassword = async (
  candiatePassword,
  correctPassword
) => await bcrypt.compare(candiatePassword, correctPassword);

// Create a Model out of the Schema
const User = mongoose.model("User", userSchema);

module.exports = User;
