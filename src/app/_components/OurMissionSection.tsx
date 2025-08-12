import { SectionContainer } from "@/components/layouts/SectionContainer";
import Image from "next/image";

const OurMissionSection = () => {
  return (
    <SectionContainer
      padded
      className="flex flex-col-reverse lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16 justify-between"
    >
      <div className="w-full max-w-xl grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
        <div className="rounded-md overflow-hidden">
          <Image
            src={"/images/home/history-img2.svg"}
            alt="history"
            width={1200}
            height={720}
            className="h-full object-cover object-center"
            priority
          />
        </div>
        <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4">
          <div className="aspect-3/4 rounded-md overflow-hidden">
            <Image
              src={"/images/home/history-img2.svg"}
              alt="history"
              width={1200}
              height={720}
              className="h-full object-cover object-center"
              priority
            />
          </div>
          <div className="aspect-video rounded-md overflow-hidden">
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
      <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
        <p className="uppercase font-semibold text-pondok-primary">Visi Misi</p>
        <h1 className="capitalize text-2xl sm:text-3xl lg:text-4xl max-w-xl sm:max-w-2xl lg:max-w-3xl lg:leading-12">
          Unggul membentuk generasi berakhlak mulia dan berilmu.
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
            Menumbuhkan semangat kemandirian, tanggung jawab, dan kepemimpinan
            pada diri santri.
          </li>
          <li>
            Menjalin hubungan yang harmonis dengan masyarakat, wali santri, dan
            lembaga pendidikan lain.
          </li>
        </ol>
      </div>
    </SectionContainer>
  );
};

export default OurMissionSection;
