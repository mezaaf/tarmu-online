import { SectionContainer } from "@/components/layouts/SectionContainer";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <div className="w-full bg-pondok-accent flex flex-col items-center justify-center">
        <SectionContainer
          padded
          className="flex flex-col gap-4 sm:gap-6 lg:gap-8 items-center justify-center"
        >
          <p className="uppercase font-semibold text-pondok-primary">
            Tentang Kami
          </p>
          <h1 className="capitalize text-pondok-text-light text-2xl sm:text-3xl lg:text-4xl text-center max-w-xl sm:max-w-2xl lg:max-w-3xl lg:leading-12">
            Kenal lebih dekat dengan Tarbiyatul Mutathowi&apos;in
          </h1>
        </SectionContainer>
      </div>
      <SectionContainer
        padded
        className="flex flex-col items-center justify-center gap-12 sm:gap-16 lg:gap-20"
      >
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 w-full">
          <div className="w-full flex flex-col gap-2 sm:gap-3 lg:gap-4">
            <h1 className="text-pondok-accent font-semibold text-lg sm:text-xl lg:text-2xl">
              Sejarah
            </h1>
            <p>
              Keberadaaan Pondok Pesantren Tarbiyatul Mutathowi&apos;in Dusun
              Ngujur Desa Rejosari Kecamatan Kebonsari Kabupaten Madiun
              merupakan rangkaian panjang dari perjuangan para tokoh pendiri dan
              pejuang Pendidikan Agama di Dusun Ngujur Desa Rejosari Kecamatan
              Kebonsari Kab. Madiun, menyadari akan tugas dan tanggung jawabnya
              untuk mengembangkan agama dan menyediakan tempat pendidikan bagi
              masyarakat sekitar Desa Rejosari, tokoh-tokoh tersebut antara lain
              :
            </p>
            <ol className="list-disc flex flex-col gap-2 px-6">
              <li>KH. Ali Rahmat</li>
              <li>K. Matlab</li>
              <li>K. Ashuri</li>
              <li>K. Sudirman</li>
              <li>Masyarakat Dusun Ngujur</li>
            </ol>
            <p>
              Pada tahun 1946 para tokoh tersebut mendirikan Pondok Pesantren
              dan untuk menopang pendidikan formalnya didirikanlah Madrasah
              Ibtidaiyah/SR1 di Dusun Ngujur Desa Rejosari dengan bekal tekad
              dan semangat yang kuat. Madrasah tersebut berdiri dan bertahan.
              Pada tahun 1960 berubah menjadi Madrasah Mu&apos;alimin yang
              akhirnya pada tahun 1970, berdasar SK Menteri Agama No. 176
              tanggal 9 Agustus berubah menjadi PGAN. Selanjutnya sesuai dengan
              kebijakan Pemerintah dalam hal ini Departemen Agama, PGAN tersebut
              diubah menjadi MTsN Rejosari untuk kelas I, II, dan III sedang MAN
              Rejosari untuk kelas IV, V dan VI. Sedang untuk tingkat Dasar
              didirikan Madrasah Ibtidaiyah sekaligus untuk tingkat anak - anak
              didirikan RA dan PAUD.
            </p>
          </div>
          <div className="w-full">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={"/images/home/history-img2.svg"}
                alt="history"
                width={1200}
                height={720}
                className="w-full object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-4 sm:gap-6 lg:gap-8 w-full">
          <div className="w-full flex flex-col gap-2 sm:gap-3 lg:gap-4">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={"/images/home/history-img2.svg"}
                alt="history"
                width={1200}
                height={720}
                className="w-full object-cover object-center"
                priority
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-2 sm:gap-3 lg:gap-4">
            <h1 className="text-pondok-accent font-semibold text-lg sm:text-xl lg:text-2xl">
              Visi Kami
            </h1>
            <p>
              Menjadi lembaga pendidikan Islam yang unggul dalam membentuk
              generasi yang berakhlak mulia, berilmu, dan berdaya guna di tengah
              masyarakat.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 w-full">
          <div className="w-full flex flex-col gap-2 sm:gap-3 lg:gap-4">
            <h1 className="text-pondok-accent font-semibold text-lg sm:text-xl lg:text-2xl">
              Misi Kami
            </h1>
            <ol className="list-disc flex flex-col gap-1 sm:gap-2 lg:gap-3 px-6">
              <li>
                Menyelenggarakan pendidikan Islam berbasis Al-Qur&apos;an dan
                As-Sunnah yang terintegrasi dengan ilmu pengetahuan umum.
              </li>
              <li>
                Menanamkan nilai-nilai akhlakul karimah dalam seluruh aspek
                kehidupan santri.
              </li>
              <li>
                Mengembangkan potensi santri dalam bidang akademik, spiritual,
                sosial, dan keterampilan hidup.
              </li>
              <li>
                Menumbuhkan semangat kemandirian, tanggung jawab, dan
                kepemimpinan pada diri santri.
              </li>
              <li>
                Menjalin hubungan yang harmonis dengan masyarakat, wali santri,
                dan lembaga pendidikan lain.
              </li>
            </ol>
          </div>
          <div className="w-full flex flex-col gap-2 sm:gap-3 lg:gap-4">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={"/images/home/history-img2.svg"}
                alt="history"
                width={1200}
                height={720}
                className="w-full object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

export default AboutPage;
