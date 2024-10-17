"use client";

import AllContextsProvider from "@/components/AllContextsProvider";
import Footer from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import React, { createContext, useState } from "react";
import { useMediaQuery } from 'usehooks-ts';


export const Context_search = createContext(null);
export const Context_responseDataRooms = createContext(null);
export const Context_responseDataHotels = createContext(null);
export const Context_responseDataWithAmenities = createContext(null);



export default function Home({ children }: { children: React.ReactNode }) {
  const [selectedCity, setSelectedCity] = useState("");
  const [responseDataRooms, setResponseDataRooms] = useState({});
  const [responseDataHotels, setResponseDataHotels] = useState({});
  const [roomsWithAmenities, setRoomsWithAmenities] = useState([]);




  const contexts = [
    [Context_search, { selectedCity, setSelectedCity }],
    [Context_responseDataRooms, { responseDataRooms, setResponseDataRooms }],
    [Context_responseDataHotels, { responseDataHotels, setResponseDataHotels }],
    [Context_responseDataWithAmenities, { roomsWithAmenities, setRoomsWithAmenities }],
  ];



  const isDesktop = useMediaQuery('(min-width: 900px)', { initializeWithValue: false });




  return (
    <AllContextsProvider contexts={contexts}>
      <>
        <Navbar />
        {children}
        {isDesktop ? <Footer /> : null}
      </>
    </AllContextsProvider>
  );
}