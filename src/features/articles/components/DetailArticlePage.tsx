import BannerSection from "@/components/fragments/BannerSection";
import { SectionContainer } from "@/components/layouts/SectionContainer";
import StickyBox from "react-sticky-box";
import Category from "../components/Category";
import PostDetail from "./PostDetail";
import { IArticle } from "@/types/articles";
import NewPostDetail from "./NewPostDetail";

type DetailArticlePageProps = {
  articles: IArticle[];
};

const DetailArticlePage = (props: DetailArticlePageProps) => {
  return (
    <>
      <BannerSection />
      <SectionContainer
        padded
        minFullscreen
        className="-mt-5 flex w-full flex-row justify-between lg:-mt-15"
      >
        <div>
          <PostDetail articles={props.articles} />
        </div>
        <StickyBox offsetTop={70} className="hidden h-fit w-md lg:block">
          <NewPostDetail articles={props.articles} />
          <Category />
        </StickyBox>
      </SectionContainer>
    </>
  );
};

export default DetailArticlePage;
