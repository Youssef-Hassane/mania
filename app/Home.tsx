"use client";

import { Navbar } from "@/components/navbar/navbar";
import React from "react";




export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <>
    <Navbar />
    {children}

    </>
  );
}