'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deletImage = exports.getImages = exports.addNewImage = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _imgModels = require('../models/imgModels');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Image = _mongoose2.default.model('Image', _imgModels.ImageSchema);

var addNewImage = exports.addNewImage = function addNewImage(req, res) {
  var newImage = new Image(req.body);
  newImage.save(function (err, image) {
    if (err) {
      res.send(err);
    }
    res.json(image);
  });
};

var getImages = exports.getImages = function getImages(req, res) {
  Image.find({}, function (err, images) {
    if (err) {
      res.send(err);
    }
    res.json(images);
  });
};

var deletImage = exports.deletImage = function deletImage(req, res) {
  Image.deleteOne({ _id: req.params.imageId }, function (err, image) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Successfully deleted image' });
  });
};