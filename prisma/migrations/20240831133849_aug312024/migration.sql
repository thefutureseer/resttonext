-- CreateEnum
CREATE TYPE "role_type" AS ENUM ('user', 'spiritual_leader', 'spiritual_leader_admin', 'super_admin', 'moderator', 'support');

-- AlterTable
ALTER TABLE "Experience" ADD COLUMN     "updatedat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "SpiritualLeader" ADD COLUMN     "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "role" "role_type" NOT NULL DEFAULT 'spiritual_leader',
ADD COLUMN     "updatedat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "rating" DOUBLE PRECISION,
ADD COLUMN     "role" "role_type" NOT NULL DEFAULT 'user',
ADD COLUMN     "updated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
