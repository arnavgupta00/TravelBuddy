"use client";

import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

export default function Page(){



  return (
    <div className="flex flex-col px-12 py-20 mx-auto w-full text-base font-bold leading-6 bg-white max-w-[480px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f53925c8ff95f3fcbf103d6eef8e987a812740f60523155d2e1e513b6fb039d3?apiKey=8f522db98d0241b0b95a275e1bb32c0e&"
        className="mt-16 w-full aspect-[0.95]"
      />
      <div className="self-center mt-16 text-3xl text-neutral-700">
        Travel Buddy
      </div>
      <div className="mt-9 font-semibold text-center text-slate-500">
        Discover your buddy for your journey
      </div>
      <Link href="http://localhost:3000/signin">
        <div className="bg-indigo-500 hover:cursor-pointer justify-center items-center self-center px-16 py-5 mt-28 text-center text-white rounded-3xl">
            Get Started
        </div>
      </Link>
    </div>
  );

}

