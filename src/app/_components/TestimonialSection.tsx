import { SectionContainer } from "@/components/layouts/SectionContainer";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { getAllTestimonials } from "@/server/data/feedback";

const TestimonialSection = async () => {
  const testimonials = await getAllTestimonials();
  if (!testimonials) return null;
  return (
    <SectionContainer
      padded
      className="flex flex-col gap-4 sm:gap-6 lg:gap-8 items-center pb-0!"
    >
      <p className="uppercase font-semibold text-pondok-primary">Testimonial</p>
      <h1 className="capitalize text-2xl sm:text-3xl lg:text-4xl text-center max-w-xl sm:max-w-2xl lg:max-w-3xl lg:leading-12">
        Cerita dari mereka tentang kami.
      </h1>
      <AnimatedTestimonials testimonials={testimonials} />
    </SectionContainer>
  );
};

export default TestimonialSection;
