"use client";

import React from "react";
import { useState } from "react";
import Link from 'next/link';

export default function Page() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col px-5 py-16 mx-auto w-full text-base bg-white max-w-[480px]">
      <div className="flex gap-5 items-start font-bold text-center text-violet-950">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8419ad9eb5493047f1803643fcaf023c520605259566946b054a4d5a4c0e687?apiKey=8f522db98d0241b0b95a275e1bb32c0e&"
          className="shrink-0 w-2.5 aspect-[0.5]"
        />
        <div className="flex flex-col mt-4">
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


      <div className="mb-7 mt-10">
        <label
          className="text-sm text-neutral-700"
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
          className="h-full w-full border-b border-blue-gray-200 bg-transparent pt-2 pb-1.5 
          font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all 
          placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 
          disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100 text-black"
        />
      </div>
      <div className="mb-11">
        <label
          className="text-sm text-neutral-700"
          htmlFor="input-password"
        >
          Password
        </label>
        <input
          type="password"
          id="input-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-full w-full border-b border-blue-gray-200 bg-transparent pt-2 pb-1.5 
        font-sans text-lg font-normal text-blue-gray-700 outline outline-0 transition-all 
        placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 
        disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100 text-black"
        />
      </div>


      <button className="bg-indigo-500 justify-center items-center px-16 py-4 mt-9 font-bold text-center text-white rounded-3xl leading-[150%]">
        Sign in
      </button>


      <div className="flex gap-2.5 items-start self-center mt-10 text-sm font-semibold leading-5 whitespace-nowrap text-zinc-600">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/15433709270deabaca9941fe552b9a8d5e4e809dc18fb828364e761435271457?apiKey=8f522db98d0241b0b95a275e1bb32c0e&"
          className="shrink-0 mt-2 w-6 border border-solid aspect-[25] border-slate-500 stroke-[1px] stroke-slate-500"
        />
        <div className="self-stretch">OR</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/15433709270deabaca9941fe552b9a8d5e4e809dc18fb828364e761435271457?apiKey=8f522db98d0241b0b95a275e1bb32c0e&"
          className="shrink-0 mt-2 w-6 border border-solid aspect-[25] border-slate-500 stroke-[1px] stroke-slate-500"
        />
      </div>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e1a8c2fd8ff2fff0607073aad6d8826f64a4c30368ae1cd838cdb09169788f2b?apiKey=8f522db98d0241b0b95a275e1bb32c0e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1a8c2fd8ff2fff0607073aad6d8826f64a4c30368ae1cd838cdb09169788f2b?apiKey=8f522db98d0241b0b95a275e1bb32c0e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1a8c2fd8ff2fff0607073aad6d8826f64a4c30368ae1cd838cdb09169788f2b?apiKey=8f522db98d0241b0b95a275e1bb32c0e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1a8c2fd8ff2fff0607073aad6d8826f64a4c30368ae1cd838cdb09169788f2b?apiKey=8f522db98d0241b0b95a275e1bb32c0e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1a8c2fd8ff2fff0607073aad6d8826f64a4c30368ae1cd838cdb09169788f2b?apiKey=8f522db98d0241b0b95a275e1bb32c0e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1a8c2fd8ff2fff0607073aad6d8826f64a4c30368ae1cd838cdb09169788f2b?apiKey=8f522db98d0241b0b95a275e1bb32c0e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1a8c2fd8ff2fff0607073aad6d8826f64a4c30368ae1cd838cdb09169788f2b?apiKey=8f522db98d0241b0b95a275e1bb32c0e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1a8c2fd8ff2fff0607073aad6d8826f64a4c30368ae1cd838cdb09169788f2b?apiKey=8f522db98d0241b0b95a275e1bb32c0e&"
        className="self-center mt-8 w-9 aspect-[0.85] hover:cursor-pointer"
      />
    </form>
  );
}
