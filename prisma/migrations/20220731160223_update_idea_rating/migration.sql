/*
  Warnings:

  - Added the required column `rate` to the `Idea_rating` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Idea_rating" ADD COLUMN     "rate" INTEGER NOT NULL;
