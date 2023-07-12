import { Schema, model } from 'mongoose';

const opportunitySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    duration: {
      type: String,
      required: false,
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

const Opportunity = model('Opportunity', opportunitySchema);

export default Opportunity;
