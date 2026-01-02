import NavandFooterWrapper from "@/components/PageWrapper/wrapper";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <NavandFooterWrapper>
      <main className="container px-6 mx-auto">
        <section className="flex flex-col justify-center items-center h-[70vh] space-y-6">
          <div className="flex justify-center items-center text-center w-fit gap-2 bg-[#E0E0E0] px-3 py-3 rounded-[30px] mt-5">
            <div className="circle w-2 h-2 rounded-full bg-green-500"></div>
            <h5 className="dark:text-black">
              Identify-first Commerce Revolution
            </h5>
            <span>
              <ArrowRight size={14} className="dark:text-black" />
            </span>
          </div>
          <div className="hero-section capitalize text-[24px] flex flex-col items-center justify-center">
            <h1 className="font-bold md:text-[70px] text-[30px] text-center leading-8 md:leading-15 mb-5 md:mb-7">
              the future of commerce start with Transparent Blockchain
            </h1>
            <p className="uppercase text-center md:text-[20px] text-[14px]">
              the world's first identity-verified e-commerce platform by Sui
              with native sui escrow. cryptographic trust and privacy-preserving
              compliance
            </p>
          </div>
          <Link
            href=""
            className="flex text-[12px] justify-center items-center gap-1 border-0 bg-linear-to-r from-indigo-800 to-purple-800 text-white px-4 py-1 rounded-[40px] w-fit"
          >
            Explore Marketplace <ArrowRight size={12} />
          </Link>
        </section>
      </main>
      <section className="relative bg-[#e0e0e0] mini-categories mb-8 w-full px-6 py-8 -z-30">
        <div className="cat-container flex flex-col md:flex-row gap-5 dark:text-black">
          <div className="image relative w-full h-[200px]">
            <Image
              src="/images/image-1.png"
              alt="category-image"
              fill
              sizes="100vw"
              priority
              className="object-cover rounded-[20px]"
            />
            <p className="bg-white/80 w-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-[0.5px] px-6 rounded-[8px] capitalize">
              women's
            </p>
          </div>
          <div className="image relative w-full h-[200px]">
            <Image
              src="/images/image-2.png"
              alt="category-image"
              fill
              sizes="100vw"
              priority
              className="object-cover rounded-[20px]"
            />
            <p className="bg-white/80 w-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2py-[0.5px] px-6 rounded-[8px] capitalize">
              accessories
            </p>
          </div>
          <div className="image relative w-full h-[200px]">
            <Image
              src="/images/image-3.png"
              alt="category-image"
              fill
              sizes="100vw"
              priority
              className="object-cover rounded-[20px]"
            />
            <p className="bg-white/80 w-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-[0.5px] px-6 rounded-[8px] capitalize">
              gadget
            </p>
          </div>
          <div className="image relative w-full h-[200px]">
            <Image
              src="/images/image-4.png"
              alt="category-image"
              fill
              sizes="100vw"
              priority
              className="object-cover rounded-[20px]"
            />
            <p className="bg-white/80 w-fit mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-[0.5px] px-6 rounded-[10px] capitalize">
              men's
            </p>
          </div>
        </div>
      </section>
    </NavandFooterWrapper>
  );
}
