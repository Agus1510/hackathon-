const { Schema, model } = require("mongoose");

const TeamSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    group:{
      type:String,
      required:true,
    },
    image:{
      type:String,
      required:true,
    },
    followers:{
      type:Number,
      required:true,
      default:0,
    },
    votes:Number,
    wins:Number,
    loses:Number,
    draws:Number,
    group:{
      type:String,
      required:true,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = model("Team", TeamSchema);
