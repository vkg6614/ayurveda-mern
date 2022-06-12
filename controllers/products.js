const Product = require("../models/product.js");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create({
      ...req.body,
      createdAt: new Date().toISOString(),
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  createProduct,
  getProduct,
};
