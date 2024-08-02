import React from "react";
import { Center as CenterType } from "../../types/center";
import LocationCard from "@/components/centerCard";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCenters } from "@/sections/centers/centersSlice";
import { AppDispatch, RootState } from "@/store/store";
import { imageParser } from "@/utilities/imageparser";

const Center: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { centers, status, error } = useSelector(
    (state: RootState) => state.centers
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCenters());
    }
  }, [status, dispatch]);

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {status === "loading" && <p>Loading...</p>}
        {status === "failed" && <p>Error: {error}</p>}
        {status === "succeeded" &&
          centers.map((center) => {
            return (
              <LocationCard
                key={center.id}
                name={center?.name}
                googleMapUrl={center?.google_maps_url}
                distance="6 Kms"
                category={center?.category}
                imageUrl={imageParser(`${center?.images[0]}`)}
                dayPassPrice={center?.day_pass_price}
                bulkPassPrice={2400} // for example
                bulkPassDays={10}// for example
                discountPercentage={20}// for example
              />
            );
          })}
      </div>
    </div>
  );
};

export default Center;
