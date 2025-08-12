import PaginationButton from "@/components/fragments/PaginationButton";
import VerticalArticleCard from "@/components/fragments/VerticalArticleCard";
import { SectionContainer } from "@/components/layouts/SectionContainer";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ArticlePage = () => {
  return (
    <>
      <div className="bg-pondok-accent w-full">
        <SectionContainer
          padded
          className="flex flex-col gap-4 sm:gap-6 lg:gap-8 items-center justify-center"
        >
          <p className="uppercase font-semibold text-pondok-primary">Blog</p>
          <h1 className="capitalize text-pondok-text-light text-2xl sm:text-3xl lg:text-4xl text-center max-w-xl sm:max-w-2xl lg:max-w-3xl lg:leading-12">
            Artikel & Berita Kami
          </h1>
          <p className="text-pondok-text-light text-center max-w-2xl">
            Temukan cerita inspiratif, tren terbaru, dan gagasan yang mendorong
            perkembangan dunia pendidikan.
          </p>
        </SectionContainer>
      </div>
      <SectionContainer
        padded
        className="flex flex-col gap-4 sm:gap-6 lg:gap-8 items-center justify-center"
      >
        <div className="w-full flex flex-col-reverse sm:flex-row items-center justify-between gap-2 sm:gap-3 lg:gap-4">
          <Input
            placeholder="Cari artikel / berita..."
            className="rounded-full w-full sm:w-2xs"
          />
          <Select defaultValue="all">
            <SelectTrigger className="rounded-full w-full sm:w-2xs">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Kategori</SelectLabel>
                <SelectItem value="all">Semua</SelectItem>
                <SelectItem value="khutbah">Khutbah Jumat</SelectItem>
                <SelectItem value="qa">Tanya Jawab</SelectItem>
                <SelectItem value="tokoh">Biografi Tokoh</SelectItem>
                <SelectItem value="cerpen">Cerpen</SelectItem>
                <SelectItem value="sastra">Sastra</SelectItem>
                <SelectItem value="resensi">Resensi</SelectItem>
                <SelectItem value="puisi">Puisi</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <VerticalArticleCard />
          <VerticalArticleCard />
          <VerticalArticleCard />
          <VerticalArticleCard />
          <VerticalArticleCard />
          <VerticalArticleCard />
          <VerticalArticleCard />
          <VerticalArticleCard />
          <VerticalArticleCard />
          <VerticalArticleCard />
          <VerticalArticleCard />
          <VerticalArticleCard />
        </div>
        <PaginationButton currentPage={1} totalPages={7} />
      </SectionContainer>
    </>
  );
};

export default ArticlePage;
