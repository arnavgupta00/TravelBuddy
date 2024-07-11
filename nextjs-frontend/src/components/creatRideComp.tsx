"use client";

import React from "react";
import LocationSelector from "./locationSelector";
import MapComponent from "./map";

export default function CreateRideComp({session}: {session: any}) {
  const [startPointLatLong, setStartPointLatLong] = React.useState({
    latitude: 0,
    longitude: 0,
  });

  const [endPointLatLong, setEndPointLatLong] = React.useState({
    latitude: 0,
    longitude: 0,
  });
  return (
    <div className="flex flex-col items-center  mx-auto w-full text-xm font-bold bg-white max-w-[480px] h-screen ">
      <div className="h-full w-full flex flex-col items-center reverse-schemed justify-center rounded-xl">
        <MapComponent
          selectedLocation={""}
          view={""}
          selectedValue={""}
          selectedTime={""}
          latitude={0}
          longitude={0}
          startPointLatLong={startPointLatLong}
          setStartPointLatLong={setStartPointLatLong}
          endPointLatLong={endPointLatLong}
          setEndPointLatLong={setEndPointLatLong}
        />
      </div>
      <LocationSelector
        session={session}
        startPointLatLong={startPointLatLong}
        setStartPointLatLong={setStartPointLatLong}
        endPointLatLong={endPointLatLong}
        setEndPointLatLong={setEndPointLatLong}
      />
    </div>
  );
}
