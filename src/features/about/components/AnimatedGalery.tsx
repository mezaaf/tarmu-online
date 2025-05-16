"use client";

import Image from "next/image";
import React from "react";
import { AnimatedGroup } from "@/components/ui/animated-group";

type GaleryImageDataProps = {
  id: number;
  title: string;
  imgUrl: string;
};

const galeryImageData: GaleryImageDataProps[] = [
  {
    id: 1,
    title: "img-1",
    imgUrl: "/images/history-img2.svg",
  },
  {
    id: 2,
    title: "img-2",
    imgUrl: "/images/history-img2.svg",
  },
  {
    id: 3,
    title: "img-3",
    imgUrl: "/images/history-img2.svg",
  },
  {
    id: 4,
    title: "img-4",
    imgUrl: "/images/history-img2.svg",
  },
  {
    id: 5,
    title: "img-5",
    imgUrl: "/images/history-img2.svg",
  },
  {
    id: 6,
    title: "img-6",
    imgUrl: "/images/history-img2.svg",
  },
  {
    id: 7,
    title: "img-7",
    imgUrl: "/images/history-img2.svg",
  },
  {
    id: 8,
    title: "img-8",
    imgUrl: "/images/history-img2.svg",
  },
];

const AnimatedGalery = () => {
  return (
    <AnimatedGroup
      className="grid grid-cols-2 gap-4 p-8 md:grid-cols-3 lg:grid-cols-4"
      preset="scale"
    >
      {galeryImageData.map((image) => (
        <Image
          key={image.id}
          src={image.imgUrl}
          alt={image.title}
          className="h-auto w-full rounded-[4px]"
          width={100}
          height={100}
        />
      ))}
    </AnimatedGroup>
  );
};

export default AnimatedGalery;
