import { Badge } from "@/components/ui/badge";
import { IArticle } from "@/types/articles";
import { format } from "date-fns";
import Image from "next/image";

type DetailArticlePageProps = {
  articles: IArticle[];
};

const PostDetail = (props: DetailArticlePageProps) => {
  const formattedDate = (date: string | Date) => {
    return format(date, "EEE, dd MMM yyyy");
  };
  return (
    <>
      {props.articles.map((item) => (
        <div key={item.id} className="flex w-xs flex-col md:w-3xl">
          <div className="mb-4 md:px-8">
            <h1 className="mt-5 text-center text-xl font-bold md:text-3xl lg:text-4xl">
              {item.title}
            </h1>
          </div>
          <div className="flex w-full items-center justify-center overflow-hidden rounded-xl md:h-100">
            <Image
              src="/images/history-img2.svg"
              priority
              alt="news-1"
              width={100}
              height={100}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-row gap-2 py-2">
              <div className="py-0.5 text-white">
                <Badge className="bg-tosca rounded-full text-xs uppercase md:text-sm md:font-semibold lg:text-sm">
                  {item.category.name}
                </Badge>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="border-tosca border-b-2 text-xs leading-none md:text-sm lg:text-sm">
                  {formattedDate(item.created_at)}
                </p>
              </div>
            </div>
            <div>
              <h1 className="text-sm font-semibold capitalize">
                by {item.author.username}
              </h1>
            </div>
          </div>
          <div className="text-xs leading-5 md:text-sm lg:text-base">
            {item.content}
          </div>
        </div>
      ))}
    </>
  );
};

export default PostDetail;
