"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Mail, SendHorizonal } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

export default function FAQs() {
  const faqs: Omit<FAQItemProps, "index">[] = [
    {
      question: "Kapan pendaftaran santri baru dibuka?",
      answer:
        "Pendaftaran dibuka setiap tanggal 1 Mei hingga 31 Juli setiap tahun. Calon santri dapat mendaftar secara online atau langsung datang ke pondok.",
    },
    {
      question: "Apa saja syarat masuk Pondok?",
      answer:
        "Syarat masuk meliputi fotokopi Kartu Keluarga, Akta Lahir, rapor terakhir, dan pas foto ukuran 3x4 sebanyak 3 lembar.",
    },
    {
      question: "Apakah ada biaya pendaftaran?",
      answer:
        "Ya, biaya pendaftaran sebesar Rp 300.000, sudah termasuk formulir pendaftaran dan administrasi awal.",
    },
    {
      question: "Apakah semua santri wajib tinggal di asrama?",
      answer:
        "Ya, semua santri diwajibkan tinggal di asrama untuk memudahkan pengawasan, pembinaan, dan kegiatan sehari-hari.",
    },
    {
      question: "Bagaimana cara pembayaran uang bulanan?",
      answer:
        "Pembayaran bisa dilakukan langsung ke bagian administrasi atau melalui transfer bank sesuai nomor rekening yang tertera di brosur atau website resmi pondok.",
    },
    {
      question: "Apakah pondok menerima santri putra dan putri?",
      answer:
        "Ya, pondok menerima santri putra dan putri dengan asrama yang terpisah dan pengawasan yang ketat.",
    },
    {
      question: "Bagaimana cara menghubungi pihak pondok?",
      answer:
        "Anda dapat menghubungi pondok melalui WhatsApp di 08xxxxxxxxxx atau email ke info@pondokxxxx.com.",
    },
  ];

  return (
    <div className="relative w-full">
      <div className="mx-auto max-w-3xl space-y-2">
        {faqs.map((faq, index) => (
          <FAQItem key={index} {...faq} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={cn("mx-auto mt-12 max-w-md rounded-lg p-6 text-center")}
      >
        <div className="bg-pondok-primary text-pondok-text-light mb-4 inline-flex items-center justify-center rounded-full p-2">
          <Mail className="h-4 w-4" />
        </div>
        <p className="text-pondok-text-light mb-1 text-sm font-medium">
          Masih ada pertanyaan?
        </p>
        <p className="text-pondok-text-light/50 mb-4 text-xs">
          Kami di sini untuk membantu Anda
        </p>
        <Button
          size={"lg"}
          variant={"outline"}
          className="cursor-pointer group rounded-full border-2 border-pondok-primary text-pondok-text-light dark:border-pondok-primary bg-transparent dark:bg-transparent hover:bg-pondok-primary hover:text-pondok-text-light dark:hover:bg-pondok-primary dark:hover:text-pondok-text-light transition-colors duration-300 ease-in-out"
        >
          Hubungi Kami{" "}
          <SendHorizonal className="group-hover:-rotate-45 transition-transform duration-300 ease-in-out" />
        </Button>
      </motion.div>
    </div>
  );
}

function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      className={cn(
        "group border-border/60 rounded-lg border",
        "transition-all duration-200 ease-in-out",
        isOpen
          ? "bg-pondok-primary/30 shadow-sm"
          : "hover:bg-pondok-primary/50",
      )}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 px-6 py-4 cursor-pointer"
      >
        <h3
          className={cn(
            "text-left text-base font-medium transition-colors duration-200",
            "text-foreground/80",
            isOpen && "text-foreground",
          )}
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className={cn(
            "shrink-0 rounded-full p-0.5",
            "transition-colors duration-200",
            isOpen ? "text-primary" : "text-muted-foreground",
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4,
                  ease: [0.04, 0.62, 0.23, 0.98],
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.1,
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.3,
                  ease: "easeInOut",
                },
                opacity: {
                  duration: 0.25,
                },
              },
            }}
          >
            <div className="border-border/40 border-t px-6 pt-2 pb-4">
              <motion.p
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="text-muted-foreground text-sm leading-relaxed"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
