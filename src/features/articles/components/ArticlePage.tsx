import BannerSection from "@/components/fragments/BannerSection";
import { SectionContainer } from "@/components/layouts/SectionContainer";
import supabase from "@/lib/supabase/client";
import { IArticle } from "@/types/articles";
import { useEffect, useState } from "react";
import StickyBox from "react-sticky-box";
import Category from "../components/Category";
import Post from "./Post";
import NewPost from "./NewPost";

type ArticlePageProps = {
  category: number;
};

const ArticlePage = (props: ArticlePageProps) => {
  const [article, setArticle] = useState<IArticle[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("articles")
        .select(
          `
      id,
      title,
      slug,
      content,
      excerpt,
        author_id,
      category_id,
      status,
      author:users(id, username, profile_picture_url),
      category:categories(id, name),
      created_at,
      updated_at
      `
        )
        .eq("category_id", props.category);

      if (error) {
        console.log(error);
      }
      if (data) {
        setArticle(
          (data ?? []).map((item) => ({
            ...item,
            author: Array.isArray(item.author) ? item.author[0] : item.author,
            category: Array.isArray(item.category)
              ? item.category[0]
              : item.category,
          })) as IArticle[]
        );
      }
    };

    fetchData();
  }, [props.category]);

  return (
    <>
      <BannerSection />
      <SectionContainer
        padded
        minFullscreen
        className="-mt-5 flex w-full flex-row justify-between lg:-mt-15"
      >
        <div>
          <Post articles={article} />
        </div>
        <StickyBox offsetTop={70} className="hidden h-fit w-md lg:block">
          <NewPost articles={article} />
          <Category />
        </StickyBox>
      </SectionContainer>
    </>
  );
};

export default ArticlePage;
