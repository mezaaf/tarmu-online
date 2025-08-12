"use client";
import Image from "next/image";
import Link from "next/link";
import { Input } from "../ui/input";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="border-t mt-16 sm:mt-20 lg:mt-24">
        <div className="mx-auto container w-full px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* <!-- Footer Top --> */}
          <div className="py-20 lg:py-25">
            <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
              <div className="w-1/2 lg:w-1/4">
                <div className="flex items-center gap-1 sm:gap-2 lg:gap-3">
                  <Link href="/" className="relative">
                    <div className="w-10 sm:w-12 lg:w-15">
                      <Image
                        width={220}
                        height={160}
                        src="/images/logos/logo-pondok1.png"
                        alt="Logo"
                        className="w-full object-cover object-center"
                      />
                    </div>
                  </Link>
                  <h1 className="text-xl sm:text-2xl lg:text-3xl text-nowrap font-bold">
                    Pondok Ngujur
                  </h1>
                </div>

                <p className="mb-10 mt-5">
                  Pondok Pesantren Tarbiyatul Mutathowi&apos;in. <br /> Ngujur
                  Rejosari Kebonsari Madiun
                </p>

                <p className="mb-1.5 text-sectiontitle uppercase tracking-[5px]">
                  contact
                </p>
                <Link
                  href="mailto:info@pondokngujur.com"
                  className="text-itemtitle font-medium text-black dark:text-white"
                  target="_blank"
                >
                  info@pondokngujur.com
                </Link>
              </div>

              <div className="flex w-full flex-col gap-8 md:flex-row md:justify-between md:gap-0 lg:w-2/3 xl:w-7/12">
                <div>
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    Tautan Cepat
                  </h4>

                  <ul>
                    <li>
                      <Link
                        href="/"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Beranda
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/profile"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Tentang Kami
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        E-Da&apos;wat
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Artikel
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    Dukungan
                  </h4>

                  <ul>
                    <li>
                      <Link
                        href="#"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Pusat
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Panitia PSB
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Artikel
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Developer
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    Bulletin
                  </h4>
                  <p className="mb-4 w-[90%]">
                    Berlangganan untuk menerima pembaruan
                  </p>

                  <form action="#">
                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="Masukkan email anda"
                        className="w-full rounded-full py-5"
                      />

                      <button
                        aria-label="signup to newsletter"
                        className="absolute right-0 p-4 -top-1 cursor-pointer"
                      >
                        <svg
                          className="fill-[#757693] hover:fill-primary dark:fill-white"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_48_1487)">
                            <path
                              d="M3.1175 1.17318L18.5025 9.63484C18.5678 9.67081 18.6223 9.72365 18.6602 9.78786C18.6982 9.85206 18.7182 9.92527 18.7182 9.99984C18.7182 10.0744 18.6982 10.1476 18.6602 10.2118C18.6223 10.276 18.5678 10.3289 18.5025 10.3648L3.1175 18.8265C3.05406 18.8614 2.98262 18.8792 2.91023 18.8781C2.83783 18.8769 2.76698 18.857 2.70465 18.8201C2.64232 18.7833 2.59066 18.7308 2.55478 18.6679C2.51889 18.6051 2.50001 18.5339 2.5 18.4615V1.53818C2.50001 1.46577 2.51889 1.39462 2.55478 1.33174C2.59066 1.26885 2.64232 1.2164 2.70465 1.17956C2.76698 1.14272 2.83783 1.12275 2.91023 1.12163C2.98262 1.12051 3.05406 1.13828 3.1175 1.17318ZM4.16667 10.8332V16.3473L15.7083 9.99984L4.16667 3.65234V9.16651H8.33333V10.8332H4.16667Z"
                              fill=""
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_48_1487">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="flex flex-col flex-wrap items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex-row lg:justify-between lg:gap-0">
            <div>
              <ul className="flex items-center gap-8">
                <li>
                  <Link href="#" className="hover:text-primary">
                    Kebijakan Privasi
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Dukungan
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p>
                &copy; {new Date().getFullYear()} Pondok Ngujur. All rights
                reserved
              </p>
            </div>

            <div>
              <ul className="flex items-center gap-5">
                <ul className="flex items-center gap-5">
                  <li>
                    <Link
                      href="https://www.instagram.com/pondokngujur/"
                      target="_blank"
                    >
                      <RiInstagramFill className="hover:fill-tosca size-6 opacity-50 transition-all duration-300 hover:opacity-100" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.youtube.com/@pondokngujur"
                      target="_blank"
                    >
                      <FaYoutube className="hover:fill-tosca size-6 opacity-50 transition-all duration-300 hover:opacity-100" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.tiktok.com/@pondokngujur_"
                      target="_blank"
                    >
                      <AiFillTikTok className="hover:fill-tosca size-6 opacity-50 transition-all duration-300 hover:opacity-100" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.facebook.com/p/PPTarbiyatul-Mutathowiin-100071635964159/"
                      target="_blank"
                    >
                      <FaFacebook className="hover:fill-tosca size-6 opacity-50 transition-all duration-300 hover:opacity-100" />
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
