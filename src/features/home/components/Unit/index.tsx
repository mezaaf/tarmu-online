"use client";

import SingleUnit from "./SingleUnit";
import unitData from "./unitData";

const Unit = () => {
  return (
    <section className="bg-accent -mt-5 flex w-full flex-col items-center justify-center border-y py-2 md:-mt-10 md:py-3 lg:-mt-15 lg:py-5">
      <div className="flex flex-wrap gap-6 md:flex-nowrap md:items-center md:justify-between md:gap-10 lg:gap-20">
        {unitData.map((unit) => (
          <SingleUnit key={unit.id} {...unit} />
        ))}
      </div>
    </section>
  );
};

export default Unit;
