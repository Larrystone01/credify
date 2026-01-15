import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F6F8FF] mt-8">
      <div className="footer container mx-auto px-6">
        <div className="upper-layer pt-3 flex flex-col md:flex-row gap-y-10 justify-between items-center px-5 border-b-2 border-b-white pb-20">
          <div className="partner relative w-[294px] h-[60px] mb-0">
            <Image
              src="/images/uptown-logo.png"
              alt="uptown-logo"
              fill
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 294px"
            />
          </div>
          <div className="social-icons flex space-x-8 items-center justify-center">
            <Link href="facebook.com">
              <img src="/images/facebook.png" alt="facebook-icon" />
            </Link>
            <Link href="twitter.com">
              <img src="/images/twitter.png" alt="twitter-icon" />
            </Link>
            <Link href="instagram.com">
              <img src="/images/instagram.png" alt="instagram-icon" />
            </Link>
          </div>
        </div>
        <div className="bottom-layer flex flex-col md:flex-row justify-between pt-4 pb-2 gap-y-4">
          <p className="md:order-1 order-3 text-center">&copy;2026 CREDIFY</p>
          <div className="footer-links flex flex-col-reverse md:flex-row space-x-4 items-center md:order-2">
            <Link href={""} className="underline">
              Contact Support
            </Link>
            <Link href={""} className="underline">
              Help Center
            </Link>
            <Link href={""} className="underline">
              Privacy
            </Link>
            <Link href={""} className="underline">
              Teams
            </Link>
          </div>
          <p className="capitalize text-center md:order-3">
            secure payments powered by sui escrow
          </p>
        </div>
      </div>
    </footer>
  );
}
