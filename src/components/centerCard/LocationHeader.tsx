import { LocationHeaderProps } from "@/types/card";
import { imageParser } from "@/utilities/imageparser";
import Image from "next/image";
import React from "react";

const LocationHeader: React.FC<LocationHeaderProps> = ({
  name,
  distance,
  googleMapUrl,
}) => {
  return (
    <div className="flex justify-between items-center  mb-2">
      <h2 className="font-bold text-xl">{name}</h2>
      {googleMapUrl || distance ? (
        <a
          href={googleMapUrl}
          target="_blank"
          className="text-gray-600 rounded-lg h-14 min-w-14 cursor-pointer text-sm border border-[#EEE7E7] bg-[#F9F9F9] flex items-center justify-center flex-col gap-2 "
        >
          <Image
            src={imageParser("direction-logo.svg")}
            alt="Direction Logo"
            width={18}
            height={18}
          />
          <span>{distance}</span>
        </a>
      ) : null}
    </div>
  );
};

export default LocationHeader;
