"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, X, Menu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <div className="nav-container container px-6 mx-auto">
        <nav className="bg-[#ECF1FF] grid grid-cols-2 md:grid-cols-3 gap-4 text-[13px] px-8 py-3 rounded-[30px] overflow-x-hidden">
          <div className="logo flex items-center text-[#02aef5] font-bold">
            CREDIFY
          </div>
          <button
            className="hamburger md:hidden justify-self-end"
            onClick={handleOpen}
          >
            <Menu className="dark:text-black" />
          </button>
          <div
            className={`links-explore-btn fixed md:static top-0 right-0 md:w-full w-[75%] h-screen md:h-fit pt-10 md:pt-0 px-4 bg-white md:bg-transparent flex flex-col md:flex-row md:col-span-2 transition-transform duration-1000 ease-in-out dark:text-black  ${
              isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
            }`}
          >
            <button className="md:hidden" onClick={handleClose}>
              <X />
            </button>
            <div className="nav-links flex flex-col md:flex-row gap-3 justify-center items-center">
              <Link href="/features">Feature</Link>
              <Link href="/how-it-works">How It Works</Link>
              <Link href="/market">Market</Link>
              <Link href="/sign-in">Sign In</Link>
              <Link href="/sign-up">Sign Up</Link>
            </div>
            <div className="explore-btns flex flex-col md:flex-row gap-3 md:ml-auto pt-5 md:pt-0">
              <Link
                href=""
                className="flex text-[12px] justify-center items-center gap-1 border-0 bg-linear-to-r from-indigo-800 to-purple-800 text-white px-4 md:py-1 py-[6px] rounded-[40px]"
              >
                Start Shopping <ArrowRight size={12} />
              </Link>
              <div className="rounded-[40px] p-[1px] bg-gradient-to-r from-indigo-500 to-purple-500">
                <Link
                  href="#"
                  className="flex justify-center items-center gap-1 rounded-[38px] bg-[#ECF1FF] px-4 py-1"
                >
                  <span
                    className="bg-gradient-to-r from-indigo-500 to-purple-500
                         bg-clip-text text-transparent text-[12px]"
                  >
                    Explore Solution
                  </span>
                  <ArrowRight size={12} className="text-indigo-800" />
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
