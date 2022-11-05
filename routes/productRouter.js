const productController = require('../controllers/productController');
const router = require('express').Router();

// product routes
router.post('/addproduct', productController.addProduct);

//router.get('/allproducts', productController.getAllProducts);

router.get('/published', productController.getPublishedProducts);



router.get('/:id', productController.getOneProduct);

router.put('/:id', productController.updateProduct);

router.delete('/:id', productController.deleteProduct);




module.exports = router;
