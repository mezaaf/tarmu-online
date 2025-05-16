import HeadingFeaturePage from "@/components/fragments/HeadingFeaturePage.tsx";
import { SectionContainer } from "@/components/layouts/SectionContainer";

const UnitView = () => {
  return (
    <SectionContainer padded minFullscreen className="mt-12 gap-6">
      <HeadingFeaturePage
        title="Unit Pendidikan PonPes"
        subtitle="Tarbiyatul Mutathowi'in"
      />
    </SectionContainer>
  );
};

export default UnitView;
