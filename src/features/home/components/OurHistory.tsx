"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { SectionContainer } from "@/components/layouts/SectionContainer";
import { Button } from "@/components/ui/button";

const OurHistory = () => {
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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h4 className="font-medium uppercase">Our History</h4>
              <h2 className="mb-2 text-xl font-bold md:mb-4 md:text-3xl lg:mb-6 lg:text-4xl">
                Sejarah PonPes {"   "}
                <span className="text-tosca border-tosca border-b-2 lg:border-b-4">
                  Tarbiyatul Mutathowi{"'"}in
                </span>
              </h2>
              <p className="text-xs md:text-sm lg:text-base">
                Pondok Pesantren Tarbiyatul Mutathowi{"'"}in berdiri sejak 1946
                sebagai pusat pendidikan Islam yang mengintegrasikan keilmuan,
                akhlak, dan kemandirian. Dengan akar tradisi yang kuat dari KH.
                Hasyim Asy{"'"}ari melalui KH. Ali Rohmat, kami terus berkembang
                menjadi lembaga yang modern tanpa meninggalkan nilai-nilai
                salaf.
              </p>
              <div>
                <Link
                  href="/profil"
                  className="hover:text-primary dark:hover:text-primary mt-7.5 inline-flex items-center gap-2.5"
                >
                  <Button
                    variant={"outline"}
                    className="border-tosca bg-transparent text-xs md:text-sm lg:text-base"
                  >
                    Selengkapnya
                  </Button>
                </Link>
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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="hidden items-center justify-between px-2 md:flex md:w-1/2"
            >
              <div className="bg-tosca mx-3 w-1/2 overflow-hidden rounded-tl-full rounded-tr-none rounded-b-full shadow-2xl">
                <Image
                  priority
                  src={"/images/home/mbah-ali.svg"}
                  alt="History"
                  height={100}
                  width={100}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="bg-tosca mx-3 w-1/2 overflow-hidden rounded-t-full rounded-br-full rounded-bl-none shadow-2xl">
                <Image
                  priority
                  src={"/images/home/yai-hasyim.svg"}
                  alt="History"
                  height={100}
                  width={100}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

export default OurHistory;
