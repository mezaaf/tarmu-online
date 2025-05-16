"use client";

import { Marquee } from "@/components/magicui/marquee";
import ReviewCard from "./ReviewCard";
import { reviews } from "./testimonialData";
import { SectionContainer } from "@/components/layouts/SectionContainer";
import HeadingFeaturePage from "@/components/fragments/HeadingFeaturePage.tsx";

const Testimonial = () => {
  return (
    <>
      <SectionContainer padded className="!pb-0">
        <HeadingFeaturePage
          title="Kata Alumni PonPes"
          subtitle="Tarbiyatul Mutathowi'in"
        />
      </SectionContainer>
      <section className="relative flex w-full flex-col items-center justify-center overflow-hidden pb-5 md:pb-10">
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {reviews.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
      </section>
    </>
  );
};

export default Testimonial;
