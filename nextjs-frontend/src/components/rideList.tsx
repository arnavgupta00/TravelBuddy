// RideList.tsx
"use client";
import { User } from "lucide-react";
import { signOut } from "next-auth/react";
import React from "react";

const RideList: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 flex-grow poppins-bold p-8 pt-0 pb-0 h-fit mb-40   w-full ">
      <div className="w-full h-32 reverse-schemed rounded-lg flex flex-col items-center justify-between p-4">
        

        <div className="h-2/3 w-full">
          <div className="flex flex-col justify-between w-full items-start">
            <div className="flex flex-row gap-2">
              <div className="text-lg ">From : </div>
              <div className="text-lg poppins-regular">Lagos</div>
            </div>
            <div className="flex flex-row gap-2">
              <div className="text-lg ">To :</div>
              <div className="text-lg poppins-regular">Abuja</div>
            </div>
          </div>
        </div>
        <div className="w-full h-fit self-end flex justify-between gap-2 items-center">
          <div className="flex flex-row gap-2">
            <div className="text-lg poppins-regular">12/12/2021</div>
          </div>
          <hr className="w-4  bg-white rotate-90" />

          <div className="text-lg flex gap-2">
            <User /> <span className="poppins-regular">5</span>
          </div>
          <hr className="w-4  bg-white rotate-90" />

          <button
            className="schemed p-2 pl-4 pr-4 rounded-md  poppins-regular "
            style={{}}
          >
            Join
          </button>
        </div>
      </div>
      <div className="w-full h-32 reverse-schemed rounded-lg flex flex-col items-center justify-between p-4">
        <div className="h-2/3 w-full">
          <div className="flex flex-col justify-between w-full items-start">
            <div className="flex flex-row gap-2">
              <div className="text-lg ">From : </div>
              <div className="text-lg poppins-regular">Lagos</div>
            </div>
            <div className="flex flex-row gap-2">
              <div className="text-lg ">To :</div>
              <div className="text-lg poppins-regular">Abuja</div>
            </div>
          </div>
        </div>
        <div className="w-full h-fit self-end flex justify-between gap-2 items-center">
          <div className="flex flex-row gap-2">
            <div className="text-lg poppins-regular">12/12/2021</div>
          </div>
          <hr className="w-4  bg-white rotate-90" />

          <div className="text-lg flex gap-2">
            <User /> <span className="poppins-regular">5</span>
          </div>
          <hr className="w-4  bg-white rotate-90" />

          <button
            className="schemed p-2 pl-4 pr-4 rounded-md  poppins-regular "
            style={{}}
          >
            Join
          </button>
        </div>
      </div>
      <div className="w-full h-32 reverse-schemed rounded-lg flex flex-col items-center justify-between p-4">
        <div className="h-2/3 w-full">
          <div className="flex flex-col justify-between w-full items-start">
            <div className="flex flex-row gap-2">
              <div className="text-lg ">From : </div>
              <div className="text-lg poppins-regular">Lagos</div>
            </div>
            <div className="flex flex-row gap-2">
              <div className="text-lg ">To :</div>
              <div className="text-lg poppins-regular">Abuja</div>
            </div>
          </div>
        </div>
        <div className="w-full h-fit self-end flex justify-between gap-2 items-center">
          <div className="flex flex-row gap-2">
            <div className="text-lg poppins-regular">12/12/2021</div>
          </div>
          <hr className="w-4  bg-white rotate-90" />

          <div className="text-lg flex gap-2">
            <User /> <span className="poppins-regular">5</span>
          </div>
          <hr className="w-4  bg-white rotate-90" />

          <button
            className="schemed p-2 pl-4 pr-4 rounded-md  poppins-regular "
            style={{}}
          >
            Join
          </button>
        </div>
      </div>
      <div className="w-full h-32 reverse-schemed rounded-lg flex flex-col items-center justify-between p-4">
        <div className="h-2/3 w-full">
          <div className="flex flex-col justify-between w-full items-start">
            <div className="flex flex-row gap-2">
              <div className="text-lg ">From : </div>
              <div className="text-lg poppins-regular">Lagos</div>
            </div>
            <div className="flex flex-row gap-2">
              <div className="text-lg ">To :</div>
              <div className="text-lg poppins-regular">Abuja</div>
            </div>
          </div>
        </div>
        <div className="w-full h-fit self-end flex justify-between gap-2 items-center">
          <div className="flex flex-row gap-2">
            <div className="text-lg poppins-regular">12/12/2021</div>
          </div>
          <hr className="w-4  bg-white rotate-90" />

          <div className="text-lg flex gap-2">
            <User /> <span className="poppins-regular">5</span>
          </div>
          <hr className="w-4  bg-white rotate-90" />

          <button
            className="schemed p-2 pl-4 pr-4 rounded-md  poppins-regular "
            style={{}}
          >
            Join
          </button>
        </div>
      </div>
      <div className="w-full h-32 bg-transparent rounded-lg flex flex-col items-center justify-between p-4"></div>
    </div>
  );
};

export default RideList;
