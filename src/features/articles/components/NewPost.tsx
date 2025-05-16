import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IArticle } from "@/types/articles";
import { format } from "date-fns";

type PostProps = {
  articles: IArticle[];
};

const NewPost = (props: PostProps) => {
  const formattedDate = (date: string | Date) => {
    return format(date, "EEE, dd MMM yyyy");
  };
  return (
    <>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Postingan Terbaru</CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-y-2">
          {props.articles?.slice(0, 3).map((item) => (
            <Link key={item.id} href={"/"} className="hover:text-tosca">
              <div className="flex flex-row items-center justify-start gap-5">
                <div className="aspect-square h-20 w-20">
                  <Image
                    src="/images/history-img2.svg"
                    alt="news-1"
                    width={100}
                    height={100}
                    className="h-full w-full rounded-md object-cover"
                  />
                </div>
                <div>
                  <p className="leading-5">{item.title}</p>
                  <p className="text-tosca text-sm font-semibold">
                    {formattedDate(item.created_at)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </CardContent>
      </Card>
    </>
  );
};

export default NewPost;
