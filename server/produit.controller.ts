// Database : Postgres
// ORM : Prisma
import { Prisma, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

interface RequestBody {
  nom: string;
  quantite: number;
  prix_unitaire: number;
  img_path: string;
}

export const createProduct = async (req: Request, res: Response) => {
  const { nom, quantite, prix_unitaire, img_path }: RequestBody = req.body;

  if (!nom || !quantite || !prix_unitaire)
    return res.status(400).json({ message: "Missing fields" });

  let produit: Prisma.ProduitCreateInput = {
    nom: nom,
    query_name: nom.toLowerCase(),
    quantite: quantite,
    prix_unitaire: prix_unitaire,
    img: img_path,
  };

  try {
    const createdProduct = await prisma.produit.create({ data: produit });
    return res.status(200).json(createdProduct);
  } catch (err: any) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

export const findAllProductsAvailable = async (req: Request, res: Response) => {
  try {
    const produits = await prisma.produit.findMany({
      where: {
        quantite: {
          gt: 0,
        },
      },
    });
    return res.status(200).json(produits);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const findAllProducts = async (req: Request, res: Response) => {
  try {
    const produits = await prisma.produit.findMany({});
    return res.status(200).json(produits);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const findProductById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  try {
    const produit = await prisma.produit.findUnique({ where: { id: id } });
    return res.status(200).json(produit);
  } catch (err: any) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

export const findProduct = async (req: Request, res: Response) => {
  console.log("Searching for product ...");
  const search = req.query.nom as string;

  try {
    const produits = await prisma.produit.findMany({
      where: {
        query_name: {
          contains: search,
        },
      },
    });

    return res.status(200).json(produits);
  } catch (err: any) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { nom, quantite, prix_unitaire, img_path }: RequestBody = req.body;

  // allow quantity to be 0
  if (!nom || !prix_unitaire || quantite === undefined)
    return res.status(400).json({ message: "Missing fields" });

  let produit: Prisma.ProduitUpdateInput = {
    nom: nom,
    query_name: nom.toLowerCase(),
    quantite: quantite,
    prix_unitaire: prix_unitaire,
    img: img_path,
  };

  try {
    const updatedProduct = await prisma.produit.update({
      where: { id: id },
      data: produit,
    });
    return res.status(200).json(updatedProduct);
  } catch (err: any) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  try {
    const deletedProduct = await prisma.produit.delete({ where: { id: id } });
    return res.status(200).json(deletedProduct);
  } catch (err: any) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};
