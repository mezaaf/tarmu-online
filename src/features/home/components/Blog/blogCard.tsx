"use client";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  _id: number;
  mainImage: string;
  title: string;
  metadata?: string;
};

const BlogCard = (props: BlogCardProps) => {
  const { mainImage, title, metadata } = props;
  return (
    <div
      className={cn(
        "relative flex h-full cursor-pointer flex-row items-center gap-2"
      )}
    >
      <Card className="h-88 w-80 md:h-98 md:w-90 lg:h-108 lg:w-100">
        <CardContent className="flex flex-col items-center justify-between gap-5 px-5">
          <Link
            href={`/blog/`}
            className="relative block aspect-368/239 h-46 overflow-hidden rounded-lg md:h-52 lg:h-60"
          >
            <Image
              sizes="10"
              src={`${mainImage}`}
              alt={title}
              fill
              className="duration-300 hover:scale-110"
            />
          </Link>

          <div>
            <h3 className="hover:text-tosca line-clamp-2 inline-block text-xs font-medium duration-300 md:text-sm lg:text-base">
              <Link href={`/blog/blog-details`}>{`${title}`}</Link>
            </h3>
            <p className="line-clamp-3 text-xs md:text-sm lg:text-base">
              {metadata}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogCard;
