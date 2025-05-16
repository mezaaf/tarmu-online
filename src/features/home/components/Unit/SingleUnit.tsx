"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Unit } from "@/types/unit";

const SingleUnit = (unit: Unit) => {
  const { image, href, name, id } = unit;

  return (
    <>
      <motion.a
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: id }}
        viewport={{ once: true }}
        href={href}
      >
        <div className="w-10 md:w-20 lg:w-30">
          <Image
            className="h-full w-full opacity-65 transition-all duration-300 hover:opacity-100"
            src={image}
            alt={name}
            width={100}
            height={100}
          />
        </div>
      </motion.a>
    </>
  );
};

export default SingleUnit;
