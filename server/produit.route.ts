import express, { Router } from "express";
import {
  createProduct,
  findAllProducts,
  findProductById,
  findProduct,
  updateProduct,
  deleteProduct,
  findAllProductsAvailable,
  uploadImage,
} from "./produit.controller";

import { upload } from "./middlewares/uploadImg";

const router: Router = express.Router();

// CRUD : Create, Read, Update, Delete
// Routes

// Create
router.post("/add", createProduct);

// Read
router.get("/search", findProduct);
router.get("/all", findAllProducts);
router.get("/all/available", findAllProductsAvailable); // route for not out of stock products
router.get("/:id", findProductById);

// Update
router.put("/update/:id", updateProduct);

// Delete
router.delete("/delete/:id", deleteProduct);

// Upload
router.post("/upload", upload.single("image"), uploadImage);

export default router;
