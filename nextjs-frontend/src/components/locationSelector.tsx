"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { MapPin } from "lucide-react";
import SearchBox from "./searchComponent";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { createRide } from "@/services/ride";

export default function LocationSelector({
  session,
  startPointLatLong,
  setStartPointLatLong,
  endPointLatLong,
  setEndPointLatLong,
}: {
  session: any;
  startPointLatLong: any;
  setStartPointLatLong: any;
  endPointLatLong: any;
  setEndPointLatLong: any;
}) {
  const router = useRouter();
  const navigate = useRouter();
  const [startLocation, setStartLocation] = React.useState("");
  const [endLocation, setEndLocation] = React.useState("");

  const [date, setDate] = React.useState<Date | null>(null);
  const [seats, setSeats] = React.useState<any>(null);
  const [rideName, setRideName] = React.useState("");

  const handleOfferRide = async () => {
    console.log("Offering ride");
    const response = await createRide(
      {
        fromPoint: startLocation,
        toPoint: endLocation,
        isPublic: true,
        seatsAvailable: seats,
        name: rideName,
        rideDate: date ? date : new Date(),
        createdBy: {
          name: session?.user?.name ? session?.user?.name : "Guest",
          email: session?.user?.email ? session?.user?.email : "anonymous",
        },
        createdById: 0,
      },
      session
    );
    router.push("/");
    console.log("Response: ", response);
  };

  return (
    <div className="flex flex-col px-4 py-5 text-sm font-semibold leading-5 bg-white rounded-3xl shadow-sm max-w-[395px] absolute  bottom-0">
      <div className="flex gap-5 justify-center text-base leading-6 text-center">
        {/* <div className="flex gap-2.5 my-auto text-neutral-700" onClick={()=> router.push("/")} >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2bd2aa49ce1cdad48bca7a556377b76a0dacbef15183be86f20c9b72c8c2e74?apiKey=899226d7cc814f1893ad417bc11d3099&"
            className="shrink-0 aspect-square w-[18px]"
          />
          <div className="my-auto cursor-pointer">Find Ride</div>
        </div> */}
        <div className="flex gap-3 px-7 py-2.5 text-indigo-400 bg-violet-100 text-center rounded-2xl">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f14c2a6252290633c44e66e1616b3ab78114e893edced9ca3dda4b7b2808275?apiKey=899226d7cc814f1893ad417bc11d3099&"
            className="shrink-0 w-4 aspect-[1.14]"
          />
          <div>Offer Ride</div>
        </div>
      </div>
      <div className="flex gap-3 self-start mt-6 text-zinc-600">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4275acaddbd28b8585424e2b80b91cf2a38dacf59eb97a36c6096542d58f40b?apiKey=899226d7cc814f1893ad417bc11d3099&"
          className="shrink-0 w-3 aspect-square"
        />
        <div>
          <input
            type="text"
            value={rideName}
            className="focus:outline-none"
            placeholder="Set Ride Name "
            onChange={(e) => setRideName(e.target.value)}
          />
        </div>
      </div>
      <div className="shrink-0 mt-2 h-px bg-zinc-300" />
      <div className="flex justify-between gap-3.5 w-full self-start mt-5 text-zinc-600">
        <div className="flex gap-3.5">
          <div className="shrink-0 self-start w-2 h-2 bg-cyan-400 rounded-full" />
          <div>
            <SearchBox
              setSelectedCountry={setStartLocation}
              setCoordinates={setStartPointLatLong}
            />
          </div>
        </div>

        <MapPin />
      </div>
      <div className="shrink-0 mt-2.5 h-px bg-zinc-300" />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/db40d7a0537bf1582b21d25518986bee22530353a4c8aadd89056770cf659607?apiKey=899226d7cc814f1893ad417bc11d3099&"
        className="w-0.5 aspect-[0.14]"
      />
      <div className="flex gap-3.5 justify-between w-full self-start mt-3 text-zinc-600">
        <div className="gap-3.5 flex">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a6c32136f1846ed85883089425ebf04e53e6559d2cb7848606d7b71d9208348?apiKey=899226d7cc814f1893ad417bc11d3099&"
            className="shrink-0 w-2 aspect-[0.8]"
          />
          <div>
            <SearchBox
              setSelectedCountry={setEndLocation}
              setCoordinates={setEndPointLatLong}
            />
          </div>
        </div>

        <MapPin />
      </div>
      <div className="shrink-0 mt-2.5 h-px bg-zinc-300" />
      <div className="flex gap-2 mt-5 text-zinc-600 w-full">
        <div className="flex flex-col w-32">
          <div className="flex gap-3 w-16">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd31dc18a46c200d6bd8da0e84fcc0226eb3060623b6ebf5e5e050c0555724f2?apiKey=899226d7cc814f1893ad417bc11d3099&"
              className="shrink-0 my-auto w-3 aspect-square"
            />
            <div className="flex-auto w-20">
              <DatePicker
                className="w-20 focus:outline-none"
                selected={date}
                onChange={(date) => setDate(date)}
                placeholderText="Travel date"
              />
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe608f1b71a24731baebe64b2e1ba08b7a20b34e1e20ab0af49521cf48b364b9?apiKey=899226d7cc814f1893ad417bc11d3099&"
              className="shrink-0 aspect-square w-[18px]"
            />
          </div>
          <div className="shrink-0 self-center mt-1.5 h-px bg-zinc-300 w-20" />
        </div>
        <div className="flex flex-col self-start mt-1 w-28">
          <div>
            <input
              type="number"
              value={seats}
              className="w-16  text-center focus:outline-none "
              placeholder="Seats"
              onChange={(e) => setSeats(parseInt(e.target.value))}
            />
          </div>
          <div className="shrink-0 mt-1.5 h-px bg-zinc-300 w-16" />
        </div>
      </div>
      {/* <div className="flex gap-3 self-start mt-6 text-zinc-600">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4275acaddbd28b8585424e2b80b91cf2a38dacf59eb97a36c6096542d58f40b?apiKey=899226d7cc814f1893ad417bc11d3099&"
          className="shrink-0 w-3 aspect-square"
        />
        <div>Pet' allowed</div>
      </div>
      <div className="shrink-0 mt-2 h-px bg-zinc-300" /> */}
      <div
        onClick={() => {
          console.log("Offering asfride");
          handleOfferRide();
        }}
        className="justify-center mb-4 cursor-pointer items-center px-16 py-4 mt-6 text-base font-bold leading-6 text-center text-white whitespace-nowrap rounded-3xl reverse-schemed"
      >
        Offer
      </div>
    </div>
  );
}