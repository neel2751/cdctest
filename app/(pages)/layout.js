import Footer from "@/components/footer/footer";
import Navbar from "@/components/header/navbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default layout;
