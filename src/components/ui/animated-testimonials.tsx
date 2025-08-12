"use client";

import { Feedback } from "@/types/feedback";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

type PropsType = {
  testimonials: Feedback[];
  autoplay?: boolean;
};

export const AnimatedTestimonials = ({ testimonials }: PropsType) => {
  const [active, setActive] = useState(0);
  const [initialRotations, setInitialRotations] = useState<number[]>([]);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    setInitialRotations(
      Array.from(
        { length: testimonials.length },
        () => Math.floor(Math.random() * 21) - 10,
      ),
    );
  }, [testimonials.length]);

  if (initialRotations.length !== testimonials.length) return null;

  return (
    <div className="mx-auto max-w-sm px-4 py-8 sm:py-12 lg:py-16 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12 w-full">
      <div className="relative grid grid-cols-1 sm:gap-12 lg:gap-16 md:grid-cols-2 w-full">
        <div className="w-full">
          <div className="relative h-80 w-80">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: initialRotations[index],
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : initialRotations[index],
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: initialRotations[index],
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={`${testimonial.user.image}`}
                    alt={`${testimonial.user.name}`}
                    width={1000}
                    height={1000}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-black dark:text-white">
              {testimonials[active].user.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              @{testimonials[active].user.username}
            </p>
            <motion.p className="mt-8 text-lg text-gray-500 dark:text-neutral-300">
              {testimonials[active].message.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="py-12 md:py-0 flex flex-col-reverse sm:flex-col gap-2 sm:gap-3 lg:gap-4">
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((num) => (
                <FaStar
                  key={num}
                  className={
                    num <= testimonials[active].rating
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }
                  size={20}
                  aria-label={`${num <= testimonials[active].rating ? "Filled" : "Empty"} star`}
                />
              ))}
            </div>
            <div className="flex gap-4 ">
              <button
                onClick={handlePrev}
                className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-pondok-accent dark:bg-pondok-accent cursor-pointer"
              >
                <ArrowLeft className="h-5 w-5 text-white transition-transform duration-300 group-hover/button:rotate-12 dark:text-white" />
              </button>
              <button
                onClick={handleNext}
                className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-pondok-accent dark:bg-pondok-accent cursor-pointer"
              >
                <ArrowRight className="h-5 w-5 text-white transition-transform duration-300 group-hover/button:-rotate-12 dark:text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
