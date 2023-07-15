/*
  Warnings:

  - A unique constraint covering the columns `[query_name]` on the table `Produit` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `query_name` to the `Produit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Produit" ADD COLUMN     "query_name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Produit_query_name_key" ON "Produit"("query_name");
