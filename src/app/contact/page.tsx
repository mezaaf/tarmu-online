import { SectionContainer } from "@/components/layouts/SectionContainer";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import ContactForm from "./_components/ContactForm";

const ContactPage = () => {
  return (
    <>
      <div className="bg-pondok-accent w-full">
        <SectionContainer
          padded
          className="flex flex-col gap-4 sm:gap-6 lg:gap-8 items-center justify-center"
        >
          <p className="uppercase font-semibold text-pondok-primary">Kontak</p>
          <h1 className="capitalize text-pondok-text-light text-2xl sm:text-3xl lg:text-4xl text-center max-w-xl sm:max-w-2xl lg:max-w-3xl lg:leading-12">
            Hubungkan silaturahmi, memudahkan urusan
          </h1>
        </SectionContainer>
      </div>
      <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8 -mt-8 lg:-mt-12">
        <div className="w-full rounded-xl h-48 sm:h-64 lg:h-96 overflow-hidden">
          <Image
            src={"/images/login-img.jpg"}
            alt="history"
            width={1200}
            height={720}
            className="h-full w-full object-cover object-center"
            priority
          />
        </div>
      </div>
      <SectionContainer
        padded
        className="flex flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-8"
      >
        <h1 className="capitalize text-2xl sm:text-3xl lg:text-4xl text-center max-w-xl sm:max-w-2xl lg:max-w-3xl lg:leading-12">
          Mari memulai percakapan
        </h1>
        <p className="text-center max-w-2xl">
          Hubungi kami untuk mencari informasi, bertanya, atau memulai langkah
          Anda bersama pesantren — kami siap membantu.
        </p>
        <div className="flex flex-col lg:flex-row justify-between gap-4 sm:gap-6 lg:gap-8 w-full">
          <Card className="w-full bg-transparent shadow-none border-none p-0">
            <CardContent className="px-0">
              <ContactForm />
            </CardContent>
          </Card>
          <Card className="w-full lg:max-w-lg bg-pondok-accent shadow-none border-none">
            <CardContent className="text-pondok-text-light flex flex-col gap-2 sm:gap-3 lg:gap-4">
              <div className="flex flex-col">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold max-w-xl sm:max-w-2xl lg:max-w-3xl lg:leading-12">
                  Alamat
                </h1>
                <p>Jl. Sunan Bonang, Ngujur, Rejosari, Kebonsari, Madiun</p>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold max-w-xl sm:max-w-2xl lg:max-w-3xl lg:leading-12">
                  No Whatsapp
                </h1>
                <p>+62 858-0080-0795</p>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold max-w-xl sm:max-w-2xl lg:max-w-3xl lg:leading-12">
                  Email
                </h1>
                <p>info@pondokngujur.com</p>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold max-w-xl sm:max-w-2xl lg:max-w-3xl lg:leading-12">
                  Jam Operasional
                </h1>
                <ul>
                  <li>Senin - Jumat : 16.00 - 22.00 WIB</li>
                  <li>Sabtu - Ahad : 08.00 - 22.00 WIB</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </SectionContainer>
    </>
  );
};

export default ContactPage;
