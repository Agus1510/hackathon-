const { Schema, model } = require("mongoose");

const GameSchema = new Schema(
  {
    teamA:{
      type:String,
      required:true
    },
    teamB:{
      type:String,
      required:true,
    },
    goalsTeamA:{
      type:Number,
      required:true,
    },
    goalsTeamB:{
      type:Number,
      required:true
    },
    stadium:{
      type:string,
      required:true
    },
    //campo para validad la fecha det de cada pais
    timeZone:{
      type:Date,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = model("Game", GameSchema);