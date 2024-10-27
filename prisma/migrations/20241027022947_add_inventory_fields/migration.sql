/*
  Warnings:

  - Added the required column `category` to the `Inventory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `room` to the `Inventory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `supply_level` to the `Inventory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Inventory" ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "room" TEXT NOT NULL,
ADD COLUMN     "supply_level" TEXT NOT NULL;
