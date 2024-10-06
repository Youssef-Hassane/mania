"use client";

import Footer from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import React from "react";
import { useMediaQuery } from 'usehooks-ts';





export default function Home({ children }: { children: React.ReactNode }) {
  const isDesktop = useMediaQuery('(min-width: 900px)', { initializeWithValue: false });

  return (
    <>
      <Navbar />
      {children}
      {isDesktop ? <Footer /> : null}

    </>
  );
}