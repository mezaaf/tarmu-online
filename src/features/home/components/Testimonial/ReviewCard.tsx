"use client";

import { cn } from "@/lib/utils";
import type { Review } from "@/types/review";
import Image from "next/image";

const ReviewCard = (review: Review) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width="32"
          height="32"
          alt=""
          src={review.img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {review.name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">
            {review.username}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{review.body}</blockquote>
    </figure>
  );
};

export default ReviewCard;
