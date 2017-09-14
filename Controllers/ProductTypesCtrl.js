'use strict';

// seting an object containing getAll to run product types within model folder
const { getAllProductTypes, getSingleProductType, addNewProductType } = require('../Model/ProductTypes');

// exporting the result of an anonymous function within getProductType while expecting require, response, and next to be passed in
module.exports.getProductTypes = (req, res, next) => {
  // executes the function getAll
  getAllProductTypes()
  // then runs an anonymous function while expecting prodType to be passed in
  .then( (data) => {
    // shows response status 200 on the json file relating to prodType
    res.status(200).json(data);
  })
  // if there's an error, it catches and runs the error message
  .catch( (err) => next(err));
};


module.exports.getOneProductType = ({params: {id}}, res, next) => {
  getSingleProductType(id)
  .then( (data) => {
    res.status(200).json(data);
  })
  .catch( (err) => next(err));
};

module.exports.addProductType = (req, res, next) => {
  addNewProductType(req.body)
  .then(Data => {
    res.sttus(200).json(Data);
  })
  .catch( err => nect(err));
};