"use client";
import { X } from "lucide-react";
import React, { use, useEffect } from "react";
import { useRouter } from "next/navigation";
const BottomNav: React.FC = () => {
  const router = useRouter();

  const [isHomePage, setIsHomePage] = React.useState(false);

  useEffect(() => {
    const boll = window.location.pathname === "/";
    setIsHomePage(boll);
    boll ? console.log("Home Page") : console.log("Not Home Page");
  }, []);

  return (
    <div className="flex justify-around items-center  p-2 w-full border-t- border-white reverse-schemed h-20 poppins-semibold shadow-lg">
      <div
        className=" w-1/2  text-center p-4 pr-12 cursor-pointer text-xl poppins-semibold"
        onClick={() => {
          router.push("/");
        }}
        style={{
          fontSize: isHomePage ? "1.5rem" : "",
        }}
      >
        Rides
      </div>
      <div
        className="absolute mb-12 mr-4 h-20 w-20 rounded-full border-4 border-inherit reverse-schemed"
        onClick={() => router.push("/create-ride")}
      >
        <X
          className=" w-full h-full rotate-45  mr-4 rounded-full p-4  text-white cursor-pointer "
          size={30}
        />
      </div>

      <div
        className={
          " w-1/2  text-center p-4 pl-8 cursor-pointer  text-xl poppins-semibold "
        }
        style={{
          fontSize: !isHomePage ? "1.5rem" : "",
        }}
        onClick={() => {
          router.push("/your-ride");
        }}
      >
        Your Rides
      </div>
    </div>
  );
};

export default BottomNav;
