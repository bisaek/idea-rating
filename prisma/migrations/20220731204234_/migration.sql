/*
  Warnings:

  - You are about to drop the column `IdeaId` on the `Idea_rating` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Idea_rating" DROP CONSTRAINT "Idea_rating_IdeaId_fkey";

-- AlterTable
ALTER TABLE "Idea_rating" DROP COLUMN "IdeaId";
