"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.findProduct = exports.findProductById = exports.findAllProducts = exports.createProduct = void 0;
// Database : Postgres
// ORM : Prisma
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nom, quantite, prix_unitaire } = req.body;
    if (!nom || !quantite || !prix_unitaire)
        return res.status(400).json({ message: "Missing fields" });
    let produit = {
        nom: nom,
        query_name: nom.toLowerCase(),
        quantite: quantite,
        prix_unitaire: prix_unitaire,
    };
    try {
        const createdProduct = yield prisma.produit.create({ data: produit });
        return res.status(200).json(createdProduct);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
});
exports.createProduct = createProduct;
const findAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const produits = yield prisma.produit.findMany();
        return res.status(200).json(produits);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.findAllProducts = findAllProducts;
const findProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const produit = yield prisma.produit.findUnique({ where: { id: id } });
        return res.status(200).json(produit);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
});
exports.findProductById = findProductById;
const findProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Searching for product ...");
    const search = req.query.nom;
    console.log("search: ", search);
    try {
        const produits = yield prisma.produit.findMany({
            where: {
                query_name: {
                    contains: search,
                },
            },
        });
        return res.status(200).json(produits);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
});
exports.findProduct = findProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { nom, quantite, prix_unitaire } = req.body;
    if (!nom || !quantite || !prix_unitaire)
        return res.status(400).json({ message: "Missing fields" });
    let produit = {
        nom: nom,
        query_name: nom.toLowerCase(),
        quantite: quantite,
        prix_unitaire: prix_unitaire,
    };
    try {
        const updatedProduct = yield prisma.produit.update({
            where: { id: id },
            data: produit,
        });
        return res.status(200).json(updatedProduct);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const deletedProduct = yield prisma.produit.delete({ where: { id: id } });
        return res.status(200).json(deletedProduct);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
});
exports.deleteProduct = deleteProduct;
