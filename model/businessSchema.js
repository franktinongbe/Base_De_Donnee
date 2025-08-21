const mongoose = require("mongoose");
const businessSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  typeOfBusiness: {
    type: {
      type: String,
      enum: ["restaurant", "hotel", "bar", "cafe", "Autres"],
      required: true,
    },
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  gallleryImagesUrl: {
    type: [String],
    required: true,
  },
});
