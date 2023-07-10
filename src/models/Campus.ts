import { Schema, model } from "mongoose";

const campusSchema = new Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  photo: {
    type: String,
  },
  description: {
    type: String,
  },
  buildings: [
    {
      type: Schema.Types.ObjectId,
    },
  ],
});

const Campus = model("Campus", campusSchema);

export default Campus;
