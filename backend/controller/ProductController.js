const Product = require("../models/Products");

//insert the one products
const createProduct = async (req, res) => {
  try {
    const { name, description, price, image, category } = req.body;
    const product = new Product({
      name,
      description,
      price,
      image,
      category,
    });
    await product.save();
    //with status code
    res.status(201).json({ message: "product inserted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//insert products in bulk quantity in db
const insertProducts = async (req, res) =>{
    try {
        const products = req.body;
        await Product.insertMany(products);
        res.status(201).json({ message: "products inserted successfully" });

        
    } catch (error) {
        res.status(400).json({ message: error.message });
        
    }
}

//get all products
const getAllProducts = async (req, res) =>{
    try {
        const products = await Product.find();
        res.status(200).json(products);

        
    } catch (error) {
        res.status(400).json({ message: error.message });

        
    }
}
//get product by id
const getProductById = async (req, res) =>{
    try {
        const id=req.params.id;
        const product = await Product.findById(id);
        if(!product){
            return res.status(404).json({ message: "product not found" });
        }
        res.status(200).json(product);

        
    } catch (error) {
        res.status(400).json({ message: error.message });

        
    }
}
//update product by id
const updateProduct = async (req, res) =>{
    try {
        const id = req.params.id;
        const product = await Product.findByIdAndUpdate(id, req.body, {new: true});
        if(!product){
            return res.status(404).json({ message: "product not found" });
        }
        res.status(200).json(product);
        
    } catch (error) {
        res.status(400).json({ message: error.message });
        
    }
}
//delete product by id
const deleteProduct = async (req, res) =>{
    try {
        const id = req.params.id;
        await Product.findByIdAndDelete(id);
        res.status(200).json({ message: "product deleted" });


        
    } catch (error) {
        res.status(400).json({ message: error.message });

        
    }
}
module.exports={
    createProduct,
    insertProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    getAllProducts




}
