import { imageParser } from "@/utilities/imageparser";
import Image from "next/image";
import Lottie from "react-lottie";
import * as animationData from "../lottie/hero-image-lottie.json";

interface HeroSectionProps {
  imageSrc: string; // Placeholder image URL
  pricePrefix: string;
  price: string;
}

const HeroSection = ({ imageSrc, pricePrefix, price }: HeroSectionProps) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex flex-col-reverse sm:flex-row bg-white top-0">
      <div
        style={{
          backgroundImage: `url(${imageParser(imageSrc)})`,
        }}
        className="sm:w-3/5 sm:h-[505px] px-4 bg-cover bg-no-repeat sm:pl-0 sm:pt-32 bg-mainBackground"
      >
        <h2 className="text-2xl sm:text-6xl font-bold text-mainTextColor">
          Host your meeting with world-class amenities.
        </h2>
        <span className=" text-2xl sm:text-6xl font-bold text-mainTextColor">
          {pricePrefix}
        </span>
        <span className="text-2xl sm:text-6xl font-bold text-primary">
          {price}
        </span>
      </div>
      <div className="relative overflow-hidden">
        <div className="sm:h-[475px] sm:mt-1 sm:ml-6">
          <Lottie
            options={defaultOptions}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <Image
          src={imageParser("hero-image-bg.svg")}
          alt="hero image"
          width={500}
          height={500}
          className="absolute -top-16 sm:-top-28  sm:left-20"
        />
      </div>
    </div>
  );
};

export default HeroSection;
