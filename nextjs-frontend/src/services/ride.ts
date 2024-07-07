"use server";

import { prismaConnect } from "@/db/prismaGenerate";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type User = {
  // Add other properties of User as needed
  name: string;
  email: string;
};

export type Ride = {
  id?: number;
  fromPoint: string;
  toPoint: string;
  isPublic: boolean;
  seatsAvailable: number;
  users?: any | undefined;
  name: string;
  rideDate: Date;
  rideCreationDate?: Date;
  createdBy: User;
  createdById: number;
};

export async function createRide(
  rideData: Omit<Ride, "id" | "rideCreationDate">
) {
  try {
    const ride = await prisma.ride.create({
      data: {
        ...rideData,
        rideCreationDate: new Date(),
        createdBy: undefined,
      },
    });
    return ride;
  } catch (error) {
    console.error("Error creating ride:", error);
    throw error;
  }
}
export default createRide;
