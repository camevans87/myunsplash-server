'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageSchema = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var ImageSchema = exports.ImageSchema = new Schema({
  imageUrl: {
    type: String,
    required: 'Image URL is Required'
  },
  imageTag: {
    type: String,
    required: 'Image tag is required'
  },
  dateAdded: {
    type: Date,
    default: Date.now
  }
});