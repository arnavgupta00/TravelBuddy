"use client";

import React from 'react';
import { useState } from 'react';


export default function Page() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [collegeId, setCollegeId] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, password, collegeId, phoneNum });
    };

    return (
        <div className="flex flex-col items-center py-5 mx-auto w-full text-xm font-bold bg-white max-w-[480px]">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c85c9d49dd8485792fa9e70deaa90ec9f732f04bd34aea3841adf4a2c5b9ae1?apiKey=8f522db98d0241b0b95a275e1bb32c0e&"
                alt="Travel Buddy Logo"
                className="max-w-full aspect-square w-[124px]"
            />
            <h1 className="mt-2 text-center text-violet-950">Travel Buddy</h1>
            <h2 className="mt-mb-2 text-3xl leading-10 text-center text-neutral-700">
                Welcome
            </h2>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col self-stretch px-5 mt-8 w-full font-semibold"
            >
                <div className="mb-4">
                    <label
                        className="text-xm text-neutral-700"
                        htmlFor="input-name"
                    >
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
                    <label
                        className="text-xm text-neutral-700"
                        htmlFor="input-email"
                    >
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
                        htmlFor="input-password"
                    >
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

                <div className="mb-4">
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


                <button
                    type="submit"
                    className="justify-center items-center px-16 py-4 mt-7 font-bold text-center text-white rounded-3xl leading-[150%] bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                    Sign in
                </button>
            </form>
            <div className="flex gap-2.5 items-center self-center mt-10 text-sm leading-5 whitespace-nowrap text-zinc-600">
                <hr className="w-6 border-t border-slate-500" />
                <span>OR</span>
                <hr className="w-6 border-t border-slate-500" />
            </div>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1a8c2fd8ff2fff0607073aad6d8826f64a4c30368ae1cd838cdb09169788f2b?apiKey=8f522db98d0241b0b95a275e1bb32c0e&"
                alt="Alternative sign-in option"
                className="mt-4 w-9 aspect-[0.85] cursor-pointer"
            />
        </div>
    );
}