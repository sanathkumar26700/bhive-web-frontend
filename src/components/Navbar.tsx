import React from "react";
import Link from "next/link";
import Image from "next/image";
import { imageParser } from "@/utilities/imageparser";

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 bg-white z-50">
      <div className="h-24 max-w-7xl mx-auto px-4 sm:px-28 flex justify-between items-center">
        <div className="flex">
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src={imageParser("bhive-logo.svg")}
              alt="Bhive Logo"
              width={125}
              height={40}
            />
          </Link>
        </div>
        <div className="flex items-center">
          <a
            href="tel:0000000000"
            className="w-[42px] h-[42px] border-primary border-2 rounded-md flex items-center justify-center"
          >
            <Image
              src={imageParser("phone-icon.svg")}
              alt="Bhive Logo"
              width={24}
              height={24}
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
