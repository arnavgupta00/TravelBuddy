
import { NEXT_AUTH_CONFIG } from "@/auth/authConfig";
import CreateRideComp from "@/components/creatRideComp";
import LocationSelector from "@/components/locationSelector";
import MapComponent from "@/components/map";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

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
    <CreateRideComp session={session} />
  );
};

export default Page;
