import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";

interface NavandFooterWrapperProps {
  children: ReactNode;
}

export default function NavandFooterWrapper({
  children,
}: NavandFooterWrapperProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
