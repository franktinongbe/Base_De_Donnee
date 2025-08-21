const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profileImageUrl: {
    type: String,
    required: false,
  },
  memberSince: {
    type: Date,
    default: Date.now,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    enum: ["admin", "user", "userPro"],
    default: "user",
  },
});
