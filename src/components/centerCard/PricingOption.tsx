import React from "react";
import DiscountBadge from "./DiscountBadge";
import Icon from "@/utilities/Icon";
import { PricingOptionProps } from "@/types/card";

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
        `flex flex-row justify-between items-center  ${
          discountPercentage ? "bg-yellow-100" : ""
        } p-2 rounded-lg relative  sm:min-w-40 cursor-pointer` +
        " " +
        className
      }
    >
      <span>
        <span className="text-sm font-semibold opacity-60">{label}</span>
        <div className="flex items-center">
          <span className="text-lg font-bold">₹ {price}</span>
          <span className="text-xs text-gray-600 ml-1">/{duration}</span>
        </div>
      </span>
      <span className="flex">
        <Icon icon="right-arrow-1.svg" height={8} width={8} />
        <Icon icon="right-arrow-2.svg" height={8} width={8} />
        <Icon icon="right-arrow-3.svg" height={8} width={8} />
      </span>
      {discountPercentage && <DiscountBadge percentage={discountPercentage} />}
    </div>
  );
};

export default PricingOption;
