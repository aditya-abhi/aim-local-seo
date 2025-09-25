import React from "react";
import RadarSweep from "@/components/common/RadarSweep";

export const metadata = {
  title: "Radar Sweep Demo",
};

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <RadarSweep />
    </div>
  );
}
