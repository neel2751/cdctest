import Footer from "@/components/footer/footer";
import Navbar from "@/components/header/navbar";
import { FloatingWhatsApp } from "@/components/whatsapp/floatingWhatsapp";
import { FacebookIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <FloatingWhatsApp />
      <Footer />
    </>
  );
};

export default layout;
