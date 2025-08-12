import { SectionContainer } from "@/components/layouts/SectionContainer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Mail, Plus, SendHorizonal } from "lucide-react";
import Image from "next/image";

const FAQsSection = () => {
  return (
    <div className="w-full bg-pondok-accent relative">
      <SectionContainer
        padded
        className="flex flex-col gap-4 sm:gap-6 lg:gap-8 items-center"
      >
        <p className="uppercase font-semibold text-pondok-primary">FAQS</p>
        <h1 className="capitalize text-pondok-text-light text-2xl sm:text-3xl lg:text-4xl text-center max-w-xl sm:max-w-2xl lg:max-w-3xl lg:leading-12">
          Pertanyaan yang Sering Diajukan (FAQ)
        </h1>
        <Accordion
          defaultValue="item-0"
          type="single"
          collapsible
          className="max-w-3xl w-full"
        >
          {items.map(({ question, answer }, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-45 text-pondok-text-light">
                  <p className="text-start">{question}</p>
                  <Plus className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="text-pondok-text-light/80">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="flex flex-col items-center justify-center">
          <div className="bg-pondok-primary text-pondok-text-light mb-4 inline-flex items-center justify-center rounded-full p-2">
            <Mail className="h-4 w-4" />
          </div>
          <p className="text-pondok-text-light mb-1 text-sm font-medium">
            Masih ada pertanyaan?
          </p>
          <p className="text-pondok-text-light/80 mb-4 text-xs">
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
        </div>
      </SectionContainer>
      <div className="hidden lg:block w-80 opacity-10 absolute top-0 right-0">
        <Image
          src={"/images/patern.png"}
          alt="patern"
          width={720}
          height={1200}
          className="w-full object-cover object-center"
        />
      </div>
      <div className="w-80 opacity-10 absolute bottom-0 left-0 rotate-180">
        <Image
          src={"/images/patern.png"}
          alt="patern"
          width={720}
          height={1200}
          className="w-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default FAQsSection;

const items = [
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
      "Anda dapat menghubungi pondok melalui WhatsApp di 0858-0080-0795 atau email ke info@pondokngujur.com.",
  },
];
