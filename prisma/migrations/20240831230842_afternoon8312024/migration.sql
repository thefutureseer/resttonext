-- AlterTable
ALTER TABLE "Experience" ADD COLUMN     "feedback" JSONB,
ADD COLUMN     "statushistory" JSONB,
ADD COLUMN     "tags" TEXT[];

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "statushistory" JSONB,
ADD COLUMN     "tags" TEXT[];

-- AlterTable
ALTER TABLE "SpiritualLeader" ADD COLUMN     "interactions" JSONB,
ADD COLUMN     "tags" TEXT[];

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "interactions" JSONB,
ADD COLUMN     "preferences" JSONB,
ADD COLUMN     "tags" TEXT[];
