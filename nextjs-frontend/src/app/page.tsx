"use server";

import React from "react";
import RideList from "@/components/rideList";
import BottomNav from "@/components/bottomNav";

import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/auth/authConfig";
import { redirect } from "next/navigation";
import { signOut } from "next-auth/react";
import Navbar from "@/components/navbar";
const Page: React.FC = async () => {
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  console.log(session);

  if (!session) {
    redirect("/signin");
  }

  const authenticated = session?.user?.name ? true : false;
  var user = session?.user?.name?.split(" ");

  user?.length >= 1
    ? (user = user[0]?.charAt(0).toUpperCase() + user[0]?.slice(1))
    : (user = "Guest");

  return (
    <div className="flex flex-col items-center py-5 mx-auto w-full text-xm font-bold bg-white max-w-[480px] h-screen">
      <Navbar authenticated={authenticated} session={session} />
      <RideList />
      <div
        className="w-full   max-w-[480px] "
        style={{
          position: "fixed",
          height: "10%",
          top: "90%",
        }}
      >
        <BottomNav />
      </div>
    </div>
  );
};

export default Page;
