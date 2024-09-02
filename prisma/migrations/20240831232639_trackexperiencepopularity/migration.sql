-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_experienceid_fkey";

-- CreateTable
CREATE TABLE "_OrderExperiences" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_OrderExperiences_AB_unique" ON "_OrderExperiences"("A", "B");

-- CreateIndex
CREATE INDEX "_OrderExperiences_B_index" ON "_OrderExperiences"("B");

-- AddForeignKey
ALTER TABLE "_OrderExperiences" ADD CONSTRAINT "_OrderExperiences_A_fkey" FOREIGN KEY ("A") REFERENCES "Experience"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrderExperiences" ADD CONSTRAINT "_OrderExperiences_B_fkey" FOREIGN KEY ("B") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;
