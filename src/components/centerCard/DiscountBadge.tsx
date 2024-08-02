import React from "react";

interface DiscountBadgeProps {
  percentage: number;
}

const DiscountBadge: React.FC<DiscountBadgeProps> = ({ percentage }) => {
  return (
    <div className="absolute -top-4 left-[26px] bg-green-500 text-white text-[8px] font-bold px-2 py-1 rounded mt-1 bg-mainTextColor">
      {percentage}% Discount
    </div>
  );
};

export default DiscountBadge;
