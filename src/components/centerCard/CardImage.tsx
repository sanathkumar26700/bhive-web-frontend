import { imageParser } from "@/utilities/imageparser";
import Image from "next/image";
import React from "react";

interface CardImageProps {
  imageUrl: string;
  category: string;
}

const CardImage: React.FC<CardImageProps> = ({ imageUrl, category }) => {
  return (
    <div className="relative">
      <img className="w-full rounded" src={imageUrl} alt="Workspace image" />
      <Image
        src={imageParser(`category/${category}.svg`)}
        alt="category badge"
        width={109}
        height={32}
        className="absolute top-1 left-1"
      />
    </div>
  );
};

export default CardImage;
