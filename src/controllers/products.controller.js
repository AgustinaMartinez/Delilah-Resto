import Product from '../models/products.model';

export const getProducts = async (req, res) => {
    const products = await Product.find();
    res.status(200).json(products);
}

export const createProduct = async (req, res) => {
    const {description, unitPrice, imgURL} = req.body;
    const newProduct = new Product({description, unitPrice, imgURL});
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
}

export const getProductByID = async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
}

export const updateProductByID = async (req, res) => {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    res.status(200).json(updatedProduct);
}

export const deleteProductByID = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({message: "The product was deleted successfully."});
}
