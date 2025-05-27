"use client";
import React from "react";

function Navbar() {
  return (
    <nav className="h-[104px] bg-[#FAFAFA] py-6 md:py-8 md:px-32 shadow-md w-full max-w-8xl sticky top-0 z-50 flex items-center justify-center">
      <img src="./logo-tribeMD.svg" alt="logo" className="h-[60px] object-contain" />
    </nav>
  );
}

export default Navbar;
