"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import createUser from "@/services/user";

export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [collegeId, setCollegeId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, password, collegeId, phoneNumber });

    const response = await createUser({
      name,
      email,
      password,
      phone: phoneNumber,
    });

    if (response) {
      console.log("User created successfully");
    } else {
      console.log("Failed to create user");
    }
  };

  const router = useRouter();

  return (
    <div className="flex flex-col items-center py-5 mx-auto w-full text-xm font-bold bg-white max-w-[480px] min-h-screen h-fit ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col self-stretch gap-4 px-5 mt-8 w-full font-semibold"
      >
        <div className="flex flex-col gap-5 items-start font-bold text-center text-violet-950">
          <img
            loading="lazy"
            onClick={() => router.push("/")}
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8419ad9eb5493047f1803643fcaf023c520605259566946b054a4d5a4c0e687?apiKey=8f522db98d0241b0b95a275e1bb32c0e&"
            className="shrink-0 w-2.5 aspect-[0.5]"
          />
          <div className="flex w-full flex-col mt-4 self-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d62ed9891c56c02f835bf257d2831e81727033ad5fdfe1eb3f4b14221a071b0?apiKey=8f522db98d0241b0b95a275e1bb32c0e&"
              className="self-center aspect-square w-[124px]"
            />
            <div className="mt-5">Travel Buddy</div>
          </div>
        </div>
        <div className="mt-11 mb-7 text-3xl font-bold leading-10 text-neutral-700">
          Welcome Back!
        </div>
        <div className="flex gap-2.5 mt-5 text-sm">
          <div className="grow font-semibold leading-[143%] text-zinc-600">
            Don’t have an account?
          </div>
          <div className="flex-auto font-bold text-indigo-400 leading-[129%]">
            <Link href="http://localhost:3000/signup">Sign up now!</Link>
          </div>
        </div>
        <div className="mb-4">
          <label className="text-xm text-neutral-700" htmlFor="input-name">
            Name
          </label>
          <input
            type="text"
            id="input-name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-full w-full border-b border-blue-gray-200 bg-transparent pt-2 pb-1
                                                font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all 
                                                placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 
                                                disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100 text-black"
          />
        </div>

        <div className="mb-4">
          <label className="text-xm text-neutral-700" htmlFor="input-email">
            Email
          </label>
          <input
            type="email"
            id="input-email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-full w-full border-b border-blue-gray-200 bg-transparent pt-2 pb-1
                                                font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all 
                                                placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 
                                                disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100 text-black"
          />
        </div>

        <div className="mb-4">
          <label
            className="text-xm text-neutral-700"
            htmlFor="input-phone-number"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="input-phone-number"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="h-full w-full border-b border-blue-gray-200 bg-transparent pt-2 pb-1
                                                font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all 
                                                placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 
                                                disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100 text-black"
          />
        </div>
        <div className="mb-4">
          <label className="text-xm text-neutral-700" htmlFor="input-password">
            Password
          </label>
          <input
            type="password"
            id="input-password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-full w-full border-b border-blue-gray-200 bg-transparent pt-2 pb-1
                                                font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all 
                                                placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 
                                                disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100 text-black"
          />
        </div>

        <div className="mb-4">
          <label
            className="text-xm text-neutral-700"
            htmlFor="input-confirm-password"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="input-confirm-password"
            placeholder="Enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="h-full w-full border-b border-blue-gray-200 bg-transparent pt-2 pb-1
                                                font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all 
                                                placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 
                                                disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100 text-black"
          />
        </div>

        {/* <div className="mb-4">
                                        <label
                                                className="text-xm text-neutral-700"
                                                htmlFor="input-college-id"
                                        >
                                                College Id
                                        </label>
                                        <input
                                                type="text"
                                                id="input-college-id"
                                                placeholder="Enter your college id"
                                                value={collegeId}
                                                onChange={(e) => setCollegeId(e.target.value)}
                                                className="h-full w-full border-b border-blue-gray-200 bg-transparent pt-2 pb-1
                                                font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all 
                                                placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 
                                                disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100 text-black"
                                        />
                                </div> */}

        <button
          type="submit"
          className="justify-center items-center px-16 py-4 mt-5 font-bold text-center text-white rounded-3xl leading-[150%] bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          Sign in
        </button>
      </form>
      <div className="flex gap-2.5 items-center self-center mt-5 text-sm leading-5 whitespace-nowrap text-zinc-600">
        <hr className="w-6 border-t border-slate-500" />
        <span>OR</span>
        <hr className="w-6 border-t border-slate-500" />
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1a8c2fd8ff2fff0607073aad6d8826f64a4c30368ae1cd838cdb09169788f2b?apiKey=8f522db98d0241b0b95a275e1bb32c0e&"
        alt="Alternative sign-in option"
        className="mt-5 w-9 aspect-[0.85] cursor-pointer"
      />
    </div>
  );
}
