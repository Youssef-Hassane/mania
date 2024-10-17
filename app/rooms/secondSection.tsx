import CardInTheSecondSectionOfHotelsPage from "@/components/cardInTheSecondSectionOfHotelsPage";
import { useContext, useEffect, useState } from "react";
import { Context_responseDataRooms, Context_responseDataWithAmenities } from "../Home";

function SecondSection() {
  const { responseDataRooms = [], setResponseDataRooms } = useContext(Context_responseDataRooms);
  const {roomsWithAmenities, setRoomsWithAmenities} = useContext(Context_responseDataWithAmenities);

  const fetchAmenities = async (roomID) => {
    try {
      const response = await fetch(`http://localhost:5001/rooms/${roomID}/amenities`);
      if (!response.ok) {
        throw new Error(`Error fetching amenities for room ${roomID}: ${response.status}`);
      }
      const amenities = await response.json();
      return amenities;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:5001/rooms?city=Heliopolis`);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const roomsData = await response.json();
      const roomsWithAmenitiesPromises = roomsData.map(async (room) => {
        const amenities = await fetchAmenities(room.id); 
        return { ...room, amenities };
      });

      const roomsWithAmenitiesData = await Promise.all(roomsWithAmenitiesPromises);
      setRoomsWithAmenities(roomsWithAmenitiesData);
    } catch (error) {
      console.error("Error searching for rooms:", error);
      alert("An error occurred while searching for rooms. Please try again later.");
    }
  };

    if (!Array.isArray(responseDataRooms) || responseDataRooms.length === 0) {
      handleSearch();
    }


  return (
    <div className="h-auto w-full bg-custom-dark-gray flex flex-wrap px-[100px] justify-center items-center text-center p-[50px] gap-10">
      {roomsWithAmenities.length > 0 ? (
        roomsWithAmenities.map((room) => (
          <CardInTheSecondSectionOfHotelsPage
            key={room.id}
            text={room.name}
            Available={room.isReserved ? "No" : "Yes"}
            price={room.price}
            imageURL={room.imageURL}
            amenities={room.amenities} // Pass amenities here
            where="room"
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SecondSection;
