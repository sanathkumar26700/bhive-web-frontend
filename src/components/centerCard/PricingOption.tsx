import React from "react";
import DiscountBadge from "./DiscountBadge";

interface PricingOptionProps {
  label: string;
  price: number;
  duration: string;
  discountPercentage?: number;
  className?: string;
}

const PricingOption: React.FC<PricingOptionProps> = ({
  label,
  price,
  duration,
  discountPercentage,
  className,
}) => {
  return (
    <div
      className={
        `flex flex-col ${
          discountPercentage ? "bg-yellow-100" : ""
        } p-2 rounded relative  sm:min-w-40 cursor-pointer` +
        " " +
        className
      }
    >
      <span className="text-sm font-semibold opacity-60">{label}</span>
      <div className="flex items-center">
        <span className="text-lg font-bold">₹ {price}</span>
        <span className="text-xs text-gray-600 ml-1">/{duration}</span>
      </div>
      {discountPercentage && <DiscountBadge percentage={discountPercentage} />}
    </div>
  );
};

export default PricingOption;
