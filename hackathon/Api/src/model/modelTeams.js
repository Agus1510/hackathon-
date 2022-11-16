const { Schema, model } = require("mongoose");

const TeamSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    image: { String, required: [true, "Image is required"] },
    wins: {
      Number,
    },
    loses: {
      Number,
    },
    draws: {
      Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = model("Team", TeamSchema);
