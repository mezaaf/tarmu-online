import ArticleCard from "@/components/fragments/ArticleCard";
import { SectionContainer } from "@/components/layouts/SectionContainer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const LatestBlogSection = () => {
  return (
    <SectionContainer
      padded
      className="flex flex-col gap-4 sm:gap-6 lg:gap-8 items-center"
    >
      <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 w-full">
        <p className="uppercase font-semibold text-pondok-primary">Blog</p>
        <div className="flex items-center justify-between">
          <h1 className="capitalize text-2xl sm:text-3xl lg:text-4xl text-center max-w-xl sm:max-w-2xl lg:max-w-3xl lg:leading-12">
            Berita & Artikel Terbaru Kami
          </h1>
          <Button
            size={"lg"}
            variant={"outline"}
            className="cursor-pointer group rounded-full border-2 border-pondok-primary dark:border-pondok-primary bg-transparent dark:bg-transparent hover:bg-pondok-primary hover:text-pondok-text-light dark:hover:bg-pondok-primary dark:hover:text-pondok-text-light transition-colors duration-300 ease-in-out"
          >
            lihat Semua{" "}
            <ArrowRight className="group-hover:-rotate-45 transition-transform duration-300 ease-in-out" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4 sm:gap-6 lg:gap-8">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </SectionContainer>
  );
};

export default LatestBlogSection;
