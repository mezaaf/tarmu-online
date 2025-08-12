import { SectionContainer } from "@/components/layouts/SectionContainer";

const VisiMisiPage = () => {
  return (
    <>
      <div className="w-full bg-pondok-accent flex flex-col items-center justify-center">
        <SectionContainer
          padded
          className="flex flex-col gap-4 sm:gap-6 lg:gap-8 items-center justify-center"
        >
          <p className="uppercase font-semibold text-pondok-primary">
            Visi - Misi
          </p>
          <h1 className="capitalize text-pondok-text-light text-2xl sm:text-3xl lg:text-4xl text-center max-w-xl sm:max-w-2xl lg:max-w-3xl lg:leading-12">
            Visi, Misi, & Tagline Kami
          </h1>
          <p className="text-pondok-text-light text-center max-w-2xl">
            Mengenal arah dan tujuan yang membentuk identitas serta langkah
            kami.
          </p>
        </SectionContainer>
      </div>
      <SectionContainer
        padded
        className="flex flex-col items-center justify-center gap-8 sm:gap-12 lg:gap-16"
      >
        <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 lg:gap-4">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl text-pondok-primary font-semibold text-center">
            - Visi -
          </h1>
          <p className="text-center max-w-3xl">
            Menjadi lembaga pendidikan Islam yang unggul dalam membentuk
            generasi yang berakhlak mulia, berilmu, dan berdaya guna di tengah
            masyarakat.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 w-full">
          <div className="w-full flex flex-col gap-2 sm:gap-3 lg:gap-4">
            <h1 className="text-3xl sm:text-5xl lg:text-7xl text-pondok-primary font-semibold text-center">
              - Misi -
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
            <h1 className="text-3xl sm:text-5xl lg:text-7xl text-pondok-primary font-semibold text-center">
              - Tagline -
            </h1>
            <h1 className="capitalize text-2xl sm:text-3xl lg:text-4xl text-center max-w-xl sm:max-w-2xl lg:max-w-3xl lg:leading-12 font-extrabold mt-8 sm:mt-12 lg:mt-16">
              &quot; قُوا أَنْفُسَكُمْ وَأَهْلِيكُمْ نَارًا &quot;
            </h1>
            <p className="text-center">
              &quot;Jagalah dirimu dan keluargamu dari api neraka&quot;
            </p>
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

export default VisiMisiPage;
