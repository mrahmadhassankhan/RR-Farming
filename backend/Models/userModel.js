const mongoose = require("mongoose");
const bcrpt = require("bcryptjs");
// Created the schema for our user for MongoDb
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true, //whitespaces will be removed
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", async function(next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrpt.genSalt(10);
  this.password = await bcrpt.hash(this.password, salt); // Basically we are encrypting the password enter by user
});

const UserModel = mongoose.model("User", userSchema); // Created User Model

module.exports = UserModel;
