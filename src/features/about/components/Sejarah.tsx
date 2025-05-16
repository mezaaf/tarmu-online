"use client";

import Image from "next/image";
import { SectionContainer } from "@/components/layouts/SectionContainer";

const Sejarah = () => {
  return (
    <SectionContainer padded>
      <div className="w-xs text-justify leading-relaxed md:w-2xl lg:w-7xl">
        <p className="text-xs md:text-sm lg:text-base">
          <span className="h-30 max-h-60 md:h-60 lg:h-90">
            <Image
              priority
              src="/images/history-img2.svg"
              alt="Tarbiyatul Mutathowi’in"
              width={100}
              height={100}
              className="h-full w-full object-cover"
            />
          </span>
          Pondok Pesantren Tarbiyatul Mutathowi’in terletak di Dusun Ngujur,
          Desa Rejosari, Kecamatan Kebonsari, Kabupaten Madiun, Jawa Timur.
          Pesantren ini berdiri di tengah masyarakat pedesaan yang religius dan
          memiliki tradisi gotong royong yang kuat, namun pada masa awal
          pendiriannya masih minim akses terhadap pendidikan Islam yang
          terstruktur.
        </p>

        <p className="text-xs md:text-sm lg:text-base">
          Nama <em>Tarbiyatul Mutathowi’in</em> berasal dari bahasa Arab yang
          bermakna “pendidikan bagi orang-orang yang belajar dengan sukarela”.
          Nama ini mencerminkan semangat awal para santri yang datang dengan
          niat ikhlas untuk menuntut ilmu agama, tanpa pamrih, semata-mata
          mengharap ridha Allah SWT.
        </p>

        <h2 className="text-md mt-2 font-semibold md:mt-3 md:text-3xl lg:mt-5 lg:text-4xl">
          Berdirinya Pesantren
        </h2>
        <p className="text-xs md:text-sm lg:text-base">
          Pondok Pesantren ini didirikan oleh <strong>KH. Ali Rahmat</strong>{" "}
          pada awal dekade 1946. Awalnya hanya berupa sebuah langgar kecil
          tempat anak-anak desa mengaji selepas maghrib. Dengan keteladanan dan
          dukungan masyarakat, pesantren ini berkembang menjadi pusat
          pembelajaran Islam yang dikenal luas.
        </p>

        <h2 className="text-md mt-2 font-semibold md:mt-3 md:text-3xl lg:mt-5 lg:text-4xl">
          Perkembangan dan Tantangan
        </h2>
        <p className="text-xs md:text-sm lg:text-base">
          Tarbiyatul Mutathowi’in menghadapi tantangan besar di awal
          perjalanannya: keterbatasan fasilitas, tenaga pengajar, dan stigma
          masyarakat terhadap pendidikan pesantren. Namun, dengan semangat
          keikhlasan dan kedisiplinan, pondok ini melahirkan kader-kader yang
          menjadi tonggak pengembangan pesantren.
        </p>

        <h2 className="text-md mt-2 w-full font-semibold md:mt-3 md:text-3xl lg:mt-5 lg:text-4xl">
          Menuju Kemandirian dan Relevansi
        </h2>
        <p className="text-xs md:text-sm lg:text-base">
          Pada tahun 2000-an, pondok mulai merintis sistem pendidikan
          terstruktur, seperti Madrasah Diniyah, program tahfidz, hingga
          pelatihan keterampilan santri. Pesantren beradaptasi dengan zaman
          tanpa meninggalkan nilai-nilai tradisional.
        </p>

        <h2 className="text-md mt-2 font-semibold md:mt-3 md:text-3xl lg:mt-5 lg:text-4xl">
          Eksistensi Hari Ini
        </h2>
        <p className="text-xs md:text-sm lg:text-base">
          Kini, pesantren menjadi pusat kegiatan dakwah dan pendidikan Islam di
          Kebonsari. Santri datang dari berbagai daerah dan aktif dalam kegiatan
          keagamaan, sosial, hingga kewirausahaan. Pondok juga berperan menjaga
          harmoni sosial di tengah masyarakat.
        </p>

        <h2 className="text-md mt-2 font-semibold md:mt-3 md:text-3xl lg:mt-5 lg:text-4xl">
          Penutup
        </h2>
        <p className="text-xs md:text-sm lg:text-base">
          Tarbiyatul Mutathowi’in bukan hanya tempat menuntut ilmu, tetapi juga
          rumah pembinaan karakter. Di sinilah tumbuh generasi yang berilmu,
          berakhlak, dan siap mengabdi untuk umat dengan semangat{" "}
          <strong>ikhlas, sabar, dan istiqamah</strong>.
        </p>
      </div>
    </SectionContainer>
  );
};

export default Sejarah;
