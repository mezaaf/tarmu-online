"use client";

import React from "react";
import { SectionContainer } from "@/components/layouts/SectionContainer";

const Visi = () => {
  return (
    <SectionContainer padded>
      <div className="w-xs text-justify leading-relaxed md:w-2xl lg:w-7xl">
        <h2 className="text-md font-semibold md:text-3xl lg:text-4xl">Visi</h2>
        <blockquote className="border-l-4 pl-4 text-xs italic md:text-sm lg:text-base">
          Menjadi lembaga pendidikan Islam yang unggul dalam membentuk pribadi
          muslim yang bertakwa, berilmu, dan berakhlakul karimah.
        </blockquote>

        <h2 className="text-md mt-8 font-semibold md:text-3xl lg:text-4xl">
          Misi
        </h2>

        <ul className="list-disc space-y-2 text-xs md:text-sm lg:text-base">
          <li>
            Menanamkan nilai-nilai tauhid, akidah, dan akhlak dalam kehidupan
            santri.
          </li>
          <li>
            Menyelenggarakan pendidikan berbasis pesantren yang integratif
            antara ilmu agama dan pengetahuan umum.
          </li>
          <li>
            Mendorong kemandirian dan keterampilan santri dalam kehidupan
            bermasyarakat
          </li>
          <li>
            Menjadi pusat dakwah dan pengabdian masyarakat di lingkungan
            sekitar.
          </li>
        </ul>

        <h2 className="text-md mt-8 font-semibold md:text-3xl lg:text-4xl">
          Program Pendidikan
        </h2>
        <ul className="list-disc space-y-2 text-justify text-xs md:text-sm lg:text-base">
          <li>
            <strong>Madrasah Diniyah</strong>: Penguatan ilmu dasar agama
            seperti nahwu-sharaf, fikih, tauhid, dan tasawuf.
          </li>
          <li>
            <strong>Tahfidz al-Qur’an</strong>: Program khusus menghafal
            al-Qur’an dengan bimbingan intensif.
          </li>
          <li>
            <strong>Sekolah Formal</strong>: Bekerja sama dengan lembaga
            pendidikan formal di sekitar pondok.
          </li>
          <li>
            <strong>Kegiatan Ekstrakurikuler</strong>: Kajian kitab kuning,
            pidato tiga bahasa, seni hadrah, kaligrafi, dan pelatihan
            kewirausahaan.
          </li>
        </ul>
      </div>
    </SectionContainer>
  );
};

export default Visi;
