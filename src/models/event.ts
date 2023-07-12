import { Schema, model } from 'mongoose';

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Event = model('Event', eventSchema);

export default Event;
