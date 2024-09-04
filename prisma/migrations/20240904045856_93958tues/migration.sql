/*
  Warnings:

  - You are about to drop the `Experience` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SpiritualLeader` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_OrderExperiences` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "contactmethod" AS ENUM ('phone_call', 'text_message', 'video_call', 'in_person');

-- CreateEnum
CREATE TYPE "orderstatus" AS ENUM ('pending', 'completed', 'canceled', 'resumed_later');

-- DropForeignKey
ALTER TABLE "Experience" DROP CONSTRAINT "Experience_spiritualleaderid_fkey";

-- DropForeignKey
ALTER TABLE "Experience" DROP CONSTRAINT "Experience_userid_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_spiritualleaderid_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_userid_fkey";

-- DropForeignKey
ALTER TABLE "_OrderExperiences" DROP CONSTRAINT "_OrderExperiences_A_fkey";

-- DropForeignKey
ALTER TABLE "_OrderExperiences" DROP CONSTRAINT "_OrderExperiences_B_fkey";

-- DropTable
DROP TABLE "Experience";

-- DropTable
DROP TABLE "Order";

-- DropTable
DROP TABLE "SpiritualLeader";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "_OrderExperiences";

-- DropEnum
DROP TYPE "ContactMethod";

-- DropEnum
DROP TYPE "OrderStatus";

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phonenumber" TEXT,
    "address" TEXT,
    "profilepicture" TEXT,
    "interactions" JSONB,
    "role" "role_type" NOT NULL DEFAULT 'user',
    "rating" DOUBLE PRECISION,
    "preferences" JSONB,
    "tags" TEXT[],
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "spiritualleader" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "expertise" TEXT,
    "bio" TEXT,
    "profilepicture" TEXT,
    "contactinfo" TEXT,
    "rating" DOUBLE PRECISION,
    "tags" TEXT[],
    "interactions" JSONB,
    "role" "role_type" NOT NULL DEFAULT 'spiritual_leader',
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "spiritualleader_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order" (
    "id" TEXT NOT NULL,
    "userid" TEXT NOT NULL,
    "spiritualleaderid" TEXT NOT NULL,
    "problemtosolve" TEXT NOT NULL,
    "experiencewanted" TEXT NOT NULL,
    "tags" TEXT[],
    "contactvia" "contactmethod" NOT NULL,
    "status" "orderstatus" NOT NULL DEFAULT 'pending',
    "statushistory" JSONB,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,
    "experienceid" TEXT NOT NULL,

    CONSTRAINT "order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "experience" (
    "id" TEXT NOT NULL,
    "userid" TEXT NOT NULL,
    "spiritualleaderid" TEXT NOT NULL,
    "problemtosolve" TEXT NOT NULL,
    "experiencewanted" TEXT NOT NULL,
    "tags" TEXT[],
    "statushistory" JSONB,
    "contactvia" "contactmethod" NOT NULL,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "feedback" JSONB,

    CONSTRAINT "experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_orderexperiences" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "order_experienceid_key" ON "order"("experienceid");

-- CreateIndex
CREATE UNIQUE INDEX "_orderexperiences_AB_unique" ON "_orderexperiences"("A", "B");

-- CreateIndex
CREATE INDEX "_orderexperiences_B_index" ON "_orderexperiences"("B");

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_userid_fkey" FOREIGN KEY ("userid") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_spiritualleaderid_fkey" FOREIGN KEY ("spiritualleaderid") REFERENCES "spiritualleader"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "experience" ADD CONSTRAINT "experience_userid_fkey" FOREIGN KEY ("userid") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "experience" ADD CONSTRAINT "experience_spiritualleaderid_fkey" FOREIGN KEY ("spiritualleaderid") REFERENCES "spiritualleader"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_orderexperiences" ADD CONSTRAINT "_orderexperiences_A_fkey" FOREIGN KEY ("A") REFERENCES "experience"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_orderexperiences" ADD CONSTRAINT "_orderexperiences_B_fkey" FOREIGN KEY ("B") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE CASCADE;
