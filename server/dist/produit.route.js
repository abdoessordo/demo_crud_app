"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const produit_controller_1 = require("./produit.controller");
const uploadImg_1 = require("./middlewares/uploadImg");
const router = express_1.default.Router();
// CRUD : Create, Read, Update, Delete
// Routes
// Create
router.post("/add", produit_controller_1.createProduct);
// Read
router.get("/search", produit_controller_1.findProduct);
router.get("/all", produit_controller_1.findAllProducts);
router.get("/all/available", produit_controller_1.findAllProductsAvailable); // route for not out of stock products
router.get("/:id", produit_controller_1.findProductById);
// Update
router.put("/update/:id", produit_controller_1.updateProduct);
// Delete
router.delete("/delete/:id", produit_controller_1.deleteProduct);
// Upload
router.post("/upload", uploadImg_1.upload.single("image"), produit_controller_1.uploadImage);
exports.default = router;
