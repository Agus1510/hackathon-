const { Schema, model } = require("mongoose");

const ChoiceSchema = new Schema(
  {
    user:{
      type:OjectId,
      ref:'User'
    },
    team:{
      type:ObjectId,
      ref:'Team',
    },
    

  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = model("Choice", ChoiceSchema);