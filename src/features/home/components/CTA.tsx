"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  return (
    <>
      <div className="to-tosca/20 dark:from-background/10 rounded-lg bg-linear-to-t from-[#F8F9FF] py-2 md:py-3 lg:py-5">
        <div className="mx-auto flex flex-row items-center justify-center gap-4 md:gap-8 lg:gap-12">
          <div className="mx-auto flex flex-wrap gap-8 p-4 md:flex-nowrap md:items-center md:justify-between md:gap-0 md:p-5 lg:px-30">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className=""
            >
              <h2 className="mb-4 text-xl font-bold md:text-3xl lg:text-4xl">
                Daftar Sekarang dan Jadilah Bagian dari Generasi Santri Hebat!
              </h2>
              <p className="text-xs md:text-sm lg:text-base">
                Dapatkan pengalaman pendidikan agama dan umum yang seimbang,
                serta lingkungan belajar yang mendukung pertumbuhan spiritual
                dan intelektual.
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:w-[45%]"
            >
              <div className="flex items-center justify-end xl:justify-between">
                <Image
                  width={200}
                  height={200}
                  src="/images/logos/logo.svg"
                  alt="Logo"
                  className="hidden xl:block"
                />
                <Link href="/">
                  <Button
                    variant={"outline"}
                    className="border-tosca bg-transparent text-xs text-nowrap md:text-sm lg:text-base"
                  >
                    Daftar Sekarang
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTA;
