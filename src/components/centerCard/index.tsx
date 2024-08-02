import React from "react";
import CardImage from "./CardImage";
import LocationHeader from "./LocationHeader";
import PricingOption from "./PricingOption";

interface LocationCardProps {
  name: string;
  distance: string;
  imageUrl: string;
  dayPassPrice: number;
  bulkPassPrice: number;
  bulkPassDays: number;
  discountPercentage: number;
  category: string;
  googleMapUrl?: string;
}

const LocationCard: React.FC<LocationCardProps> = ({
  name,
  distance,
  imageUrl,
  dayPassPrice,
  bulkPassPrice,
  bulkPassDays,
  discountPercentage,
  category,
  googleMapUrl,
}) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4 flex flex-col justify-between">
      <span>
          <LocationHeader
            name={name}
            distance={distance}
            googleMapUrl={googleMapUrl}
          />
        <CardImage imageUrl={imageUrl} category={category} />
      </span>
      <div className="flex justify-between mt-4">
        {dayPassPrice ? (
          <PricingOption
            className="border border-[#EEE7E7] bg-[#F9F9F9]"
            label="Day Pass"
            price={dayPassPrice}
            duration="Day"
          />
        ) : null}
        {bulkPassPrice ? (
          <PricingOption
            className="bg-[var(--main-light-yellow)] border-primary border"
            label="Bulk Pass"
            price={bulkPassPrice}
            duration={`${bulkPassDays} Days`}
            discountPercentage={discountPercentage}
          />
        ) : null}
      </div>
    </div>
  );
};

export default LocationCard;
