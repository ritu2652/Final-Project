"use client";

import Image from "next/image";

import { CustomButton } from '@/components';

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 px-4 sm:px-2">
      <h1 className='text-2xl sm:text-3xl md:text-4xl  lg:text-5xl font-extrabold'>
        Find, book, rent a car—quick and super easy!</h1>
        <p className=' sm:text-xl md:text-2xl  lg:text-3xl '>
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;