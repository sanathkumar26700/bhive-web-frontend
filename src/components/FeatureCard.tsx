import React, { useState } from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group rounded-lg transition-all duration-300 ease-in-out 
        cursor-pointer text-center sm:text-left sm:w-[300px] sm:h-[80px] p-4 sm:p-0 
                  ${
                    isHovered
                      ? "sm:bg-white shadow-lg"
                      : "bg-white shadow-md sm:bg-mainBackground sm:shadow-none"
                  }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col sm:flex-row items-center justify-start gap-2">
        <div
          className={`text-yellow-500 text-3xl  sm:h-[80px] sm:w-1/4 flex items-center justify-center `}
        >
          {icon}
        </div>
        <span>
          <span
            className={`font-[500] text-[18px] transition-all duration-300 ease-in-out
                        ${
                          isHovered
                            ? "transform -translate-y-2 -translate-x-2"
                            : ""
                        }`}
          >
            {title}
          </span>
          <span
            className={`text-[12px] text-gray-600 transition-all duration-300 ease-in-out opacity-50
                      ${isHovered ? "block" : "hidden"} overflow-hidden`}
          >
            {description}
          </span>
        </span>
      </div>
    </div>
  );
};

export default FeatureCard;
