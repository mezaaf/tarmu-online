import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type SectionContainerProps = {
  padded?: boolean;
  containerClassName?: string;
  minFullscreen?: boolean;
  id?: string;
};

export const SectionContainer = forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & SectionContainerProps
>(
  (
    {
      minFullscreen,
      className,
      children,
      padded,
      containerClassName,
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "py-8 sm:py-12 lg:py-20",
          containerClassName,
          minFullscreen &&
            "flex min-h-[calc(100vh-144px)] flex-col justify-center",
          className,
          padded
            ? "max-w-7xl container px-4 sm:px-6 lg:px-8 mx-auto w-full"
            : "w-full",
          props.id && `#${props.id}`,
        )}
        {...props}
      >
        {children}
      </section>
    );
  },
);

SectionContainer.displayName = "SectionContainer";
