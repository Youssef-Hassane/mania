// File: app/home/page.tsx
"use client";

import { useContext } from "react";
import HotelRoomsSection from "../../../components/hotels/hotel-rooms-section/HotelRoomsSection";
import { Context_search, Context_responseDataRooms, Context_responseDataWithAmenities } from "../../Home";
import { useSearchParams, useParams } from 'next/navigation';


export default function HotelsCityIdPage({ params }) {
  const cityID = params;
  // const { responseDataRooms } = useContext(Context_responseDataRooms)
  const { roomsWithAmenities, setRoomsWithAmenities } = useContext(Context_responseDataWithAmenities);
  console.log(cityID, roomsWithAmenities);

  return (
    <div>
      {/* <HotelHeroSection /> */}
      <HotelRoomsSection roomsArray={roomsWithAmenities} />

    </div>
  );
}


