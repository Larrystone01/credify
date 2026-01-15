import {
  ArrowRight,
  Handshake,
  SquarePen,
  UserPlus,
  Star,
  Stars,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import Button from "./button";

export default function HowItWorks() {
  return (
    <section className="my-6">
      <div className="container px-6 mx-auto border rounded-[30px]">
        <div className="heading text-center">
          <h2 className="capitalize text-[30px]">How it works</h2>
          <p className="capitalize">
            Simple, secure, and revolutionary - Here's how CREDIFY Transforms
            online e-commerce
          </p>
        </div>
        <div className="steps-container py-10">
          <div className="step-container relative flex justify-between px-[60px] border rounded-[20px] py-10">
            <div className="left-side self-center relative">
              <div className="icon bg-[#028ACC] w-[50px] h-[50px] rounded-full flex items-center justify-center relative">
                <UserPlus color="white" />
                <p className="absolute text-[#028ACC] bg-white border-[#028ACC] border top-0 -right-2 w-[20px] h-[20px] flex items-center justify-center text-center rounded-full">
                  1
                </p>
              </div>
              <div className="details">
                <h3 className="capitalize font-bold text-[40px]">
                  Create profile
                </h3>
                <p>Create your SUI wallet and Checkout with SUI Escrow</p>
              </div>
              <img
                src="/images/Arrow-1.png"
                alt=""
                className="absolute -right-9 mt-6 hidden md:block"
              />
              <div className="button md:hidden mt-4">
                <Button
                  text="Connect Wallet"
                  icon={ArrowRight}
                  margintop="md:mt-15"
                  width="full"
                />
              </div>
            </div>
            <div className="right-side hidden md:block">
              <div className="step-image relative w-[400px] h-[250px]">
                <Image
                  src={"/images/step-img.png"}
                  alt="Arrow"
                  fill
                  loading="lazy"
                  className="object-cover rounded-[25px]"
                />
              </div>
              <div className="big-button absolute w-[300px] h-[150px] bg-gray-100 text-center rounded-[15px] text-[12px] px-3 right-16 top-38 shadow-2xs">
                <Button
                  text="Connect Wallet"
                  icon={ArrowRight}
                  margintop="md:mt-15"
                  width="full"
                />
                <div className="straight-line border-b mt-10 mb-5 border-gray-300"></div>
              </div>
            </div>
          </div>
          <div className="step-container relative flex justify-between px-[60px] border rounded-[20px] py-10 mt-5">
            <div className="left-side relative hidden md:block">
              <div className="step-image relative w-[400px] h-[250px]">
                <Image
                  src={"/images/step-img.png"}
                  alt="Arrow"
                  fill
                  loading="lazy"
                  className="object-cover rounded-[25px]"
                />
              </div>
              <div className="big-button absolute w-[300px] h-[150px] bg-gray-100 text-center rounded-[15px] text-[12px] px-3 left-50 -bottom-4 shadow-2xs">
                <Button
                  text="Browse Happily"
                  icon={ArrowRight}
                  margintop="md:mt-15"
                  width="full"
                />
                <div className="straight-line border-b mt-10 mb-5 border-gray-300"></div>
              </div>
            </div>
            <div className="right-side self-center relative flex gap-5 items-center justify-center">
              <div className="arrow-img hidden md:block">
                <img
                  src="/images/Arrow-1.png"
                  alt=""
                  className="-scale-x-100"
                />
              </div>
              <div className="icon-details">
                <div className="icon bg-[#028ACC] w-[50px] h-[50px] rounded-full flex items-center justify-center relative">
                  <Handshake color="white" />
                  <p className="absolute text-[#028ACC] bg-white border-[#028ACC] border top-0 -right-2 w-[20px] h-[20px] flex items-center justify-center text-center rounded-full">
                    2
                  </p>
                </div>
                <div className="details">
                  <h3 className="capitalize font-bold text-[40px]">
                    Shop Securely
                  </h3>
                  <p>Create your SUI wallet and Checkout with SUI Escrow</p>
                </div>
                <div className="button mt-4 md:hidden">
                  <Button
                    text="Browse Happily"
                    icon={ArrowRight}
                    margintop="md:mt-15"
                    width="full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="step-container relative flex justify-between px-[60px] border rounded-[20px] py-10 mt-5">
            <div className="left-side self-center relative flex gap-5 items-center justify-center">
              <div className="arrow-img order-2 hidden md:block">
                <img src="/images/Arrow-1.png" alt="" className="" />
              </div>
              <div className="icon-details">
                <div className="icon bg-[#028ACC] w-[50px] h-[50px] rounded-full flex items-center justify-center relative">
                  <SquarePen color="white" />
                  <p className="absolute text-[#028ACC] bg-white border-[#028ACC] border top-0 -right-2 w-[20px] h-[20px] flex items-center justify-center text-center rounded-full">
                    3
                  </p>
                </div>
                <div className="details">
                  <h3 className="capitalize font-bold text-[40px]">
                    build reputation
                  </h3>
                  <p>
                    Complete transactions to earn permanent reputation tokens
                    that follow you everywhere
                  </p>
                </div>
              </div>
            </div>
            <div className="right-side relative image-side hidden md:block">
              <div className="step-image relative w-[400px] h-[250px]">
                <Image
                  src={"/images/step-img2.png"}
                  alt="Arrow"
                  fill
                  loading="lazy"
                  className="object-cover rounded-[25px]"
                />
              </div>
            </div>
          </div>
        </div>
        <section className="prefooter bg-black md:rounded-tr-[150px] rounded-tr-[70px] md:rounded-bl-[150px] rounded-bl-[70px] h-full md:h-[300px] my-6 text-center flex flex-col justify-center items-center gap-7 py-4 md:py-0">
          <div className="rating-container flex justify-center items-center gap-2 h-fit">
            <div className="stars flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-8 h-8 fill-yellow-600" />
              ))}
            </div>
            <p className="text-indigo-700">4.7/5</p>
          </div>
          <div className="ceo relative flex">
            {[1, 2, 3, 4].map((idx) => (
              <div className="image-cont relative w-[52px] h-[52px]" key={idx}>
                <Image
                  src="/images/CEO.png"
                  fill
                  className="object-cover"
                  loading="lazy"
                  alt="customer-image"
                />
              </div>
            ))}
            <div className="num w-[52px] h-[52px] rounded-full bg-[#026B9E] flex justify-center items-center text-[13px] text-white">
              499+
            </div>
          </div>
          <div className="texts text-white">
            <h5 className="capitalize text-[30px]">
              Ready to revolutionize your commerce experience?
            </h5>
            <p className="capitalize text-gray-400">
              Join thousands of verified buyers and sellers in the future of
              e-commerce
            </p>
          </div>
          <Button text="Start Shopping" icon={ShoppingCart} />
        </section>
      </div>
    </section>
  );
}
