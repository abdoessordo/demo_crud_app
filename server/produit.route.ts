import express from "express";
import { Router } from "express";
import {
  createProduct,
  findAllProducts,
  findProductById,
  findProduct,
  updateProduct,
  deleteProduct,
} from "./produit.controller";

const router: Router = express.Router();

// CRUD : Create, Read, Update, Delete
// Routes

// Create
router.post("/add", createProduct);

// Read
router.get("/search", findProduct);
router.get("/all", findAllProducts);
router.get("/:id", findProductById);

// Update
router.put("/update/:id", updateProduct);

// Delete
router.delete("/delete/:id", deleteProduct);

export default router;
