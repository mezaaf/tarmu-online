"use client";

import Image from "next/image";
import { SectionContainer } from "@/components/layouts/SectionContainer";
import { imageData } from "./imageData";

const Fasilitas = () => {
  return (
    <SectionContainer padded>
      <div className="flex w-xs flex-col md:w-2xl lg:w-7xl">
        <div className="flex flex-col gap-2">
          <h2 className="text-md font-semibold md:text-3xl lg:text-4xl">
            Lingkungan & Fasilitas
          </h2>
          <p className="text-xs md:text-sm lg:text-base">
            Pondok ini dikelilingi suasana pedesaan yang tenang dan mendukung
            proses belajar para santri. Fasilitas yang tersedia terus
            dikembangkan, meliputi:
          </p>
          <ul className="list-disc space-y-2 text-justify text-xs md:text-sm lg:text-base">
            <li>Asrama Santri</li>
            <li>Masjid</li>
            <li>Ruang Kelas</li>
            <li>Lapangan Olahraga</li>
          </ul>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {imageData.map((image) => (
            <Image
              key={image.id}
              src={image.url}
              alt="Fasilitas"
              width={100}
              height={100}
              className="w-xs rounded-xl"
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Fasilitas;
