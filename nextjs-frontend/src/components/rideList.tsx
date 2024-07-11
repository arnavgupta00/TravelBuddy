// RideList.tsx
"use client";
import { deleteRide, fetchYourRides, getRides, Ride } from "@/services/ride";
import { getUserByEmail } from "@/services/user";
import { Trash, Trash2, User } from "lucide-react";
import { signOut } from "next-auth/react";
import React, { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
interface RideListProps {
  youride: boolean;
  session: any;
}

const RideList: React.FC<RideListProps> = ({ youride, session }) => {
  const [rides, setRides] = useState<any[]>([]);
  const navigate = useRouter();
  useEffect(() => {
    console.log("Fetching rides", youride);
    const fetchRides = async () => {  
      const response = await getRides();
      console.log("Rides: ", response);
      setRides(response);
    };

    const fetchYourRidesF = async () => {
      console.log(session?.user?.email)
      const user = await getUserByEmail(session?.user?.email);
      console.log("User: ", user);
      if (!user) return null;
      const response = await fetchYourRides(user.id ? user.id : 0);
      console.log("Rides: ", response);
      setRides(response);
    };

    if (youride) {
      console.log("Fetching your rides");
      fetchYourRidesF();
    } else {
      fetchRides();
    }
  }, [youride]);

  return (
    <div className="flex flex-col items-center justify-start gap-4 flex-grow poppins-bold p-8 pt-0 pb-0 h-fit mb-40   w-full ">
      {rides.map((ride: Ride) => {
        return (
          <div className="w-full h-32 reverse-schemed rounded-lg flex flex-col items-center justify-between p-4">
            <div className="h-2/3 w-full">
              <div className="flex flex-col justify-between w-full items-start">
                <div className="flex flex-row gap-2">
                  <div className="text-lg ">From : </div>
                  <div className="text-lg poppins-regular">
                    {ride.fromPoint.slice(0, 20)}...
                  </div>
                </div>
                <div className="flex flex-row gap-2">
                  <div className="text-lg ">To :</div>
                  <div className="text-lg poppins-regular">
                    {ride.toPoint.slice(0, 20)}...
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-fit self-end flex justify-between gap-2 items-center">
              <div className="flex flex-row gap-2">
                <div className="text-lg poppins-regular">
                  {new Date(ride.rideDate).toLocaleDateString()}
                </div>
              </div>
              <hr className="w-4  bg-white rotate-90" />

              <div className="text-lg flex gap-2">
                <User />{" "}
                <span className="poppins-regular">{ride.seatsAvailable}</span>
              </div>
              <hr className="w-4  bg-white rotate-90" />
              {youride ? (
                <Trash2
                  className="cursor-pointer"
                  onClick={async () => {
                    console.log("Deleting ride");
                    try {
                      await deleteRide(ride.id ? ride.id : 0);
                      setRides(rides.filter((r) => r.id !== ride.id));
                    } catch (error) {
                      console.error("Error deleting ride:", error);
                    }
                  }}
                />
              ) : null}
              <button
                className="schemed p-2 pl-4 pr-4 rounded-md  poppins-regular "
                style={{}}
                onClick={() => {
                  navigate.push(`/chat/${ride.name}`);
                }}
              >
                Join
              </button>
            </div>
          </div>
        );
      })}

      <div className="w-full h-32 bg-transparent rounded-lg flex flex-col items-center justify-between p-4"></div>
    </div>
  );
};

export default RideList;
