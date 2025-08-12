import { SectionContainer } from "@/components/layouts/SectionContainer";
import { Button } from "@/components/ui/button";
import { ArrowRight, SendHorizontal } from "lucide-react";

const CTASection = () => {
  return (
    <div className="w-full bg-pondok-accent">
      <SectionContainer
        padded
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
      >
        <div className="text-pondok-text-light flex flex-col gap-3 sm:gap-4 lg:gap-5">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl max-w-xl sm:max-w-2xl lg:max-w-3xl lg:leading-12">
            Tunggu apa lagi?, Jadilah Bagian Dari Kami
          </h1>
          <p>
            Mari bersama membangun masa depan yang cerah dengan pendidikan yang
            berkualitas.
          </p>
        </div>
        <div className="w-full flex items-center sm:justify-center">
          <div className="w-fit flex flex-col items-center sm:justify-center gap-3 sm:gap-4 lg:gap-5">
            <Button
              size={"lg"}
              className="rounded-full cursor-pointer bg-pondok-primary hover:bg-pondok-primary/70 w-full dark:text-pondok-text-light group"
            >
              Daftar Sekarang{" "}
              <ArrowRight className="group-hover:-rotate-45 transition-transform duration-300 ease-in-out" />
            </Button>
            <Button
              size={"lg"}
              variant={"outline"}
              className="rounded-full cursor-pointer border-2 text-pondok-text-light w-full hover:bg-white dark:hover:bg-white dark:hover:text-gray-950 bg-transparent dark:bg-transparent dark:border-white group transition-colors duration-300 ease-in-out"
            >
              Hubungi Kami{" "}
              <SendHorizontal className="group-hover:-rotate-45 transition-transform duration-300 ease-in-out" />
            </Button>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default CTASection;
