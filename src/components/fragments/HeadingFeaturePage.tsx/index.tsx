"use client";

type HeadingFeaturePageProps = {
  title: string;
  subtitle: string;
};

const HeadingFeaturePage = (props: HeadingFeaturePageProps) => {
  return (
    <div className="mx-auto mb-0 text-center md:mb-5">
      <h2 className="mb-2 text-xl font-bold md:mb-4 md:text-3xl lg:mb-6 lg:text-4xl">
        {props.title}{" "}
        <span className="text-tosca border-tosca border-b-2 lg:border-b-4">
          {props.subtitle}
        </span>
      </h2>
    </div>
  );
};

export default HeadingFeaturePage;
