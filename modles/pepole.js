const mongoose = require("mongoose");

const pepoleSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: ture,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  { timestamps: true },
);
const Pepole = mongoose.model("Pepole", pepoleSchema);
module.exports = Pepole;
