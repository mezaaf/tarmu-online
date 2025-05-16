import React, { useEffect, useState } from "react";
import DetailArticlePage from "../../components/DetailArticlePage";
import { useRouter } from "next/router";
import { IArticle } from "@/types/articles";
import supabase from "@/lib/supabase/client";

const DetailQaPage = () => {
  const { query } = useRouter();

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
        .eq("slug", query.slug);
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
  }, [query.slug]);

  console.log(article);
  return <DetailArticlePage articles={article} />;
};

export default DetailQaPage;
