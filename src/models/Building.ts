import { Schema, model } from "mongoose";

const buildingSchema = new Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  campus: {
    type: Schema.Types.ObjectId, // This is a reference to the Campus model
  },
  photo: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Building = model("Building", buildingSchema);

export default Building;
