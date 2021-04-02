'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _imgControllers = require('../controllers/imgControllers');

var routes = function routes(app) {
  app.route('/images')
  //GET request to get all images
  .get(_imgControllers.getImages)

  //POST request to add an image
  .post(_imgControllers.addNewImage);

  //create a route for specific image id
  app.route('/images/:imageId').delete(_imgControllers.deletImage);
};

exports.default = routes;