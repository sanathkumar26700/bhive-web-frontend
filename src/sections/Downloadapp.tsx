import { imageParser } from "@/utilities/imageparser";
import Image from "next/image";

const DownloadApp = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 relative min-h-[513px] flex justify-between">
      <div className="absolute bottom-20 sm:bottom-0 left-10 z-20">
        <Image
          src={imageParser("app-demo.svg")}
          alt="BHIVE Workspace app"
          width={369}
          height={200}
          className="w-[280px] sm:w-[369px]"
        />
      </div>
      <h2 className="text-3xl font-bold text-mainTextColor opacity-85 mb-8 w-full z-30">
        Download our app now
      </h2>
      <div className="flex justify-end items-end p-4 bg-white shadow-md rounded-lg absolute bottom-0 left-0 right-0 min-h-[400px] sm:min-h-[250px] mt-auto">
        <span></span>
        <span className="sm:w-1/2">
          <p className="hidden sm:block text-xl opacity-65">
            Boost your productivity with the BHIVE Workspace app.
          </p>
          <p className="hidden sm:block text-xl mb-6 opacity-65">
            Elevate your workspace, collaborate efficiently, and unlock
            exclusive perks.
          </p>

          <div className="flex space-x-4">
            <Image
              src={imageParser("play-store.svg")}
              alt="Get it on Google Play"
              width={160}
              height={48}
            />
            <Image
              src={imageParser("app-store.svg")}
              alt="Download on the App Store"
              width={160}
              height={48}
            />
          </div>
        </span>
      </div>
    </div>
  );
};

export default DownloadApp;
