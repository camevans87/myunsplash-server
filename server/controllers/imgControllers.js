import mongoose from 'mongoose';

import { ImageSchema } from '../models/imgModels';

const Image = mongoose.model('Image', ImageSchema);

export const addNewImage = (req, res) => {
  let newImage = new Image(req.body);
  newImage.save((err, image) => {
    if (err) {
      res.send(err);
    }
    res.json(image);
  });
};

export const getImages = (req, res) => {
  Image.find({}, (err, images) => {
    if (err) {
      res.send(err);
    }
    res.json(images);
  });
};

export const deletImage = (req, res) => {
  Image.deleteOne({ _id: req.params.imageId }, (err, image) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Successfully deleted image' });
  });
};
