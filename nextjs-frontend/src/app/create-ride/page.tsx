import LocationSelector from "@/components/locationSelector";
import MapComponent from "@/components/map";
import React from "react";

const Page: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-5 mx-auto w-full text-xm font-bold bg-white max-w-[480px] h-screen p-8">
      <div className="h-full w-full flex flex-col items-center reverse-schemed justify-center rounded-xl">
      <MapComponent selectedLocation={""} view={""} selectedValue={""} selectedTime={""} latitude={0} longitude={0} />
      
      </div>
      <LocationSelector />
    </div>
  );
};

export default Page;
