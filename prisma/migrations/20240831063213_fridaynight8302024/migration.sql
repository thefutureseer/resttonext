-- CreateEnum
CREATE TYPE "ContactMethod" AS ENUM ('phone_call', 'text_message', 'video_call', 'in_person');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('pending', 'completed', 'canceled', 'resumed_later');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phonenumber" TEXT,
    "address" TEXT,
    "profilepicture" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SpiritualLeader" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "expertise" TEXT,
    "bio" TEXT,
    "profilepicture" TEXT,
    "contactinfo" TEXT,
    "rating" DOUBLE PRECISION,

    CONSTRAINT "SpiritualLeader_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "spiritualleaderid" INTEGER NOT NULL,
    "problemtosolve" TEXT NOT NULL,
    "experiencewanted" TEXT NOT NULL,
    "contactvia" "ContactMethod" NOT NULL,
    "status" "OrderStatus" NOT NULL DEFAULT 'pending',
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3) NOT NULL,
    "experienceid" INTEGER NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Experience" (
    "id" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "spiritualleaderid" INTEGER NOT NULL,
    "problemtosolve" TEXT NOT NULL,
    "experiencewanted" TEXT NOT NULL,
    "contactvia" "ContactMethod" NOT NULL,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Order_experienceid_key" ON "Order"("experienceid");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_spiritualleaderid_fkey" FOREIGN KEY ("spiritualleaderid") REFERENCES "SpiritualLeader"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_experienceid_fkey" FOREIGN KEY ("experienceid") REFERENCES "Experience"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_spiritualleaderid_fkey" FOREIGN KEY ("spiritualleaderid") REFERENCES "SpiritualLeader"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
