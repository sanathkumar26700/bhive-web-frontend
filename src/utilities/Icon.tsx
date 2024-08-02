import Image from "next/image";
import React from "react";
import { imageParser } from "./imageparser";

function Icon({
  icon,
  height,
  width,
  className,
}: {
  icon: string;
  height?: number;
  width?: number;
  className?: string;
}) {
  return (
    <div>
      <Image
        src={imageParser(icon)}
        alt={`icon-${icon}`}
        width={height || 30}
        height={width || 30}
        className={className}
      />
    </div>
  );
}

export default Icon;
