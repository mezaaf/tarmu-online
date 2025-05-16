"use client";

import { Marquee } from "@/components/magicui/marquee";
import BlogCard from "./blogCard";
import BlogData from "./blogData";
import { SectionContainer } from "@/components/layouts/SectionContainer";
import HeadingFeaturePage from "@/components/fragments/HeadingFeaturePage.tsx";

const Blog = () => {
  return (
    <>
      <SectionContainer padded className="!pb-0">
        <HeadingFeaturePage
          title="Blog Terbaru PonPes"
          subtitle="Tarbiyatul Mutathowi'in"
        />
      </SectionContainer>
      <section className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {BlogData.map((blog) => (
            <div key={blog._id}>
              <BlogCard
                _id={blog._id}
                mainImage={blog.mainImage}
                title={blog.title}
                metadata={blog.metadata}
              />
            </div>
          ))}
        </Marquee>

        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
      </section>
    </>
  );
};

export default Blog;
