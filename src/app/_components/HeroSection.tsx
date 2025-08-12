import { SectionContainer } from "@/components/layouts/SectionContainer";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="pb-8 sm:pb-12 lg:pb-20 w-full">
      <div className="w-full bg-pondok-accent relative overflow-hidden">
        <SectionContainer
          padded
          className="flex flex-col items-center gap-4 sm:gap-6 lg:gap-8"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-semibold text-center lg:tracking-wide lg:leading-20 text-pondok-text-light">
            Pondok Pesantren <br />{" "}
            <span className="text-pondok-primary text-nowrap">
              Tarbiyatul Mutathowi&apos;in
            </span>
          </h1>
          <p className="text-center max-w-xl text-pondok-text-light">
            Pondok Pesantren yang memadukan pendidikan diniyah dan umum, dalam
            suasana tradisional yang penuh keberkahan.
          </p>
          <Link href={"#"}>
            <Button
              size={"lg"}
              className="rounded-full cursor-pointer bg-pondok-primary hover:bg-pondok-primary/70 w-full dark:text-pondok-text-light group"
            >
              Daftar Sekarang{" "}
              <ArrowRight className="group-hover:-rotate-45 transition-transform duration-300 ease-in-out" />
            </Button>
          </Link>
        </SectionContainer>
        <div className="w-80 opacity-10 absolute top-0 right-0">
          <Image
            src={"/images/patern.png"}
            alt="patern"
            width={720}
            height={1200}
            className="w-full object-cover object-center"
          />
        </div>
      </div>
      <div className="relative overflow-hidden -mt-4 sm:-mt-8 lg:-mt-12 aspect-video container w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <HeroVideoDialog
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/TNaWUvLdnVE"
          thumbnailSrc="/images/home/history-img2.svg"
          thumbnailAlt="Hero Video"
          className="w-full aspect-video"
        />
      </div>
    </div>
  );
};

export default HeroSection;
