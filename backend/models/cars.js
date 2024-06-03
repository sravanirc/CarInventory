const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  model: {
    type: Number,
    required: true,
  },
  make: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: false,
  },
  RegistrationNumber: {
    type: String,
    required: true,
  },

  Owner: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
});

const carModel = mongoose.model("cars", carSchema);
module.exports = carModel;
