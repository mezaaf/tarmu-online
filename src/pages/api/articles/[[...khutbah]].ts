import { retrieveArticlesByCategory } from "@/lib/supabase/services";
// import { IArticle } from "@/types/articles";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: boolean;
  statusCode: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  // data: {
  //   id: string;
  //   title: string;
  //   slug: string;
  //   content: string;
  //   excerpt: string;
  //   author_id: string;
  //   category_id: number;
  //   status: string;
  //   author: {
  //     id: string;
  //     username: string;
  //     profile_picture_url: string;
  //   }[];
  //   category: {
  //     id: number;
  //     name: string;
  //   }[];
  //   created_at: Date;
  //   updated_at: Date;
  // };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.query);
  const data = await retrieveArticlesByCategory("articles", "category_id", 1);

  res.status(200).json({ status: true, statusCode: 200, data });
}
