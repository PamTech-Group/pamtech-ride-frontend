"use client";

import Image from "next/image";

import { CustomButton } from "@components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-32 padding-x ">
        <h1 className="hero__title">
          {/* Find, book, rent a car—quick and super easy! */}
          Experience Luxury on Every Journey!
        </h1>

        <p className="hero__subtitle">
          {/* Streamline your car rental experience with our effortless booking
          process. */}
          Indulge in our exclusive fleet of luxury vehicles tailored for your
          comfort
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container bg-blue-500 rounded-[100%_33%_26%_74%/_50%_48%_52%_50%] p-4 sm:p-6 md:p-8 lg:p-10 mt-10">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="hero"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
