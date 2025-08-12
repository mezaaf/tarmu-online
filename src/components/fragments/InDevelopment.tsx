import { SectionContainer } from "../layouts/SectionContainer";

const InDevelopment = () => {
  return (
    <SectionContainer
      padded
      className="flex flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-8"
    >
      <h1 className="capitalize text-2xl sm:text-3xl lg:text-4xl font-bold text-pondok-primary text-center">
        halaman ini sedang dalam pengembangan
      </h1>
      <p className="max-w-2xl text-center">
        Saat ini kami sedang mempersiapkan halaman ini untuk memberikan
        pengalaman yang lebih baik bagi anda.
      </p>
    </SectionContainer>
  );
};

export default InDevelopment;
