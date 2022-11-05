const reviewController = require('../controllers/reviewController');
const reviewrouter = require('express').Router();


//review routes
reviewrouter.post('/addreview/:id', reviewController.addReview);

reviewrouter.get('/allreviews', reviewController.getAllReviews);

reviewrouter.get('/getproductreviews/:id', reviewController.getProductReviews);

module.exports = reviewrouter;