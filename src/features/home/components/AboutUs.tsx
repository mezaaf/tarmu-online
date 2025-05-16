"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { SectionContainer } from "@/components/layouts/SectionContainer";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <>
      <SectionContainer padded>
        <div className="mx-auto">
          <div className="flex items-center gap-8 lg:gap-32.5">
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
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="hidden gap-3 md:flex md:flex-row"
            >
              <div className="flex flex-col gap-3">
                <div className="h-30 w-30 overflow-hidden rounded-full rounded-br-none md:h-40 md:w-40 lg:h-70 lg:w-70">
                  <Image
                    src="/images/home/history-img2.svg"
                    alt="Santri Pondok"
                    className="mx-auto h-full w-full object-cover"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="h-30 w-30 overflow-hidden rounded-full rounded-tr-none md:h-40 md:w-40 lg:h-70 lg:w-70">
                  <Image
                    src="/images/home/history-img2.svg"
                    alt="Santri Pondok"
                    className="mx-auto h-full w-full object-cover"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="h-30 w-30 overflow-hidden rounded-full rounded-bl-none md:h-40 md:w-40 lg:h-70 lg:w-70">
                  <Image
                    src="/images/home/history-img2.svg"
                    alt="Santri Pondok"
                    className="mx-auto h-full w-full object-cover"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="h-30 w-30 overflow-hidden rounded-full rounded-tl-none md:h-40 md:w-40 lg:h-70 lg:w-70">
                  <Image
                    src="/images/home/history-img2.svg"
                    alt="Santri Pondok"
                    className="mx-auto h-full w-full object-cover"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
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
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className=""
            >
              <span className="font-medium uppercase">About Us</span>
              <h2 className="mb-2 text-xl font-bold md:mb-4 md:text-3xl lg:mb-6 lg:text-4xl">
                Kenal Lebih Dalam{" "}
                <span className="text-tosca border-tosca border-b-2 lg:border-b-4">
                  Tentang Kami
                </span>
              </h2>
              <p className="text-xs md:text-sm lg:text-base">
                Pondok Pesantren Tarbiyatul Mutathowi{"'"}in berkomitmen
                membentuk generasi beriman, berilmu, dan berakhlakul karimah,
                berpijak pada tradisi salafiyah dan inovasi modern.
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="border-stroke dark:border-strokedark dark:bg-blacksection flex h-7 w-7 items-center justify-center rounded-[50%] border md:h-10 md:w-10 lg:h-15 lg:w-15">
                  <p className="text-xs font-semibold md:text-sm lg:text-base">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-xs md:text-sm lg:text-base">
                    Pendidikan Kitab Kuning & Kurikulum Modern
                  </h3>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="border-stroke dark:border-strokedark dark:bg-blacksection flex h-7 w-7 items-center justify-center rounded-[50%] border md:h-10 md:w-10 lg:h-15 lg:w-15">
                  <p className="text-xs font-semibold md:text-sm lg:text-base">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-xs md:text-sm lg:text-base">
                    Program Mujahadah & Pembentukan Karakter
                  </h3>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="border-stroke dark:border-strokedark dark:bg-blacksection flex h-7 w-7 items-center justify-center rounded-[50%] border md:h-10 md:w-10 lg:h-15 lg:w-15">
                  <p className="md-text-sm text-xs font-semibold lg:text-base">
                    03
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="md-text-sm mb-0.5 text-xs lg:text-base">
                    Pembinaan Kepemimpinan Santri
                  </h3>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="border-stroke dark:border-strokedark dark:bg-blacksection flex h-7 w-7 items-center justify-center rounded-[50%] border md:h-10 md:w-10 lg:h-15 lg:w-15">
                  <p className="md-text-sm text-xs font-semibold lg:text-base">
                    04
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="md-text-sm mb-0.5 text-xs lg:text-base">
                    Manajemen Profesional & Fasilitas Lengkap
                  </h3>
                </div>
              </div>
              <Link
                href="#"
                className="hover:text-primary dark:hover:text-primary mt-7.5 inline-flex items-center gap-2.5"
              >
                <Button
                  variant={"outline"}
                  className="text-xs md:text-sm lg:text-base"
                >
                  Selengkapnya
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

export default AboutUs;
