import { SectionContainer } from "@/components/layouts/SectionContainer";
import { Book, BookOpen, Building, Heart, HomeIcon, Users } from "lucide-react";
import Image from "next/image";

const WhyChooseUsSection = () => {
  return (
    <SectionContainer
      padded
      className="flex flex-col lg:flex-row justify-between items-center gap-8 sm:gap-12 lg:gap-16"
    >
      <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
        <p className="uppercase font-semibold text-pondok-primary">
          Mengapa Anda Memilih Kami?
        </p>
        <h1 className="capitalize text-2xl sm:text-3xl lg:text-4xl max-w-xl sm:max-w-2xl lg:max-w-3xl lg:leading-12">
          Kami berdedikasi membentuk santri beriman & berakhlak mulia
        </h1>
        <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4">
          {whyChooseUsShort.map((item) => (
            <div
              key={item.title}
              className="flex flex-col lg:flex-row gap-2 sm:gap-3 lg:gap-4"
            >
              <div className="p-3 sm:p-4 lg:p-5 bg-pondok-primary/30 rounded-full w-fit h-fit">
                {item.icon}
              </div>
              <div className="flex flex-col gap-1 sm:gap-2 lg:gap-3">
                <h1 className="sm:text-lg lg:text-xl font-semibold">
                  {item.title}
                </h1>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full max-w-xl flex flex-col gap-2 sm:gap-3 lg:gap-4">
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
        <div className="w-full grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
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
        </div>
      </div>
    </SectionContainer>
  );
};

export default WhyChooseUsSection;

const whyChooseUsShort = [
  {
    title: "Pendidikan Agama Kuat",
    description:
      "Menanamkan pemahaman agama yang mendalam dan kokoh sebagai fondasi kehidupan santri.",
    icon: <BookOpen />,
  },
  {
    title: "Lingkungan Islami",
    description:
      "Suasana pondok yang kondusif dan sesuai nilai-nilai Islam untuk mendukung pembentukan karakter.",
    icon: <HomeIcon />,
  },
  {
    title: "Kurikulum Terpadu",
    description:
      "Menggabungkan pendidikan agama dan umum secara seimbang untuk hasil yang optimal.",
    icon: <Book />,
  },
  {
    title: "Pembinaan Akhlaq",
    description:
      "Pembinaan karakter dan moral santri agar menjadi pribadi yang berakhlak mulia.",
    icon: <Heart />,
  },
  {
    title: "Alumni Berkiprah",
    description:
      "Lulusan kami aktif berkontribusi di masyarakat dan berbagai bidang keilmuan.",
    icon: <Users />,
  },
  {
    title: "Fasilitas Lengkap",
    description:
      "Sarana pendukung belajar dan kegiatan santri yang memadai dan modern.",
    icon: <Building />,
  },
];
