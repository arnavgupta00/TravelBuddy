"use server";

import { prismaConnect } from "@/db/prismaGenerate";

export default async function createUser(user: {
  name: string;
  email: string;
  password: string;
  phone: string;
}) {
  try {
    const prisma = prismaConnect;

    if (!user.name || !user.email || !user.password || !user.phone) {
      console.error("Missing required fields");
      return null;
    }

    const existingUser = await prisma.user.findMany({
      where: {
        OR: [{ email: user.email }, { phone: user.phone }],
      },
    });
    if (existingUser[0]) {
      console.error("User already exists");
      return null;
    }

    const newUser = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
        phone: user.phone,
      },
    });
    prisma.$disconnect();
    console.log("New user created: ", newUser);
    return newUser;
  } catch (error) {
    console.error("Failed to create user: ", error);
    return null;
  }
}


export async function getUserByEmail(email: string) {
  try {
    const prisma = prismaConnect;
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    prisma.$disconnect();
    return user;
  } catch (error) {
    console.error("Failed to get user by email: ", error);
    return null;
  }
}