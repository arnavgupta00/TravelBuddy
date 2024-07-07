"use client";
import { X } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";
const BottomNav: React.FC = () => {

  const router = useRouter();
  return (
    <div className="flex justify-around items-center  p-2 w-full border-t-2 border-white reverse-schemed rounded-b-xl h-20 poppins-semibold">
      <div className="flex-1 text-center p-2 cursor-pointer text-xl poppins-semibold">Rides</div>
      <div className="absolute mb-12 h-20 w-20 rounded-full border-4 border-inherit reverse-schemed" onClick={()=>router.push("/create-ride")}>
        <X
          className=" w-full h-full rotate-45  rounded-full p-4  text-white cursor-pointer "
          size={30}
        />
      </div>

      <div className="flex-1 text-center p-2 cursor-pointer text-xl poppins-semibold">Your Rides</div>
    </div>
  );
};

export default BottomNav;
