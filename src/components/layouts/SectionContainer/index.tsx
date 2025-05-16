import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

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
      <div className={cn("relative h-full", containerClassName)}>
        <section
          ref={ref}
          className={cn(
            "flex w-full flex-col py-5 md:py-10 lg:py-15",
            minFullscreen && "flex min-h-[calc(100vh-144px)] flex-col",
            className,
            padded ? "w-xs md:w-3xl lg:w-7xl" : "",
            props.id && `#${props.id}`,
          )}
          {...props}
        >
          {children}
        </section>
      </div>
    );
  },
);

SectionContainer.displayName = "SectionContainer";
