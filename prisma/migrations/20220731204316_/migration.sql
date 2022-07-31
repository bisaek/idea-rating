/*
  Warnings:

  - Added the required column `IdeaId` to the `Idea_rating` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Idea_rating" ADD COLUMN     "IdeaId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Idea_rating" ADD CONSTRAINT "Idea_rating_IdeaId_fkey" FOREIGN KEY ("IdeaId") REFERENCES "Idea"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
