import CTASection from "./_components/CTASection";
import FAQsSection from "./_components/FAQsSection";
import HeroSection from "./_components/HeroSection";
import LatestBlogSection from "./_components/LatestBlogSection";
import OurMissionSection from "./_components/OurMissionSection";
import ProgramSection from "./_components/ProgramSection";
import TestimonialSection from "./_components/TestimonialSection";
import WhyChooseUsSection from "./_components/WhyChooseUsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProgramSection />
      <WhyChooseUsSection />
      <OurMissionSection />
      <CTASection />
      <TestimonialSection />
      <LatestBlogSection />
      <FAQsSection />
    </>
  );
}
