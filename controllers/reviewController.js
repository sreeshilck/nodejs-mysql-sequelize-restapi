const db = require('../models')

const Product = db.products;
const Review = db.reviews;


//1. create review
const addReview = async (req, res) => {

    let id = req.params.id

    let data = {
        rating: req.body.rating,
        description: req.body.description,
        productID: id
    }

    const review = await Review.create(data)
    res.status(201).send(review)
}


//2. get all reviews
const getAllReviews = async (req, res) => {
   
    const reviews = await Review.findAll({})
    res.status(200).send(reviews)
}


//3. get product reviews
const getProductReviews = async (req, res) => {

    let prodid = req.params.id;

    const productReviews = await Product.findAll({
        include: [{
            model: Review,
            as: 'reviews'
        }],
        where: { id: prodid}
    })

    res.status(200).send(productReviews)
}

module.exports = {
    addReview,
    getAllReviews,
    getProductReviews
}