import { SectionContainer } from "@/components/layouts/SectionContainer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCapIcon, LucideBookOpenText } from "lucide-react";
import Image from "next/image";

const ProgramSection = () => {
  return (
    <div className="w-full bg-pondok-accent relative">
      <SectionContainer
        padded
        className="flex flex-col gap-4 sm:gap-6 lg:gap-8 items-center"
      >
        <p className="uppercase font-semibold text-pondok-primary">
          Program Unggulan
        </p>
        <h1 className="capitalize text-pondok-text-light text-2xl sm:text-3xl lg:text-4xl text-center max-w-xl sm:max-w-2xl lg:max-w-3xl lg:leading-12">
          Beberapa program terbaik di pondok pesantren kami
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4 sm:gap-6 lg:gap-8">
          {featuredPrograms.map((item) => (
            <Card key={item.id}>
              <CardHeader className="flex flex-col items-center justify-center">
                <div className="p-3 sm:p-4 lg:p-5 bg-pondok-primary/30 rounded-full">
                  {item.icon}
                </div>
                <CardTitle className="text-center sm:text-lg lg:text-xl font-bold">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                {item.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionContainer>
      <div className="w-80 opacity-10 absolute bottom-0 right-0">
        <Image
          src={"/images/patern.png"}
          alt="patern"
          width={720}
          height={1200}
          className="w-full object-cover object-center"
        />
      </div>
      <div className="w-80 opacity-10 absolute top-0 left-0 rotate-180">
        <Image
          src={"/images/patern.png"}
          alt="patern"
          width={720}
          height={1200}
          className="w-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default ProgramSection;

const featuredPrograms = [
  {
    id: 1,
    title: "Pendidikan Kitab Kuning",
    description:
      "Menanamkan dasar keilmuan Islam melalui kajian kitab kuning klasik seperti Fathul Qorib, Taqrib, dan Ta'lim Muta'allim.",
    icon: <LucideBookOpenText className="size-10" />,
  },
  {
    id: 2,
    title: "Tahfidz Al-Qur'an",
    description:
      "Program khusus hafalan Al-Qur'an dengan target mutqin dan evaluasi rutin, dibimbing oleh para ustadz berpengalaman.",
    icon: <LucideBookOpenText className="size-10" />,
  },
  {
    id: 3,
    title: "Madrasah Diniyah",
    description:
      "Pengajaran fiqih, tauhid, akhlaq, dan nahwu shorof secara klasikal, disesuaikan dengan jenjang dan kemampuan santri.",
    icon: <GraduationCapIcon className="size-10" />,
  },
  {
    id: 4,
    title: "Sekolah Formal Terintegrasi",
    description:
      "Program pendidikan MI, MTs, dan MA dengan kurikulum nasional berbasis nilai-nilai pesantren dan Islam.",
    icon: <GraduationCapIcon className="size-10" />,
  },
  {
    id: 5,
    title: "Kegiatan Ekstrakurikuler",
    description:
      "Pengembangan minat dan bakat melalui kegiatan hadrah, kaligrafi, pidato 3 bahasa, pramuka, dan lain-lain.",
    icon: <GraduationCapIcon className="size-10" />,
  },
  {
    id: 6,
    title: "Pembinaan Karakter",
    description:
      "Pembiasaan ibadah dan adab melalui kehidupan berasrama yang disiplin dan terarah.",
    icon: <GraduationCapIcon className="size-10" />,
  },
];
