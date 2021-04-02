import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ImageSchema = new Schema({
  imageUrl: {
    type: String,
    required: 'Image URL is Required',
  },
  imageTag: {
    type: String,
    required: 'Image tag is required',
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
});
