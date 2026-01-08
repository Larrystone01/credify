import NavandFooterWrapper from "@/components/PageWrapper/wrapper";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProductShowcase from "@/components/productshowcase";

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
      <section className="relative w-full md:h-[600px] overflow-hidden bg-gray-200">
        <svg
          viewBox="0 0 1457 833"
          fill="none"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1092.81 8.04297C1163.15 -0.441812 1254.19 -0.443526 1327.65 1.67871C1364.38 2.73973 1396.7 4.33193 1419.85 5.6582C1431.43 6.32134 1440.7 6.91763 1447.09 7.34863C1450.28 7.56412 1452.75 7.73824 1454.42 7.8584C1455.25 7.91847 1455.89 7.96549 1456.32 7.99707C1456.38 8.00193 1456.44 8.00562 1456.5 8.00977V824.326C1456.44 824.331 1456.38 824.336 1456.31 824.342C1455.89 824.376 1455.25 824.427 1454.41 824.492C1452.74 824.623 1450.27 824.812 1447.07 825.047C1440.68 825.516 1431.4 826.165 1419.81 826.887C1396.64 828.33 1364.29 830.062 1327.54 831.217C1254.05 833.526 1163.02 833.525 1092.82 824.292C1019.45 814.644 966.387 789.857 913.008 767.372C859.628 744.886 805.961 724.715 731.502 724.412C655.929 724.104 601.333 744.314 547.016 766.972C492.699 789.629 438.687 814.72 364.187 824.292C293.943 833.317 202.913 833.318 129.427 831.061C92.6872 829.932 60.3394 828.239 37.1768 826.828C25.5957 826.123 16.311 825.489 9.92188 825.03C6.72728 824.801 4.25585 824.615 2.58398 824.487C1.74857 824.423 1.11262 824.374 0.685547 824.341C0.618704 824.336 0.556568 824.331 0.5 824.326V8.01074C0.555502 8.00671 0.616316 8.00277 0.681641 7.99805C1.10827 7.96719 1.74351 7.92098 2.57812 7.8623C4.24818 7.74489 6.71689 7.57483 9.9082 7.36426C16.2908 6.94312 25.5668 6.36083 37.1377 5.71289C60.28 4.41698 92.6038 2.86094 129.327 1.82422C202.781 -0.249425 293.813 -0.247641 364.191 8.04297C438.204 16.7617 492.541 39.5663 547.141 60.1504C601.741 80.7348 656.58 99.0867 731.502 98.8047C805.301 98.5269 859.212 80.2101 912.879 59.7832C966.544 39.3568 1019.94 16.8321 1092.81 8.04297Z"
            fill="url(#paint0_linear_197_8482)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_197_8482"
              x1="1457"
              y1="416.499"
              x2="0"
              y2="416.499"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#BA1BBA" />
              <stop offset="1" stopColor="#3447F2" />
            </linearGradient>
          </defs>
        </svg>

        <div className="relative z-10 container px-6 mx-auto h-full text-white">
          <div className="relative h-full flex flex-col items-center justify-center">
            <h3 className="text-white text-center capitalize">
              why choose <span className="uppercase">credify</span>
            </h3>
            <p>
              Experience the future of e-commerce with our cutting-edge identity
              verification and blockchain technology.
            </p>
            <div className="card-container text-black flex flex-col space-y-4 md:space-y-0 md:flex-row space-x-8 mt-6">
              <div
                className="px-6 py-10 w-[350px] rounded-2xl"
                style={{
                  backgroundColor: "white",
                  backgroundImage:
                    "radial-gradient(circle, rgba(0,0,0,0.6) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              >
                <div className="img w-[30px] h-[30px] mb-3">
                  <img src="/images/security.png" alt="" />
                </div>
                <h3 className="font-normal text-[20px]">
                  Smart Contract Escrow
                </h3>
                <p>
                  Automated, secure transactions with built-in dispute
                  resolution on Sui (SUI escrow)
                </p>
              </div>
              <div
                className="px-6 py-10 w-[350px] rounded-2xl"
                style={{
                  backgroundColor: "white",
                  backgroundImage:
                    "radial-gradient(circle, rgba(0,0,0,0.6) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              >
                <div className="flex items-center justify-center w-[30px] h-[30px] mb-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[5px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      fillRule="evenodd"
                      d="M12 1.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5M8.75 6a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0M12 12.25c-2.313 0-4.445.526-6.024 1.414C4.42 14.54 3.25 15.866 3.25 17.5v.102c-.001 1.162-.002 2.62 1.277 3.662c.629.512 1.51.877 2.7 1.117c1.192.242 2.747.369 4.773.369s3.58-.127 4.774-.369c1.19-.24 2.07-.605 2.7-1.117c1.279-1.042 1.277-2.5 1.276-3.662V17.5c0-1.634-1.17-2.96-2.725-3.836c-1.58-.888-3.711-1.414-6.025-1.414M4.75 17.5c0-.851.622-1.775 1.961-2.528c1.316-.74 3.184-1.222 5.29-1.222c2.104 0 3.972.482 5.288 1.222c1.34.753 1.961 1.677 1.961 2.528c0 1.308-.04 2.044-.724 2.6c-.37.302-.99.597-2.05.811c-1.057.214-2.502.339-4.476.339s-3.42-.125-4.476-.339c-1.06-.214-1.68-.509-2.05-.81c-.684-.557-.724-1.293-.724-2.601"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="font-normal text-[20px]">Portable Reputation</h3>
                <p>
                  Build your trust score once and use it across all platforms in
                  the CREDIFY ecosystem
                </p>
              </div>
              <div
                className="px-6 py-10 w-[350px] rounded-2xl"
                style={{
                  backgroundColor: "white",
                  backgroundImage:
                    "radial-gradient(circle, rgba(0,0,0,0.6) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              >
                <div className="flex items-center justify-center w-[30px] h-[30px] mb-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[5px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      d="M22.081.61v7.566h-7.223v6.661H7.566v6.634H0v1.92h9.471v-6.649h7.306v-6.66H24V.61Z"
                    />
                  </svg>
                </div>
                <h3 className="font-normal text-[20px]">
                  Future-proof Commerce
                </h3>
                <p>
                  A system built to scale globally with stablecoin payments,
                  cross-border support, and fraud-resistant workflows
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProductShowcase />
    </NavandFooterWrapper>
  );
}
