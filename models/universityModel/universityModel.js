// import mongoose from 'mongoose'; // es6
const mongoose = require("mongoose"); // common js
const { Schema } = mongoose;

const universitySchema = new Schema(
  {
    name: String, // String is shorthand for {type: String}
    fatherName: String,
    course: String,
    city: String,
    highestEducation: String,
  },
  { timestamps: true }
);
const University = mongoose.model("university", universitySchema);
module.exports = University;
