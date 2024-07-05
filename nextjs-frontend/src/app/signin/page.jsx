"use client";

import React from "react";
import { useState } from "react";

export default function Page() {
  const handleLogin = () => {
    console.log("Login");
  };

  return (
    <div className="flex flex-col px-5 pt-4 pb-2 mx-auto w-full bg-white max-w-[480px]">
      <div className="flex gap-5 justify-between">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8419ad9eb5493047f1803643fcaf023c520605259566946b054a4d5a4c0e687?apiKey=899226d7cc814f1893ad417bc11d3099&"
          className="shrink-0 self-start mt-10 w-2.5 aspect-[0.5]"
        />
        <div className="flex flex-col items-start">
          <div className="flex gap-1.5 items-start self-end">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/879a0834200d7223c0afd585c7a0e679382fc470d0a83619bb5f0a4e703631db?apiKey=899226d7cc814f1893ad417bc11d3099&"
              className="shrink-0 aspect-[1.69] fill-black w-[17px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3dfb295a269181151a2550ac5e097c75d47f1e67c1239e9e048e856055339b7?apiKey=899226d7cc814f1893ad417bc11d3099&"
              className="shrink-0 aspect-[1.37] fill-black w-[15px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d982a99f33ff023b940e873bbeefb7d2312bc51ede6cb7257e5ed6bb2e758607?apiKey=899226d7cc814f1893ad417bc11d3099&"
              className="shrink-0 self-stretch aspect-[2.08] w-[25px]"
            />
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d62ed9891c56c02f835bf257d2831e81727033ad5fdfe1eb3f4b14221a071b0?apiKey=899226d7cc814f1893ad417bc11d3099&"
            className="mt-11 max-w-full aspect-square w-[124px]"
          />
          <div className="mt-5 ml-3.5 text-base font-bold text-center text-violet-950">
            Travel Buddy
          </div>
        </div>
      </div>
      <div className="mt-11 text-3xl font-bold leading-10 text-neutral-700">
        Welcome Back!
      </div>
      <div className="flex gap-2.5 mt-5 text-sm">
        <div className="grow font-semibold leading-[143%] text-zinc-600">
          Don’t have an account?
        </div>
        <div className="flex-auto font-bold text-indigo-400 leading-[129%]">
          Sign up now!
        </div>
      </div>
      <div className="mt-11 text-xs font-semibold text-stone-300">Email</div>
      <div className="mt-3.5 text-base font-semibold text-neutral-700">
        random@thapar.edu
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c3c569bfe31221dc2006d29e0a8ee6a0f67a28c9c6e20a8c3c67ec1b8b8b0e9?apiKey=899226d7cc814f1893ad417bc11d3099&"
        className="self-start mt-2.5 w-full border border-solid border-zinc-300 stroke-[1px] stroke-zinc-300"
      />
      <div className="mt-11 text-base text-stone-300">Password</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c3c569bfe31221dc2006d29e0a8ee6a0f67a28c9c6e20a8c3c67ec1b8b8b0e9?apiKey=899226d7cc814f1893ad417bc11d3099&"
        className="self-start mt-3.5 w-full border border-solid border-zinc-300 stroke-[1px] stroke-zinc-300"
      />
      <div className="flex gap-5 mt-6 w-full text-sm font-semibold leading-5">
        <div className="flex flex-1 gap-3 text-stone-300">
          <div className="shrink-0 w-4 h-4 rounded-sm border-2 border-solid border-stone-300" />
          <div className="my-auto">Remember me</div>
        </div>
        <div className="flex-auto text-right text-slate-500">
          Forgot Password?
        </div>
      </div>
      <div className="justify-center items-center px-16 py-4 mt-9 text-base font-bold leading-6 text-center text-white rounded-3xl">
        Sign in
      </div>
      <div className="flex gap-2.5 items-start self-center mt-10 text-sm font-semibold leading-5 whitespace-nowrap text-zinc-600">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/15433709270deabaca9941fe552b9a8d5e4e809dc18fb828364e761435271457?apiKey=899226d7cc814f1893ad417bc11d3099&"
          className="shrink-0 mt-2 w-6 border border-solid aspect-[25] border-slate-500 stroke-[1px] stroke-slate-500"
        />
        <div className="self-stretch">OR</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/15433709270deabaca9941fe552b9a8d5e4e809dc18fb828364e761435271457?apiKey=899226d7cc814f1893ad417bc11d3099&"
          className="shrink-0 mt-2 w-6 border border-solid aspect-[25] border-slate-500 stroke-[1px] stroke-slate-500"
        />
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/23b7c8e72dff0f64d07ce438f9121ba560f076c30e73db96aa7c9509fe7c5c92?apiKey=899226d7cc814f1893ad417bc11d3099&"
        className="self-center mt-8 max-w-full aspect-[4.35] w-[156px]"
      />
      <div className="shrink-0 self-center mt-16 bg-black h-[5px] rounded-[100px] w-[134px]" />
    </div>
  );
}
