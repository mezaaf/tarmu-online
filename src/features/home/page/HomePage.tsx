import AboutUs from "../components/AboutUs";
import Blog from "../components/Blog";
import CTA from "../components/CTA";
import Hero from "../components/Hero";
import OurHistory from "../components/OurHistory";
import Testimonial from "../components/Testimonial";
import Unit from "../components/Unit";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Unit />
      <OurHistory />
      <AboutUs />
      <CTA />
      <Blog />
      <Testimonial />
    </>
  );
};

export default HomePage;
