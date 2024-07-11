/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Ride" (
    "id" SERIAL NOT NULL,
    "fromPoint" TEXT NOT NULL,
    "toPoint" TEXT NOT NULL,
    "isPublic" BOOLEAN NOT NULL,
    "seatsAvailable" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "rideDate" TIMESTAMP(3) NOT NULL,
    "rideCreationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" INTEGER NOT NULL,

    CONSTRAINT "Ride_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_RideToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_RideToUser_AB_unique" ON "_RideToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_RideToUser_B_index" ON "_RideToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Ride" ADD CONSTRAINT "Ride_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RideToUser" ADD CONSTRAINT "_RideToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Ride"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RideToUser" ADD CONSTRAINT "_RideToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
