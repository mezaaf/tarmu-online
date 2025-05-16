"use client";

import { SectionContainer } from "@/components/layouts/SectionContainer";
import Image from "next/image";

const Hero = () => {
  return (
    <SectionContainer padded className="items-center">
      <div className="mt-6 flex w-xs flex-col items-center justify-center text-center uppercase md:mt-12 md:w-2xl md:gap-3 lg:mt-18 lg:w-7xl lg:gap-5">
        <h1 className="text-lg font-bold md:text-3xl lg:text-5xl">
          Pondok Pesantren
        </h1>
        <h1 className="text-tosca text-2xl font-extrabold md:text-4xl lg:text-6xl">
          Tarbiyatul Mutathowi{"'"}in
        </h1>
      </div>
      <span className="my-3 max-w-xs text-center text-xs text-gray-500 md:my-5 md:max-w-full md:text-base md:font-semibold lg:my-10">
        Jl. Sunan Bonang, Ngujur Rejosari, Kec. Kebonsari, Kab. Madiun, Jawa
        Timur 63173
      </span>

      <div className="md:w-200 lg:w-300">
        <Image
          priority
          src={"/images/home/hero-object.svg"}
          alt="Hero Object"
          width={100}
          height={100}
          className="w-full"
        />
      </div>
    </SectionContainer>
  );
};

export default Hero;
