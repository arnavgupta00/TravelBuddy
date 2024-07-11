"use server";

import { prismaConnect } from "@/db/prismaGenerate";
import { PrismaClient } from "@prisma/client";
import { getUserByEmail } from "./user";


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
  createdBy: any;
  createdById: any; // Make createdById optional
};

export async function createRide(
  rideData:Ride , session: any
) {
  const prisma = new PrismaClient();

  const user = await getUserByEmail(session?.user?.email);
  console.log("User: ", user);
  try {
    if(!user) return null;
    const ride = await prisma.ride.create({
      data: {
        ...rideData,
        rideCreationDate: new Date(),
        createdBy: undefined,
        createdById: user?.id ? user?.id : 0,
        
      },
    });
    prisma.$disconnect();
    console.log("New ride created: ", ride);
    return ride;
  } catch (error) {
    console.error("Error creating ride:", error);
    throw error;
  }
}



export const  fetchYourRides= async (userId: number) => {

  const prisma = new PrismaClient();
  try {
    const rides = await prisma.ride.findMany({
      where: {
        createdById: userId,
      },
    });
    prisma.$disconnect();
    return rides;
  } catch (error) {
    console.error("Error fetching rides:", error);
    throw error;
  }
};


export async function getRides() {
  const prisma = new PrismaClient();
  try {
    const rides = await prisma.ride.findMany();
    prisma.$disconnect();
    return rides;
  } catch (error) {
    console.error("Error fetching rides:", error);
    throw error;
  }
}

export async function deleteRide(rideId: number) {
  const prisma = new PrismaClient();
  try {
    const ride = await prisma.ride.delete({
      where: {
        id: rideId,
      },
    });
    prisma.$disconnect();
    return ride;
  } catch (error) {
    console.error("Error deleting ride:", error);
    throw error;
  }
}