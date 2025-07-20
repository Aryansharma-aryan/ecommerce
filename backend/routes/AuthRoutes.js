const express=require("express");
const router= express.Router();
const {createProduct, insertProducts, getProductById, updateProduct, deleteProduct,getAllProducts} = require("../controller/ProductController");

router.post('/create', createProduct);
router.post('/insert', insertProducts);
router.get('/getAll', getAllProducts);
router.get('/getById/:id', getProductById);
router.patch('/update/:id', updateProduct);
router.delete('/delete/:id', deleteProduct);















module.exports=router;
