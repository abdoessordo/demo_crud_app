/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Produit" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "quantite" INTEGER NOT NULL,
    "prix_unitaire" INTEGER NOT NULL,

    CONSTRAINT "Produit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Produit_nom_key" ON "Produit"("nom");
