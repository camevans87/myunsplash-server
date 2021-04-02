import {
  addNewImage,
  getImages,
  deletImage,
} from '../controllers/imgControllers';

const routes = (app) => {
  app
    .route('/images')
    //GET request to get all images
    .get(getImages)

    //POST request to add an image
    .post(addNewImage);

  //create a route for specific image id
  app.route('/images/:imageId').delete(deletImage);
};

export default routes;
