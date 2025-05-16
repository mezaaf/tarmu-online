import { SectionContainer } from "@/components/layouts/SectionContainer";
import React from "react";
import HeadingFeaturePage from "@/components/fragments/HeadingFeaturePage.tsx";
import AnimatedGalery from "../components/AnimatedGalery";

const GaleryView = () => {
  return (
    <SectionContainer padded minFullscreen className="mt-12 gap-6">
      <HeadingFeaturePage
        title="Galeri PonPes"
        subtitle="Tarbiyatul Mutathowi'in"
      />
      <AnimatedGalery />
    </SectionContainer>
  );
};

export default GaleryView;
