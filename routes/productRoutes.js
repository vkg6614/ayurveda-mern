const express = require("express");
const {
  getProducts,
  getProduct,
  createProduct,
} = require("../controllers/products");
const router = express.Router();

router.get("/", getProducts);

router.post("/", createProduct);
router.get("/:id", getProduct);

module.exports = router;
