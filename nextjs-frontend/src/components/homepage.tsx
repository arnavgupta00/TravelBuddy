"use client";

import { useState } from "react";
import BottomNav from "./bottomNav";
import RideList from "./rideList";

export default function Home(session: { session: any }) {
  const [youride, setYouride] = useState(false);

  return (
    <div>
      <RideList session={session} youride={youride} />
      <div
        className="w-full   max-w-[480px] "
        style={{
          position: "fixed",
          height: "15%",
          top: "91%",
        }}
      >
        {/* <BottomNav setYouride={setYouride}/> */}
      </div>
    </div>
  );
}
