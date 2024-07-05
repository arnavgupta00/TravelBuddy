import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center md:mt-40 pt-4 pb-2 mx-auto w-full bg-white min-w-[450px] max-w-[450px] min-h-[800px]">
      <div className="flex gap-1.5 items-center self-center mt-4">
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
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/aeff3f5a9ebdb95e8dfb00dcfc818c63910313884d3797516f8a7e2b3a2f4fc5?apiKey=899226d7cc814f1893ad417bc11d3099&"
          className="shrink-0 aspect-[2.08] w-[25px]"
        />
      </div>
      <div className="flex flex-col items-center pr-3.5 pl-3.5 mt-16 w-full text-base font-bold leading-6">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f53925c8ff95f3fcbf103d6eef8e987a812740f60523155d2e1e513b6fb039d3?apiKey=899226d7cc814f1893ad417bc11d3099&"
          className="w-full aspect-[0.95] max-w-[280px]"
        />
        <div className="mt-16 text-3xl text-neutral-700 text-center">Travel Buddy</div>
        <div className="mt-4 font-semibold text-center text-slate-500">
          Discover your buddy for your journey
        </div>
        <div className="flex justify-center items-center px-16 py-5 mt-8 text-center text-white bg-blue-500 rounded-3xl cursor-pointer">
          Get Started
        </div>
        <div className="mt-16 bg-black h-[5px] rounded-[100px] w-[134px]" />
      </div>
    </div>
  );
}
