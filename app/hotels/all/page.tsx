// File: app/home/page.tsx
"use client";

import { useContext, useEffect } from "react";
import HotelHeroSection from "../../../components/hotels/hero-section/HotelHeroSection";
import HotelRoomsSection from "../../../components/hotels/hotel-rooms-section/HotelRoomsSection";
import { Context_responseDataHotels } from "@/app/Home";




export default function HotelsPage() {

  const { responseDataHotels = [], setResponseDataHotels } = useContext(Context_responseDataHotels);

  const defaultData = async () => {
    try {
      const response = await fetch(`http://localhost:5001/hotels`);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const responseData = await response.json();

      setResponseDataHotels(responseData);

    } catch (error) {
      console.error("Error searching for rooms:", error);
      alert("An error occurred while searching for rooms. Please try again later.");
    }
  };

  useEffect(() => {
    defaultData()
  }, [])

  if (!Array.isArray(responseDataHotels) || responseDataHotels.length === 0) {
    defaultData();
  }

  return (
    <section>
      <HotelRoomsSection roomsArray={responseDataHotels} />
    </section>
  );
}


