"use client";

import { User } from "lucide-react";
import { signOut } from "next-auth/react";
import { useState } from "react";

export default function Navbar({
  authenticated,
  session,
}: {
  authenticated: boolean;
  session: any;
}) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="w-full h-16 bg-transparent flex flex-row justify-end items-center p-4 mb-2">
      <div
        className="w-12 h-12 rounded-full shadow-lg"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {session.user.image ? (
          <img
            src={
              session.user.image ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4n4D5jth4fm4GE7ut7lWW-04lnDO2OkD-sg&s"
            }
            alt="profileImage"
            className="rounded-full w-full h-full object-cover"
          />
        ) : (
          <div
            className=" h-12 w-12 rounded-full  border-inherit reverse-schemed"
            onClick={() => setShowDropdown(!showDropdown)}
            >
            <User
              className=" w-full h-full   rounded-full p-4  text-white cursor-pointer "
              size={30}
            />
          </div>
        )}
      </div>
      {showDropdown && (
        <div className="absolute top-20  w-fit p-4 h-16 shadow-lg rounded-lg flex flex-col items-center justify-center schemed ">
          <div className="text-lg poppins-semibold  ">{session.user.name}</div>
          <hr className="w-full border-current" />
          <button
            onClick={() => {
              signOut();
              setShowDropdown(false);
            }}
            className="text-red-500"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
