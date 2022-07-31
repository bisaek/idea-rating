-- CreateTable
CREATE TABLE "Idea_rating" (
    "id" TEXT NOT NULL,
    "IdeaId" TEXT NOT NULL,

    CONSTRAINT "Idea_rating_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Idea_rating" ADD CONSTRAINT "Idea_rating_IdeaId_fkey" FOREIGN KEY ("IdeaId") REFERENCES "Idea"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
